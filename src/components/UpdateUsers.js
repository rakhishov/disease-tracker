import React, {Fragment, useState} from "react";

const UpdateUser = () =>{
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [phone, setPhone] = useState("");
    const [cname, setCname] = useState("");
    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try {
            const body = {email, salary, phone, cname};
            const response = await fetch("http://localhost:8000/users",{
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/users";
        } catch (err) {
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <form className="d-flex mt-3" onSubmit={onSubmitForm}>
                <input 
                type="text" 
                className="form-control mr-1"
                value = {email}
                placeholder = "email"
                onChange = {e => setEmail(e.target.value)}
                />
                <input 
                type="text" 
                className="form-control mr-1"
                value = {salary}
                placeholder = "salary"
                onChange = {e => setSalary(e.target.value)}
                />
                <input 
                type="text" 
                className="form-control mr-1"
                placeholder = "phone"
                value = {phone}
                onChange = {e => setPhone(e.target.value)}
                />
                <input 
                type="text" 
                className="form-control mr-1"
                value = {cname}
                placeholder = "country"
                onChange = {e => setCname(e.target.value)}
                />
                <button className ="btn btn-success">Update User</button>
            </form>
        </Fragment>
    );
};

export default UpdateUser;