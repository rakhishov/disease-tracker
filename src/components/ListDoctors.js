import React, {Fragment, useEffect, useState} from 'react'
import editpng from '../images/edit.png'
import deletepng from '../images/delete.png'
import UpdateDoctor from './UpdateDoctor'
const ListDoctors = () =>{

    const [doctorInfo, setDoctor] = useState([{
        email: "",
        degree: "",
        description: "",
        id:""
    }]);
    const getDoctors = async()=>{

        try {
            const response = await fetch("http://localhost:8000/doctor");
            const jsonData = await response.json();
            setDoctor(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }

    };
    const deleteDoctor = async(email, id) =>{
        
        try {
            const deleteSpec = await fetch(`http://localhost:8000/specialization/${email}/${id}`, {
                method: "DELETE"
            });
//setDoctor(doctorInfo.filter(doctor=> (doctor.email!==email && doctor.id!==id)))
            //getDoctors();
            window.location="/doctors"
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=>{
        getDoctors();
    }, []);

    return <Fragment>
        <p className="text-center mt-5 mb-5">You can update degree of doctor: </p>
        <UpdateDoctor />
    <table className="table table-condensed mt-5 text-center">
            <thead>
            <tr>
                <th>Email</th>
                <th>Degree</th>
                <th>Specialized in</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {doctorInfo.map(doctor=>(
                    <tr key={doctor.email}>
                    <td>{doctor.email}</td>
                    <td>{doctor.degree}</td>
                    <td>{doctor.description}</td>
                    <td>
                        <button className="btn btn-danger" onClick = {()=>deleteDoctor(doctor.email, doctor.id)} ><span><img class="imgicon" src={deletepng} alt="delete-button" /></span></button>
                    </td>
                </tr>
            )
                
            )}
            </tbody>
        </table>
    </Fragment>
}

export default ListDoctors;