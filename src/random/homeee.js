import React from "react"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { loggedIn, Username } = props
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        // You'll update this function later
            if (loggedIn) {
                localStorage.removeItem("user")
                props.setLoggedIn(false)
            } else {
                navigate("/login")
            } 
        }

    return <div className="mainContainer">.
          
        <div className="buttonContainer">
            <input
                className="inputButton"
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
            {(loggedIn ? <div> 
                Your Username is {Username}
            </div> : <div/>)}
        </div>


    </div> 
}

export default Home 