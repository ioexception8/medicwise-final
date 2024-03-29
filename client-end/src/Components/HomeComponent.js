import React from "react";
import { Button } from "react-bootstrap";
import med from "./Images/med2.png";
import dis from "./Images/dis.png";
import vc from "./Images/vc.png";
import chat from "./Images/chat.png";
import team from "./Images/team.png";
import { useAuth } from "./context/AuthContext";
import { createBrowserHistory } from "history";
import { NavLink } from "react-router-dom";

function Home(props) {
    const { currentUser, logout } = useAuth();
    const history = createBrowserHistory();

    async function handleLogout() {
        try {
            history.push("/");
            await logout();
        } catch {}
    }

    return (
        <>
            <div className="spltter-home"></div>
            <div className="container main-body-home">
                <div className="row">
                    <div className="col-sm-7">
                        <img src={med} alt=""></img>
                    </div>
                    <div className="col-sm-5 quotes-doctor">
                        <h4>
                            A good doctor treats the disease, but the great
                            doctor treats the patient who has the disease.
                        </h4>
                        <h6>Let's find the path to a peaceful life together</h6>
                        <div>
                            {currentUser?.email ? (
                                <div>
                                    <div
                                        style={{
                                            fontSize: "17px",
                                            color: "red",
                                        }}
                                        className="signUp-font my-12"
                                    >
                                        {currentUser?.email}
                                    </div>
                                    <Button
                                        style={{ marginTop: "10px" }}
                                        variant="btn btn-dark"
                                        onClick={handleLogout}
                                    >
                                        Log Out
                                    </Button>
                                </div>
                            ) : (
                                <div style={{ marginTop: "30px" }}>
                                    <NavLink to="/login">
                                        <Button variant="btn btn-dark">
                                            Login
                                        </Button>
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="spltter-home"></div>
                <div className="d-flex justify-content-center my-5">
                    <span className="d-flex  navbar-header">
                        W H A T &nbsp;&nbsp;&nbsp;W E&nbsp;&nbsp;&nbsp; O F F E
                        R
                    </span>
                    <hr className="hr2" />
                </div>

                <div className="container px-5 mb-5">
                    <div className="row d-flex justify-content-lg-around">
                        <div className="card kard" style={{ width: "18rem" }}>
                            <img
                                className="card-img-top"
                                src={chat}
                                alt="Card"
                            />
                            <div class="card-body">
                                <p class="card-text quick">
                                    One good conversation can shift the
                                    direction of change.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <Button
                                        className=" poppins"
                                        variant="outline-muted"
                                        href="/chat"
                                    >
                                        Converse
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="card kard" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={vc} alt="Card" />
                            <div class="card-body">
                                <p class="card-text quick">
                                    A video room where you can communicate with
                                    the doctor more precisely.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <Button
                                        className=" poppins"
                                        variant="outline-muted"
                                        href="/video"
                                    >
                                        Video Call
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="card kard" style={{ width: "18rem" }}>
                            <img
                                className="card-img-top"
                                src={dis}
                                alt="Card"
                            />
                            <div class="card-body">
                                <p class="card-text quick">
                                    A gesture room where you can communicate
                                    with doctors using sign languages.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <Button
                                        className=" poppins"
                                        variant="outline-muted"
                                        href="/gesture"
                                    >
                                        Gesture Call
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="spltter-home"></div>
                <div className="d-flex justify-content-center my-5">
                    <span className="d-flex  navbar-header">
                        M E E T &nbsp;&nbsp;&nbsp;T H E&nbsp;&nbsp;&nbsp; T E A
                        M
                    </span>
                    <hr className="hr2" />
                </div>
                <div className="container main-body-home">
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="doc" src={team} alt=""></img>
                        </div>
                        <div className="col-sm-5 quotes-doctor">
                            <h4 style={{ fontSize: "32px" }}>
                                Consult with the best doctors at affordable
                                prices
                            </h4>
                            <h6 style={{ fontSize: "20px" }}>
                                Our doctors are experienced and verified
                                professionals to provide you the best care at
                                their earliest.
                            </h6>
                            <p>
                                <Button variant="btn btn-dark" href="/doctors">
                                    Browse Our Doctors
                                </Button>{" "}
                                &nbsp;&nbsp;&nbsp;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
