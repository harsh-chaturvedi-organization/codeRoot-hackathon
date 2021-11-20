import React, { useState } from 'react';
import "./AddProdModal.scss";

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {Link} from "react-router-dom"





function AddProdModal({setAddProduct,addProdut}) {
    // const [showModal, setShowModal] =useState(false);
    const [pName,setPname] = useState("");
    const [quantity,setQuantity] = useState("");
    const [price,setPrice] = useState("");
    // const [shopName,setShopName] = useState("");
    const handleSubmit=()=>{
        if(pName==="" || quantity==="" || price===""){
            alert("fill all field");
            return;
        }
        const obj = {pName,quantity,price}
        console.log(obj);
        setAddProduct(false);
    }
    return (
        <div style={{display:addProdut?"block":"none"}} className="_wrapper">
        <div className="_prodModal">
            <div className="_modalHeader">
                <div className="_modalTitle">Add your product details</div>
                <Button variant="outlined" color="error" onClick={()=>{
                    // setShowModal(setAddProduct);
                    setAddProduct(false)
                }}>
                    Cancel
                </Button>
            </div>
            
            <div className="_modalBody">
                <TextField onChange={(e)=>setPname(e.target.value)} id="outlined-basic" value={pName} name="Product-name" label="Product name" variant="outlined" helperText="Please enter product name" required="true" />
                <TextField onChange={(e)=>setQuantity(e.target.value)} id="standard-basic" value={quantity} name="Quantity" label="Quantity" variant="standard" required="true"/>
                <TextField
                    required="true"
                    id="outlined-number"
                    label="Price"
                    onChange={(e)=>setPrice(e.target.value)}
                    value={price}
                    type="number"
                    name="Price"
                    InputLabelProps={{
                        shrink: true,
                    }} />
                {/* <TextField
                    required="true"
                    id="outlined-multiline-static"
                    label="Location"
                    multiline
                    rows={4}
                    defaultValue=""
                /> */}
                <input type="file" name="image"/>
                {/* <TextField onChange={(e)=>setShopName(e.target.value)} value={shopName} id="outlined-basic" name="shop-name" label="shop name" variant="outlined" required="true"/> */}



            </div>
            <div className="_modalBottom">
                <p>All * fields are required</p>
                <Link to="/loginVender">
                    <Button variant="contained" color="success" onClick={()=>{
                    handleSubmit(); 
                }}>
                  ADD
               </Button>
               </Link>
            </div>
           
        </div>
        </div>
        
    )
}

export default AddProdModal
