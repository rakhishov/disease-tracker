import React, {Fragment, useState} from "react";

const UpdateDoctor = () =>{
    const [email, setEmail] = useState("");
    const [degree, setSalary] = useState("");
    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try {
            const body = {email, degree};
            const response = await fetch("http://localhost:8000/doctors",{
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/doctors";
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
                value = {degree}
                placeholder = "degree"
                onChange = {e => setSalary(e.target.value)}
                />
                <button className ="btn btn-success">Update User</button>
            </form>
        </Fragment>
    );
};

export default UpdateDoctor;