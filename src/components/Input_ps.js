import React, {Fragment, useState} from "react";

const InputRecords = () =>{
    const [email, setEmail] = useState("");
    const [department, setDept] = useState("");
    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try {
            const body = {email, department};
            const response = await fetch("http://localhost:8000/publicservant",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/records";
        } catch (err) {
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
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
                value = {department}
                placeholder = "Department"
                onChange = {e => setDept(e.target.value)}
                />
                <button className ="btn btn-success">Add Public Servant</button>
            </form>
        </Fragment>
    );
};

export default InputRecords;