import React, {Fragment, useEffect, useState} from 'react'
import editpng from '../images/edit.png'
import deletepng from '../images/delete.png'
import InputRecords from './InputRecords';
import CountAvg from './ListAvg';
import Input_ps from './Input_ps'
import GetDisease from './ListCodes';

const ListRecords = () =>{

    const [recordInfo, setRecord] = useState([{
        email: "",
        cname: "",
        disease_code: "",
        total_deaths: "",
        total_patients: ""
    }]);
    
    const [publicServant, setPS] = useState([{
        email: "",
        department: ""
    }])

    const getPublicServant = async()=>{
        try {
            const response = await fetch("http://localhost:8000/publicservant");
            const jsonData = await response.json();
            setPS(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }

    };

    const getRecords = async()=>{

        try {
            const response = await fetch("http://localhost:8000/record");
            const jsonData = await response.json();
            setRecord(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }

    };

    const deleteRecord = async(email, cname, disease_code) =>{
        try {
            const deletedRecord = await fetch(`http://localhost:8000/record/${email}/${cname}/${disease_code}`, {
                method: "DELETE"
            });
            getRecords();
        } catch (err) {
            console.error(err.message);
        } 
}

    useEffect(()=>{
        getRecords();
        getPublicServant();
    }, []);

    return <Fragment>
        <h1 className="text-center mt-5">All Public Servants</h1>
        <Input_ps />
        <p className="text-center mt-3">Note: it is impossible to delete public servants, since it will delete all records connected to this user.</p>
        <table className="table table-condensed mt-2 text-center">
            <thead>
            <tr>
                <th>email</th>
                <th>department</th>
            </tr>
            </thead>
            <tbody>
            {publicServant.map(publicservant=>(
                <tr key={publicservant.email}>
                    <td>{publicservant.email}</td>
                    <td>{publicservant.department}</td>

                </tr>
            )
                
            )}
            </tbody>
        </table>
        <CountAvg />
        <h1 className="text-center mt-5">Records</h1>
        <p>Note: only PUBLIC SERVANTS can add new records</p>
        <GetDisease />
        <InputRecords />
    <table className="table table-condensed mt-5 text-center">
            <thead>
            <tr>
                <th>email</th>
                <th>cname</th>
                <th>disease_code</th>
                <th>Total deaths</th>
                <th>Total patients</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {recordInfo.map(record=>(
                    <tr key={record.email}>
                    <td>{record.email}</td>
                    <td>{record.cname}</td>
                    <td>{record.disease_code}</td>
                    <td>{record.total_deaths}</td>
                    <td>{record.total_patients}</td>
                    <td>
                        <button className="btn btn-secondary mr-1"> <span><img class="imgicon" src={editpng} alt="edit-button" /></span></button>
                        <button className="btn btn-danger" onClick = {()=>deleteRecord(record.email, record.cname, record.disease_code)} ><span><img class="imgicon" src={deletepng} alt="delete-button" /></span></button>
                    </td>
                </tr>
            )
                
            )}
            </tbody>
        </table>
    </Fragment>
}

export default ListRecords;