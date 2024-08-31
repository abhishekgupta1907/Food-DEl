import { assets } from "../../assets/assets";
import "./LoginPopup.css";
import React, { useState } from "react";

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");
    return (
        <div className="login-popup">
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt=""
                    />
                </div>
                <div className="login-pupup-inputs">
                    {currentState === "Login" ? (
                        <></>
                    ) : (
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="your Name"
                            required
                        />
                    )}

                    <input
                        type="email"
                        name=""
                        id=""
                        required
                        placeholder="Your Email"
                    />
                    <input
                        type="password"
                        name=""
                        id=""
                        required
                        placeholder="password"
                    />
                </div>
                <button>
                    {currentState === "Sing Up" ? "Create Account" : "LogIn"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugiat consectetur tempora dicta vero doloribus
                        sit earum quia nulla ab tempore!
                    </p>
                </div>
                {currentState === "Login" ? (
                    <p>
                        Create A new Acount?{" "}
                        <span onClick={() => setCurrentState("Sing Up")}>
                            Click Here
                        </span>
                    </p>
                ) : (
                    <p>
                        Already Have An Account?{" "}
                        <span onClick={() => setCurrentState("Login")}>
                            Login Here
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
