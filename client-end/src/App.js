import React, { Component } from "react";
import Main from "./Components/MainComponent";
import { AuthProvider } from "./Components/context/AuthContext";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
class App extends Component {
    handleReload = () => {
        window.location.reload();
    };

    componentDidMount() {
        this.alanBtnInstance = alanBtn({
            key: "0f63760e32dc9cbdd610608f6aad42102e956eca572e1d8b807a3e2338fdd0dc/stage",
            onCommand: (commandData) => {
                if (commandData.command === "home") {
                    history.push("/");
                    this.handleReload();
                } else if (commandData.command === "message") {
                    history.push("/chat");
                    this.handleReload();
                } else if (commandData.command === "video") {
                    history.push("/video");
                    this.handleReload();
                } else if (commandData.command === "gesture") {
                    history.push("/gesture");
                    this.handleReload();
                } else if (commandData.command === "mental") {
                    history.push("/mentalscreening");
                    this.handleReload();
                }
            },
        });
    }

    render() {
        return (
            <BrowserRouter>
                <AuthProvider>
                    <div>
                        <Main />
                    </div>
                </AuthProvider>
            </BrowserRouter>
        );
    }
}

export default App;
