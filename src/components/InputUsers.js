import React, {Fragment, useState} from "react";
import UpdateUser from "./UpdateUsers";
const InputUser = () =>{
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [salary, setSalary] = useState("");
    const [phone, setPhone] = useState("");
    const [cname, setCname] = useState("");
    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try {
            const body = {email, name, surname, salary, phone, cname};
            const response = await fetch("http://localhost:8000/users",{
                method: "POST",
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
            <h1 className="text-center mt-5">Users</h1>
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
                value = {name}
                placeholder = "name"
                onChange = {e => setName(e.target.value)}
                />
                <input 
                type="text" 
                className="form-control mr-1"
                placeholder = "surname"
                value = {surname}
                onChange = {e => setSurname(e.target.value)}
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
                <button className ="btn btn-success">Add User</button>
            </form>
            <UpdateUser />
        </Fragment>
    );
};

export default InputUser;