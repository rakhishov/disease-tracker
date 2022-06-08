import React, {Fragment, useEffect, useState} from 'react'
import editpng from '../images/edit.png'
import deletepng from '../images/delete.png'

//function responsible for listing all users
const ListUsers = () =>{

    const [userInfo, setUser] = useState([{
        email: "",
        name: "",
        surname: "",
        salary: "",
        phone: "",
        cname: ""
    }]);
    const getUsers = async()=>{

        try {
            const response = await fetch("http://localhost:8000/users");
            const jsonData = await response.json();
            setUser(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }

    };

    //delete user function
    const deleteUser = async(email) =>{
    try {
        const deleteUser = await fetch(`/users/${email}`, {
            method: "DELETE"
        });

        setUser(userInfo.filter(user=> user.email!==email))
    } catch (err) {
        console.error(err.message);
    }

}
    useEffect(()=>{
        getUsers();
    }, [])

    return <Fragment>
         <table className="table table-condensed mt-5 text-center">
    <thead>
      <tr>
        <th>Email</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Salary</th>
        <th>Phone</th>
        <th>Country</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {userInfo.map(user=>(
            <tr key={user.name}>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.salary}</td>
            <td>{user.phone}</td>
            <td>{user.cname}</td>
            <td>
                
                <button className="btn btn-danger" onClick = {()=>deleteUser(user.email)} ><span><img class="imgicon" src={deletepng} alt="delete-button" /></span></button>
            </td>
        </tr>
      )
        
      )}
    </tbody>
  </table>
    </Fragment>
}

export default ListUsers;