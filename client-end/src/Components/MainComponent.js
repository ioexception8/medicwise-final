import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Video from "./VideoComponent";
import Chating from "./ChatComponent";
import Gesture from "./GestureVideoComponent";
import Signup from "../auth/Signup";
import Doctor from "./DoctorComponent";
import Login from "../auth/Login";
import ForgotPassword from "../auth/ForgotPassword";
import MentalScreening from "./mentalScreeningComponent";
import { Switch, Route } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/video" component={Video} />
                    <Route path="/chat" component={Chating} />
                    <Route path="/gesture" component={Gesture} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/doctors" component={Doctor} />
                    <Route
                        path="/mentalscreening"
                        component={MentalScreening}
                    />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;
