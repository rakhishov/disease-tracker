import React, {Fragment, useEffect, useState} from 'react'

const CountAvg = () =>{

    const [recordInfo, setRecord] = useState([{
        avg: "",
        doctorAvg: ""
    }]);

    const getRecords = async()=>{

        try {
            const response = await fetch("http://localhost:8000/avg_ps");
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
                    <h3 className="text-center mt-5">Public servant current AVG salary is {record.avg}</h3>)
            )}
    </Fragment>
}

export default CountAvg;