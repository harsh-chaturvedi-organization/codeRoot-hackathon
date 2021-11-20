import "./VenderProfile.css";


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
    }
]

const removeItem=()=>{
    console.log("removeitem")
}
function VenderProfile({img}){

    return(<div className="profile">
        <div className="heading">Your Posted Products</div>
        <div className="venderProfileDiv">
            <div className="venderItems">
                {venderItems.map((e)=> 
                <div className="allDetailOfProduct">
                    <img src={e.image} className="productImage" alt="productImage" />
                    <div>
                        <h3 className="pName">{e.productName}</h3>
                        <h3 className="pPrice">Rs.{e.price}/kg</h3>
                        <h3 className="pQuantity">30kg (available)</h3>
                    </div>
                    <div className="but"><button className="button12" onClick={removeItem}>Remove</button></div>
                </div> )}
            </div>
            <div className="venderPhoto">
                <img src={img} alt="avtar" />
                <h3 className="vendorName">Ram singh</h3>
                <button className="postprodBut">Post Another Product</button>
            </div>
        </div>
        </div>
    )
}

export default VenderProfile;