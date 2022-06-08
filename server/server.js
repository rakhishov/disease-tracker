const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());



//users all get, delete, update
app.post("/users", async(req, res) =>{
    const {email, name, surname, salary, phone, cname} = req.body;
   try{
       const newUser = await pool.query("INSERT INTO users (email, name, surname, salary, phone, cname) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", 
       [email, name, surname, salary, phone, cname]);
       res.json(newUser.rows[0]);
   } catch(err){
       console.error(err.message);
   }
});

app.put("/users", async(req, res)=>{
    const {email, salary, phone, cname} = req.body;
    try {
        const updatedUser = await pool.query("UPDATE users SET salary = $1, phone = $2, cname = $3 WHERE users.email = $4",
        [salary, phone, cname, email]);
        res.json(updatedUser.rows[0]);
    } catch (error) {
        console.error(error.message)
    }
});

app.get("/users", async(req, res)=>{
    try {
        const allUsers = await pool.query("SELECT * FROM users")
        res.json(allUsers.rows);
    } catch (err) {
     console.error(err.message);   
    }
});

// app.get("/users/:email", async(req, res)=>{
//     try {
//         const {email} = req.params;
//         const user = await pool.query("SELECT * FROM users WHERE email = $1", 
//         [email]);
//         res.json(user.rows[0]); 
//     } catch (err) {
//         console.error(err.message);
//     }
// });
app.get("/users/:email/", async(req, res)=>{
    try {
        const {email} = req.params;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", 
        [email]);
        res.json(user.rows[0]); 
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/users/:email", async(req, res)=>{
    try {
        const {email} = req.params;
        const deletedUser = await pool.query("DELETE FROM users WHERE email = $1",
        [email]);
        res.json("User with this email was deleted");
    } catch (err) {
        console.error(err.message);
    }
});

//diseases
app.get("/disease", async(req, res)=>{
    try {
        const allDiseases = await pool.query("SELECT d.description, d.pathogen, dt.description as disease_type, SUM(rec.total_deaths) as deaths, SUM(rec.total_patients) as patients FROM disease d INNER JOIN diseasetype dt on dt.id = d.id INNER JOIN record rec on rec.disease_code = d.disease_code GROUP BY d.description, d.pathogen, dt.description")
        res.json(allDiseases.rows);
    } catch (err) {
     console.error(err.message);   
    }
});

app.put("/doctors", async(req, res)=>{
    const {email, degree} = req.body;
    try {
        const updatedDoctor = await pool.query("UPDATE doctor SET degree = $1 WHERE doctor.email = $2",
        [degree, email]);
        res.json(updatedDoctor.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

app.get("/disease/:description", async(req, res)=>{
    try {
        const {description} = req.params;
        const disease = await pool.query("SELECT d.description, d.pathogen, dt.description as disease_type, SUM(rec.total_deaths) as deaths, SUM(rec.total_patients) as patients FROM disease d INNER JOIN diseasetype dt on dt.id = d.id INNER JOIN record rec on rec.disease_code = d.disease_code WHERE d.description = $1 GROUP BY d.description, d.pathogen, dt.description", 
        [description]);
        res.json(disease.rows[0]); 
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/disease/:description", async(req, res)=>{
    try {
        const {description} = req.params;
        const deletedDisease = await pool.query("DELETE FROM disease WHERE description = $1",
        [description]);
        res.json("Disease with this name was deleted from database");
    } catch (err) {
        console.error(err.message);
    }
});

//public servants
app.get("/publicservant", async(req, res)=>{
    try {
        const publicServant = await pool.query("Select ps.email, ps.department from publicservant ps")
        res.json(publicServant.rows);
    } catch (err) {
     console.error(err.message);   
    }
});
app.post("/publicservant", async(req, res) =>{
    const {email, department} = req.body;
   try{
       const newPs = await pool.query("INSERT INTO publicservant (email, department) VALUES($1, $2) RETURNING *", 
       [email, department]);
       res.json(newPs.rows[0]);
   } catch(err){
       console.error(err.message);
   }
});


app.get("/avg_ps", async(req, res)=>{
    try{
        const avg = await pool.query("Select CAST(AVG(users.salary) AS int) from users inner join publicservant on publicservant.email = users.email")
        res.json(avg.rows);
    }
    catch(err){
        console.log(err.message);
    }
})

app.get("/avg_doctors", async(req, res)=>{
    try{
        const avg = await pool.query("Select specialize.id, COUNT(specialize.id), diseasetype.description from specialize inner join diseasetype on diseasetype.id=specialize.id group by specialize.id, diseasetype.description ORDER BY specialize.id")
        res.json(avg.rows);
    }
    catch(err){
        console.log(err.message);
    }
})

//countries
app.get("/country", async(req, res)=>{
    try {
        const countries = await pool.query("Select cname from country")
        res.json(countries.rows);
    } catch (err) {
     console.error(err.message);   
    }
});

//record
app.get("/record", async(req, res) =>{
    try {
        const records = await pool.query("Select * from record")
        res.json(records.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.post("/record", async(req, res) =>{
    const {email, cname, disease_code, total_deaths, total_patients} = req.body;
   try{
       const newRecord = await pool.query("INSERT INTO record (email, cname, disease_code, total_deaths, total_patients) VALUES($1, $2, $3, $4, $5) RETURNING *", 
       [email, cname, disease_code, total_deaths, total_patients]);
       res.json(newRecord.rows[0]);
   } catch(err){
       console.error(err.message);
   }
});

app.delete("/record/:email/:cname/:disease_code", async(req, res)=>{
    try {
        const {email, cname, disease_code} = req.params;
        const deleteRecord = await pool.query("DELETE FROM record WHERE (email = $1 AND cname = $2 AND disease_code = $3)",
        [email, cname, disease_code]);
        res.json(deleteRecord.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//doctors
app.get("/doctor", async(req, res)=>{
    try {
        const records = await pool.query("Select doctor.email, doctor.degree, diseasetype.description, diseasetype.id from doctor INNER JOIN specialize on doctor.email=specialize.email inner join diseasetype on specialize.id=diseasetype.id ORDER BY doctor.email")
        res.json(records.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.delete("/specialization/:email/:id", async(req, res)=>{
    try{

        const {email, id} = req.params;
        const deleteRecord = await pool.query("DELETE FROM specialize WHERE (email = $1 AND id = $2)",
            [email, id]);
        res.json(deleteRecord.rows)
        console.log(res);
    } catch (err) {
    console.error(err.message);
}})

app.get("/diseasecode", async(req, res)=>{
    try {
        const disease = await pool.query("SELECT disease.description, disease.disease_code from disease")
        res.json(disease.rows);
    } catch (error) {
        console.error(error.message)
    }
})

const port = 8000;
app.listen(port, () => {
    console.log("App is running on server", port);
})