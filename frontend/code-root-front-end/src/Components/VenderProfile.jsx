import "./VenderProfile.css";
import Vendor from "./vendor";
import {Link} from "react-router-dom";
import AddProdModal from "./AddProdModal";
import { useState } from "react";
import {useContext} from "react"
import {Context} from "./context/ContextProvider";


const removeItem=()=>{
    console.log("removeitem")
}


function VenderProfile({img,name,email}){
    const [addProdut,setAddProduct] = useState(false);
    const {productData,setProductData} = useContext(Context);

    console.log(productData);

    return(<div className="profile">
        <div className="heading">Your Posted Products</div>
        <div className="venderProfileDiv">
            <div className="venderItems">
                {productData.map((e)=> 
                <div className="allDetailOfProduct">
                    <img src={`../../../backend/src/uploads/1637413884102-183633390-homePage.PNG`} className="productImage" alt="productImage" />
                    <div>
                        <h3 className="pName">{e.name}</h3>
                        <h3 className="pPrice">Rs.{e.price}/kg</h3>
                        <h3 className="pQuantity">{e.quantity} (available)</h3>
                    </div>
                    <div className="but"><button className="button12" onClick={removeItem}>Remove</button></div>
                </div> )}
            </div>
            <div className="venderPhoto">
                <img src={img} alt="avtar" />
                <h3 className="vendorName">{name}</h3>
                <button  className="postprodBut" onClick={()=>{
                    setAddProduct(true)
                }}>Post Another Product</button>
                <Vendor/>
            </div>
        </div>
        <AddProdModal email={email} addProdut={addProdut} setAddProduct={setAddProduct}/>
        </div>
    )
}

export default VenderProfile;