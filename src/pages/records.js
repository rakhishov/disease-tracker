import ListRecords from "../components/ListRecords";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import InputRecords from "../components/InputRecords";
import { Header } from "../components/header";
import CountAvg from "../components/ListAvg";
const Records = () =>{
    return(
    <>
        <Fragment>
            <div className = "container">
            <Header />
                <ListRecords />
            </div>
        </Fragment>;
     </>
    )
 }

 export {Records};