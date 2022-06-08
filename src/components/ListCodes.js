import React, {Fragment, useEffect, useState} from 'react'

const GetDisease= () =>{

    const [diseaseInfo, setRecord] = useState([{
        description: "",
        disease_code:""
    }]);

    const getRecords = async()=>{

        try {
            const response = await fetch("http://localhost:8000/diseasecode");
            const jsonData = await response.json();
            setRecord(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }

    };

    useEffect(()=>{
        getRecords();
    }, []);

    return <Fragment>
        <p>
            {diseaseInfo.map(record=>(
                    <p>{record.description} - {record.disease_code}</p>)
            )}
        </p>
    </Fragment>
}

export default GetDisease;