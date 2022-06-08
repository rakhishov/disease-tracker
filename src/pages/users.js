import InputUser from "../components/InputUsers";
import ListUsers from "../components/ListUsers";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";

const Users = () =>{
    return(
    <>
        <Fragment>
            <div className = "container">
            <Header />
            <InputUser />
            <ListUsers />
            </div>
        </Fragment>;
     </>
    )
 }

 export {Users};