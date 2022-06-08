import React, {Fragment, useState} from "react";

const InputRecords = () =>{
    const [email, setEmail] = useState("");
    const [cname, setCname] = useState("");
    const [disease_code, setDiseasecode] = useState("");
    const [total_deaths, setDeaths] = useState("");
    const [total_patients, setPatients] = useState("");
    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try {
            const body = {email, cname, disease_code, total_deaths, total_patients};
            const response = await fetch("http://localhost:8000/record",{
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
            <form className="d-flex mt-5" action="rec" onSubmit={onSubmitForm}>
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
                value = {cname}
                placeholder = "country"
                onChange = {e => setCname(e.target.value)}
                />
                <input 
                type="text" 
                className="form-control mr-1"
                placeholder = "disease_code"
                value = {disease_code}
                onChange = {e => setDiseasecode(e.target.value)}
                />
                <input 
                type="text" 
                className="form-control mr-1"
                value = {total_deaths}
                placeholder = "total deaths"
                onChange = {e => setDeaths(e.target.value)}
                />
                <input 
                type="text" 
                className="form-control mr-1"
                placeholder = "total patients"
                value = {total_patients}
                onChange = {e => setPatients(e.target.value)}
                />
                <button className ="btn btn-success">Add Record</button>
            </form>
        </Fragment>
    );
};

export default InputRecords;