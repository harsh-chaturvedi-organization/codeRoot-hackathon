import "./UserHome.css";
import { Nav } from "./Nav";
import { Customer } from "./Customer";

// const venderItems = [
//     {
//         productName:"patato",
//         price:20,
//         image:"https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=",
//     },
// ]


function UserHome({img}){

    return(
    <>
    <Nav/>
    <div style={{margin:"auto",width:'26.3%',alignItems:"center",textAlign:"center"}}>
        <Customer/>
    </div>
    </>
    )
}

export default UserHome;