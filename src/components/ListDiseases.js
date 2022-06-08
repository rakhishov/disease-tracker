import React, {Fragment, useEffect, useState} from 'react'
import editpng from '../images/edit.png'
import deletepng from '../images/delete.png'
const ListDiseases = () =>{

    const [diseaseInfo, setDisease] = useState([{
        description: "",
        pathogen: "",
        disease_type: "",
        deaths: "",
        patients: "",
        disease_code: ""
    }]);
    const getDisease = async()=>{

        try {
            const response = await fetch("http://localhost:8000/disease");
            const jsonData = await response.json();
            setDisease(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }

    };
    const deleteDisease = async(description) =>{
        try {
            const deleteUser = await fetch(`http://localhost:8000/disease/${description}`, {
                method: "DELETE"
            });
    
            window.location="/diseases"
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=>{
        getDisease();
    }, []);

    return <Fragment>
    <table className="table table-condensed mt-5 text-center">
            <thead>
            <tr>
                <th>Disease</th>
                <th>Pathogen</th>
                <th>Disease Type</th>
                <th>Total deaths</th>
                <th>Total patients</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {diseaseInfo.map(user=>(
                    <tr key={user.description}>
                    <td>{user.description}</td>
                    <td>{user.pathogen}</td>
                    <td>{user.disease_type}</td>
                    <td>{user.deaths}</td>
                    <td>{user.patients}</td>
                    <td>
                        <button className="btn btn-danger" onClick = {()=>deleteDisease(user.description)} ><span><img class="imgicon" src={deletepng} alt="delete-button" /></span></button>
                    </td>
                </tr>
            )
                
            )}
            </tbody>
        </table>
    </Fragment>
}

export default ListDiseases;