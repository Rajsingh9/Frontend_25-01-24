import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [Username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [UsernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    const navigate = useNavigate();
        
        const onButtonClick = () => {
        // You'll update this function later...
        const checkAccountExists = (callback) => {
            fetch("http://localhost:3080/check-account", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({Username})
            })
            .then(r => r.json())
            .then(r => {
                callback(r?.userExists)
            })
        }
    
        // Log in a user using email and password
        const logIn = () => {
            fetch("http://localhost:3080/auth", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({Username, password})
            })
            .then(r => r.json())
            .then(r => {
                if (r.message === 'success') {
                    localStorage.setItem("user", JSON.stringify({Username, token: r.token}))
                    props.setLoggedIn(true)
                    props.setUsername(Username)
                    navigate("/")
                } else {
                    window.alert("Wrong email or password")
                }
            })
        }

            // Set initial error values to empty
            setUsernameError("")
            setPasswordError(" ")
    
            // Check if the user has entered both fields correctly
            if (Username === "") {
                setUsernameError("Please enter your Username")
                return
            }
    
            if (password === "") {
                setPasswordError("Please enter a password")
                return
            }
            
            checkAccountExists(accountExists => {
                // If yes, log in 
                if (accountExists)
                    logIn()
                else
                // Else, ask user if they want to create a new account and if yes, then log in
                    if (window.confirm(`An account does not exist with this email address: ${  Username  }. Do you want to create a new account?`)) {
                        logIn()
                    }
            })        
    
        }

     return <div className="mainContainer">
        <div className="titleContainer">
            <div>Login</div>
        </div>
        <br />
        <div className="inputContainer">
            <input
                value={Username}
                placeholder="Enter your username here"
                onChange={ev => setUsername(ev.target.value)}
                className="inputBox" />
            <label className="errorLabel">{UsernameError}</label>
        </div>
        <br />
        <div className="inputContainer">
            <input
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className="inputBox" />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className="inputContainer">
            <input
                className="inputButton"
                type="button"
                onClick={onButtonClick}
                value="Log in" />
        </div>
    </div>

}

export default Login; 