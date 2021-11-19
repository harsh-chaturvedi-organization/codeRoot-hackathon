import "./Nav.css"
import { useState } from "react";
import GoogleLogin from "react-google-login";
import VenderProfile from "./VenderProfile";

export function Nav(){
    const [userData, setUser] = useState({});
    const [isLogin, setLogin] = useState(false);
    const [visible, setVis] = useState(false)
    const responseGoogle = async (response) => {
        const data = response.profileObj;
        console.log(data);
        setUser({...data});
        setLogin(true);
    }
    return <div className="navBlock">
    <img className="logo" src="https://ph-files.imgix.net/7aadc0e4-ea0e-479a-a01c-d8a1da7213fc.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fill-color=fff&fit=fill&fill=solid&dpr=1" alt="logo"></img>
    <input className="inp" type="text"></input>

    <div>
    {/*<input type="text" />*/}
            {isLogin ? (
                <div>
            {/*<img onMouseOver={() => setVis(true)} src={userData.imageUrl} alt="name" />*/}
                    <div onMouseLeave={() => setVis(false)} style={{ display: visible ? "block" : "block" }}>
                        <img className="profileimg" src={userData.imageUrl} alt=""/>
                    </div>
                </div>
            ) : (
                <div>
                    <GoogleLogin
                        clientId="242686329654-9farf0lceq071kj8g0olrk33pom3mqo2.apps.googleusercontent.com"
                        buttonText="Sign in with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                    />
                </div>
            )}
        </div>
    </div>
}