import "./Navbar.css"
import { useState } from "react";
import GoogleLogin from "react-google-login";
import VenderProfile from "./VenderProfile";
export const Navbar = () => {
    const [userData, setUser] = useState({});
    const [isLogin, setLogin] = useState(false);
    const [visible, setVis] = useState(false)

    
    const responseGoogle = async (response) => {
        const data = response.profileObj;
        console.log(data);
        setUser({...data});
        setLogin(true);
        // axios({
        //   method: "post",
        //   mode: "no-cors",
        //   url: "http://localhost:2345/user/login",
        //   data: data,
        // })
        //   .then(function (response) {
        //     setUser(data);
        //     setLogin(true);
        //     // console.log(user);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    };
    return (
        <div>
    {/*<input type="text" />*/}
            {isLogin ? (
                <div>
            {/*<img onMouseOver={() => setVis(true)} src={userData.imageUrl} alt="name" />*/}
                    <div onMouseLeave={() => setVis(false)} style={{ display: visible ? "block" : "block" }}>
                        <VenderProfile  img={userData.imageUrl} name={userData.name}/>
                    </div>
                </div>
            ) : (
                <>
                    <div className="googleSampleDesine">
                        <img className="googelLogo" src="https://cdn.vox-cdn.com/thumbor/ULiGDiA4_u4SaK-xexvmJVYUNY0=/0x0:640x427/1400x1050/filters:focal(0x0:640x427):format(jpeg)/cdn.vox-cdn.com/assets/3218223/google.jpg" alt="googleLogo" />
                        <h1>One Acoount. All of google</h1>
                        <img className="googleAvtar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hcsCwCe-ozBDrOgk6P2sa0WHHocfKSiNYT-8j8AYBELZQ0EbI5LvF_UVaCo6M37cHRY&usqp=CAU" alt="logo" />
                    </div>
                    <div className="signInWithGoogle">
                        <GoogleLogin 
                            clientId="242686329654-9farf0lceq071kj8g0olrk33pom3mqo2.apps.googleusercontent.com"
                            buttonText="Sign in with google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                        />
                    </div>
                </>
            )}
        </div>
    );
};