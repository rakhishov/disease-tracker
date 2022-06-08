import React, {Fragment, useEffect, useState} from 'react'

const DoctorAvg = () =>{

    const [recordInfo, setRecord] = useState([{
        id: "",
        count: 0,
        description: ""
    }]);

    const getRecords = async()=>{

        try {
            const response = await fetch("http://localhost:8000/avg_doctors");
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
            {recordInfo.map(record=>(
                    <h4 className="text-center mt-5">There are {record.count} doctors specialized in {record.description}</h4>)
            )}
    </Fragment>
}

export default DoctorAvg;