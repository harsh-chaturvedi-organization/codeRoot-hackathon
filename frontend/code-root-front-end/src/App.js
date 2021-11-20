// import './App.css';
import HomePage from "./Components/HomePage";
import {UserPage} from "./Components/Login";
import {Route,Routes} from "react-router-dom"
import VenderProfile from "./Components/VenderProfile";
import UserHome from "./Components/UserHome";
import {Nav} from "./Components/Nav"
import { Navbar } from "./Components/Navbar";
import Vendor from "./Components/vendor";
import { Customer } from "./Components/Customer";
import AddProdModal from "./Components/AddProdModal";
function App() { 
  return (
    <div>
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/loginVender" element={<UserPage/>} />
        <Route path="/loginUser" element={<UserHome/>} />
        <Route path="/AddProdModal" element={<AddProdModal/>} />
     </Routes>
     {/* <UserHome/> */}
     {/* <Customer/> */}
    </div>
  );
}

export default App;
