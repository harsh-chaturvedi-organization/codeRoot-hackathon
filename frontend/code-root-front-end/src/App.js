// import './App.css';
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import {Route,Routes} from "react-router-dom"
import VenderProfile from "./Components/VenderProfile";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
      </Routes> */}
      <VenderProfile/>
    </div>
  );
}

export default App;
