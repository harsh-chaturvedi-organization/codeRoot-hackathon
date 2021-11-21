import "./HomePage.css";
import { Link } from "react-router-dom"
import React from "react"
function HomePage(){

    React.useEffect(() => {
        localStorage.removeItem("email")
},[])

    return (
        <div className="homePageMaindiv">
            <Link className="userAndVender" to="/loginUser">
                <div >
                    Procced To USER
                </div>
            </Link>
            <Link className="userAndVender" to="/loginVender">
                <div>
                    Procced To VENDER
                </div>
            </Link>
            
        </div>
    )
}

export default HomePage;