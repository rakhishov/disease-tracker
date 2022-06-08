import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import DoctorAvg from "../components/ListAvgDoctors";
import ListDoctors from "../components/ListDoctors";

const Doctors = () =>{
    return(
    <>
        <Fragment>
            <div className = "container">
                <Header />
                <h1 className="text-center mt-5">Doctors Specialization</h1>
                <ListDoctors />
                <DoctorAvg />
            </div>
        </Fragment>;
     </>
    )
 }

 export {Doctors};