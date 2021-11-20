// import './App.css';
import HomePage from "./Components/HomePage";
import {UserPage} from "./Components/Login";
import {Route,Routes} from "react-router-dom"
import VenderProfile from "./Components/VenderProfile";
import UserHome from "./Components/UserHome";
import {Nav} from "./Components/Nav"
function App() {
  return (
    <div>
<<<<<<< HEAD
      {/* <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<UserPage/>} />
      </Routes> */}
      <VenderProfile/>

=======
     {/* <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<UserPage/>} />
     </Routes>*/}
      {/* <VenderProfile/> */}
     <Nav/>
     <UserHome/>
>>>>>>> 9db3bfc9be9b82f4189f3347a2e3e6fe43ab6ff1
    </div>
  );
}

export default App;
