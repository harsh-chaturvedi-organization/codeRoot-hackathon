import "./UserHome.css";
import { Nav } from "./Nav";

const venderItems = [
    {
        productName:"patato",
        price:20,
        image:"https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=",
    },
    {
        productName:"patato",
        price:20,
        image:"https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=",
    },
    {
        productName:"patato",
        price:20,
        image:"https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=",
    },
    {
        productName:"patato",
        price:20,
        image:"https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=",
    },
    {
        productName:"patato",
        price:20,
        image:"https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=",
    },
    {
        productName:"patato",
        price:20,
        image:"https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=",
    },
    {
        productName:"patato",
        price:20,
        image:"https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=",
    },
    {
        productName:"patato",
        price:20,
        image:"https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=",
    }
]

const removeItem=()=>{
    console.log("removeitem")
}
function UserHome({img}){

    return(
        <>
        <Nav/>
    <div className="UserHome">
        <div className="heading11">Available Products</div>
        <div className="prodGrid">
                {venderItems.map((e)=> 
                <div className="prodDetail">
                    <img src={e.image} className="productImage2" alt="productImage" />
                    <div className="detailsDiv">
                        <h3 className="pName2">{e.productName}</h3>
                        <h3 className="pPrice2">Rs.{e.price}/kg</h3>
                        <h3 className="pQuantity2">30kg (available)</h3>
                    </div>
                    <div className="but1"><button className="button1" onClick={removeItem}>Reserve</button></div>
                </div> )}
           
        </div>
        </div>
        </>
    )
}

export default UserHome;