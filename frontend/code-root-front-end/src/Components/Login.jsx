// import { DropDown } from "./dropDown";
import { useState } from "react";
import Modal from "react-modal";
import { Modaldiv } from "./login.styles";
import GoogleLogin from "react-google-login";
// import { border } from "@mui/system";
import axios from "axios";
// import { Link } from "react-router-dom";

function Login(){ 
    const [p1, setP1] = useState(false);
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});

    const responseGoogle = async (response) => {
        const data = response.profileObj;
    
        axios({
          method: "post",
          mode: "no-cors",
          url: "http://localhost:2345/user/login",
          data: data,
        })
          .then(function (response) {
            setUser(data);
            setLogin(true);
            // console.log(user);
          })
          .catch(function (error) {
            console.log(error);
          });
      };

    return(
        <>
        <button
            className="signIn"
            onClick={() => {
              setP1(true);
            }}
          >
            SignIn
          </button>
        <Modal  
            isOpen={p1} 
            style={{
              content: {
                width: "40vw",
                height: "60vh",
                margin: "auto",
                background: "#f3f3f3",
              },
            }}
          >
            <button
              onClick={() => {
                setP1(false);
              }}
              style={{
                position: "absolute",
                right: "0%",
                top: "0px",
                border: "none",
                color: "#da552f",
              }}
            >
              close
            </button>
            
            <Modaldiv>
              <img src="Kitty.png" alt="" />
              <div className="text-content">
                <h2>Sign up on Product Hunt</h2>
                <p>
                  Join our community of friendly folks discovering and sharing
                  the latest products in tech.
                </p>
              </div>
              <GoogleLogin
                clientId="242686329654-9farf0lceq071kj8g0olrk33pom3mqo2.apps.googleusercontent.com"
                buttonText="Sign in with google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              <div className="other-logins">
                <button>
                  <svg
                    viewBox="0 0 16 13"
                    xmlns="http://www.w3.org/2000/svg"
                    height="13"
                    class="styles_twitter__3oYIJ"
                  >
                    <path d="M15.999 1.537a6.57 6.57 0 01-1.885.517A3.296 3.296 0 0015.557.238a6.576 6.576 0 01-2.084.796A3.282 3.282 0 007.88 4.027 9.32 9.32 0 011.112.599 3.28 3.28 0 002.13 4.98a3.27 3.27 0 01-1.487-.41v.042a3.284 3.284 0 002.633 3.217 3.29 3.29 0 01-1.483.056 3.286 3.286 0 003.067 2.28A6.587 6.587 0 010 11.523a9.29 9.29 0 005.032 1.475c6.038 0 9.34-5.001 9.34-9.338 0-.143-.004-.284-.01-.425a6.673 6.673 0 001.637-1.698H16z"></path>
                  </svg>
                </button>
                <button>
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                  >
                    <g fill="none">
                      <circle fill="#1877F2" cx="8" cy="8" r="8"></circle>
                      <path
                        d="M11.114 10.312L11.47 8H9.25V6.5c0-.633.31-1.25 1.304-1.25h1.008V3.281a12.28 12.28 0 00-1.79-.156c-1.828 0-3.022 1.107-3.022 3.113V8H4.719v2.312h2.03v5.59c.83.13 1.673.13 2.501 0v-5.59h1.864z"
                        fill="#FFF"
                      ></path>
                    </g>
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21.9 31.4"
                    height="16"
                  >
                    <path d="M18.3 13.4c1.3.2 2.2.8 2.7 1.6s.8 2.2.8 4c0 3.6-1.1 6.6-3.3 8.9-2.2 2.3-5 3.5-8.4 3.5-1.3 0-2.6-.2-3.9-.7-1.3-.5-2.3-1.2-3.2-2-1-.9-1.8-2-2.3-3-.4-1.1-.7-2.2-.7-3.3 0-1.2.3-2.2.8-2.9.5-.7 1.4-1.1 2.5-1.4-.2-.5-.4-.9-.5-1.3-.1-.3-.2-.6-.2-.8 0-.6.3-1.3 1-2s1.3-1 1.9-1c.3 0 .5 0 .8.1.3.1.6.2 1 .5-.9-3-1.8-5.5-2.3-7.2-.5-1.7-.7-2.8-.7-3.5 0-.9.2-1.6.7-2.1C5.4.3 6.1 0 6.9 0c1.3 0 3 3 5.1 9.1.4 1 .6 1.8.8 2.4.2-.4.4-1.1.7-1.9 2.1-6 3.9-9 5.3-9 .7 0 1.3.2 1.8.7.4.5.7 1.2.7 2 0 .6-.2 1.8-.7 3.5-.6 1.7-1.3 3.9-2.3 6.6zM2.9 22.2c.2.2.5.6.8 1.1.9 1.3 1.8 2 2.6 2 .3 0 .5-.1.7-.3.2-.2.3-.4.3-.5 0-.2-.1-.6-.4-1.1-.3-.5-.7-1.1-1.2-1.7-.6-.7-1.1-1.3-1.4-1.6-.4-.3-.7-.5-.9-.5-.5 0-1 .3-1.4.8-.4.5-.6 1.2-.6 1.9 0 .6.1 1.2.4 2 .3.7.7 1.5 1.3 2.2.9 1 1.9 1.9 3.2 2.5 1.3.6 2.6.9 4.2.9 2.8 0 5.1-1 7-3.1 1.9-2.1 2.8-4.7 2.8-7.9 0-1-.1-1.7-.2-2.3-.1-.6-.4-1-.7-1.2-.6-.5-1.7-.9-3.4-1.3s-3.5-.6-5.3-.6c-.5 0-.9.1-1.1.3-.2.2-.3.5-.3.9 0 1 .5 1.7 1.6 2.1 1.1.4 2.9.7 5.3.7h.9c.2 0 .4.1.5.2.1.2.2.4.2.7-.2.2-.7.5-1.5.8-.8.3-1.3.6-1.7.9-.9.6-1.6 1.4-2.1 2.3-.5.9-.8 1.7-.8 2.5 0 .5.1 1 .3 1.7.2.7.3 1.1.3 1.2v.4c-.6 0-1.1-.4-1.5-1.1-.4-.7-.5-1.6-.5-2.8v-.2c-.1.1-.2.2-.3.2-.1 0-.2.1-.4.1h-.4c-.1 0-.2-.1-.4-.1 0 .2.1.3.1.5v.4c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.5.6-.9 0-1.8-.4-2.8-1.3-.9-.9-1.4-1.7-1.4-2.6 0-.2 0-.3.1-.4 0-.5.1-.6.2-.7zm6.5.5c.2 0 .5-.1.7-.3.2-.2.3-.5.3-.7 0-.3-.2-.9-.6-1.9-.4-1-.9-2-1.5-2.9-.4-.7-.9-1.3-1.3-1.6-.4-.4-.8-.5-1.2-.5-.3 0-.6.2-1 .6-.4.4-.5.7-.5 1.1 0 .3.2.9.5 1.6.4.7.8 1.4 1.4 2.2.6.8 1.2 1.5 1.8 2 .6.2 1 .4 1.4.4zm2.1-10.4L9.1 5.6c-.6-1.7-1-2.9-1.4-3.4-.3-.5-.6-.8-1-.8-.3 0-.5.1-.7.3-.3.3-.4.6-.4 1 0 .7.3 1.8.8 3.4.5 1.6 1.3 3.8 2.3 6.4.1-.2.2-.3.4-.3.2-.1.4-.1.6-.1h.5c.3.1.7.1 1.3.2zm2.4 6.5c-.6 0-1.2-.1-1.8-.2-.6-.1-1.1-.2-1.6-.4.2.5.4.9.6 1.4.2.5.3.9.4 1.4.3-.4.7-.8 1.1-1.2.5-.4.9-.7 1.3-1zm2.9-5.8c1-2.6 1.7-4.8 2.3-6.5.5-1.7.8-2.7.8-3.1 0-.4-.1-.7-.3-1-.2-.2-.4-.3-.7-.3-.4 0-.8.3-1.2 1-.4.7-.9 1.7-1.4 3.2l-2.2 6.2 2.7.5z"></path>
                  </svg>
                </button>
                <button>
                  <svg
                    viewBox="0 0 14 16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                  >
                    <path d="M13.608 11.905c-.362.8-.534 1.158-1 1.865-.648.987-1.563 2.217-2.696 2.227-1.007.01-1.266-.655-2.633-.647-1.367.008-1.652.66-2.659.65-1.133-.01-2-1.12-2.648-2.109-1.815-2.762-2.004-6.002-.885-7.725.795-1.225 2.05-1.941 3.23-1.941 1.2 0 1.956.658 2.949.658.963 0 1.55-.659 2.94-.659 1.049 0 2.161.571 2.954 1.559-2.597 1.423-2.175 5.13.448 6.122zm-4.31-9.409c.505-.648.887-1.561.748-2.496-.824.056-1.788.58-2.35 1.264-.511.62-.933 1.54-.77 2.435.9.028 1.831-.51 2.372-1.203z"></path>
                  </svg>
                </button>
              </div>
              <p>
                we'll never post to any of your accounts without your permission
              </p>
            </Modaldiv>
          </Modal>
          </>
    )
}

export default Login;