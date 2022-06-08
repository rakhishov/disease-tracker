import ListDiseases from "../components/ListDiseases";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";

const Diseases = () =>{
    return(
    <>
        <Fragment>
            <div className = "container">
            <Header />
                <h1 className="text-center mt-5">Diseases</h1>
                <ListDiseases />
                <h3 className="text-center mt-5">If there is no disease, it means that there is no records</h3>
            </div>
        </Fragment>;
     </>
    )
 }

 export {Diseases};