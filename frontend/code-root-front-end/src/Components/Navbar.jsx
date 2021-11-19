import { useState } from "react";
import GoogleLogin from "react-google-login";
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
            <input type="text" />
            {isLogin ? (
                <div>
                    <img onMouseOver={() => setVis(true)} src={userData.imageUrl} alt="name" />
                    <div onMouseLeave={() => setVis(false)} style={{ display: visible ? "block" : "none" }}>
                        userDetaiil
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
    );
};