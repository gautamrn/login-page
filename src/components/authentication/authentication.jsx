import React from "react";
import './authentication.css';


const authentication = () => {
    return(
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src='' />
                    <input type="text" />
                </div>
                <div className="input">
                    <img src='' />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src='' />
                    <input type="password" />
                </div> 
            </div>
        </div>
    )
}

export default authentication;