import "./HomePage.css";
import {Link} from "react-router-dom"
function HomePage(){

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