import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import CountAvg from "../components/ListAvg";
import covid from "../images/covid19.jpg"
import ps from "../images/Public-Servants.jpg"
import users from "../images/users.png"
import InputRecords from "../components/InputRecords";
import doctors from "../images/doctors.jpg"
import { Container, Row, Col } from 'react-grid-system';


const Homepage = () =>{
    return(
    <>
        <Fragment>
            <div className = "container">
                <h1 className="text-center mt-5">Welcome to my HW Bonus Assignment!</h1>
                <h2 className="text-center mt-5">Choose what you want to create/read/update/delete:</h2>

                <Container className="mt-5">
                    <Row>
                        <Col className="text-center" sm={6}>
                            <Link to="/users"><img src={users} height="200px" width="auto" alt="publicservants and records"></img></Link>
                            <h3>All registered users</h3>
                        </Col>
                        <Col className="text-center" sm={6}>
                            <Link  to="/diseases"><img src={covid} height="200px" width="auto" alt="diseases"></img></Link>
                            <h3>Diseases</h3>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="text-center">
                            <Link to="/records"><img src={ps} height="200px" width="auto" alt="publicservants and records"></img></Link>
                            <h3>Public Servants and Records</h3>
                        </Col>
                        <Col className="text-center">
                            <Link to="/doctors"><img src={doctors} height="200px" width="auto" alt="publicservants and records"></img></Link>
                            <h3>Doctors</h3>
                        </Col>
                    </Row>
                    <h3 className="text-center mt-4">IMPORTANT! If you want to register yourself as a doctor/public servant, firstly you needed be registered as an User!</h3>
                </Container>
            </div>
        </Fragment>;
     </>
    )
}

export {Homepage};