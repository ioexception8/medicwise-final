import React, { useRef, useState } from "react";
import { useAuth } from "../Components/context/AuthContext";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Button } from "react-bootstrap";

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = createBrowserHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push("/");
            window.location.reload(false);
        } catch {
            setError("Failed to create an account");
        }
    }

    return (
        <div
            className="centered flex h-full w-full"
            style={{
                height: "500px",
                marginLeft: "45%",
                marginTop: "100px",
                marginBottom: "100px",
            }}
        >
            <div className="shadow-xl p-8" style={{ width: "300px" }}>
                {error && (
                    <div
                        className="bg-red-500 signUp-font text-white p-2 text-sm flex justify-center mb-4 rounded-sm"
                        style={{ textAlign: "center" }}
                    >
                        {error}
                    </div>
                )}
                <form className="max-w-sm" onSubmit={handleSubmit}>
                    <div className="mb-4" id="email">
                        <label
                            className="block text-gray-600 text-sm font-bold mb-2 signUp-font"
                            htmlFor="password"
                        >
                            Email
                        </label>
                        <br />
                        <input
                            className="shadow appearance-none border border-rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline signUp-font"
                            type="email"
                            required
                            ref={emailRef}
                            placeholder="email"
                        />
                    </div>
                    <div className="mb-4" id="password">
                        <label
                            className="block text-gray-600 text-sm font-bold mb-2 signUp-font"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-rounded w-full h-12 py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            ref={passwordRef}
                            placeholder="*************"
                        />
                    </div>
                    <div className="mb-4" id="password-confirm">
                        <label
                            className="block text-gray-600 text-sm font-bold mb-2 signUp-font"
                            htmlFor="password"
                        >
                            Password Confirmation
                        </label>
                        <input
                            className="shadow appearance-none border border-rounded w-full h-12 py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            ref={passwordConfirmRef}
                            placeholder="*************"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Button
                            variant="btn btn-dark"
                            type="submit"
                            disabled={loading}
                        >
                            Sign up
                        </Button>{" "}
                    </div>
                </form>
                <div
                    className="flex justify-center mt-4 text-gray-800 signUp-font"
                    style={{ fontSize: "13px" }}
                >
                    Already have an account?{" "}
                    <Link
                        className="font-bold text-blue-500 hover:text-blue-800"
                        to="/login"
                    >
                        &nbsp;Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}
