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

function VenderProfile(){

    return(
        <div className="venderProfileDiv">
            <div className="venderItems">
                {venderItems.map((e)=> 
                <div className="allDetailOfProduct">
                    <img src={e.image} className="productImage" alt="productImage" />
                    <div>
                        <h3>Name : {e.productName}</h3>
                        <h3>Price : {e.price}</h3>
                    </div>
                </div> )}
            </div>
            <div className="venderPhoto">
                <img src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png" alt="avtar" />
                <h3>Ram singh</h3>
            </div>
        </div>
    )
}

export default VenderProfile;