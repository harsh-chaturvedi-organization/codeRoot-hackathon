import React, { useState } from 'react';
import "./AddProdModal.scss";

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';







function AddProdModal() {
    const [showModal, setShowModal] =useState(true);
    const handleSubmit=()=>{

    }
    return (
        <div style={{display:showModal?"block":"none"}} className="_wrapper">
        <div className="_prodModal">
            <div className="_modalHeader">
                <div className="_modalTitle">Add your product details</div>
                <Button variant="outlined" color="error" onClick={()=>{
                    setShowModal(false);
                }}>
                    Cancel
                </Button>
            </div>
            
            <div className="_modalBody">
                <TextField id="outlined-basic" label="Product name" variant="outlined" helperText="Please enter product name" required="true" />
                <TextField id="standard-basic" label="Quantity" variant="standard" required="true"/>
                <TextField
                    required="true"
                    id="outlined-number"
                    label="Price"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }} />
                <TextField
                    required="true"
                    id="outlined-multiline-static"
                    label="Location"
                    multiline
                    rows={4}
                    defaultValue=""
                />
                <TextField id="outlined-basic" label="shop name" variant="outlined" required="true"/>



            </div>
            <div className="_modalBottom">
                <p>All * fields are required</p>
                <Button variant="contained" color="success" onClick={()=>{
                    handleSubmit(); setShowModal(false);
                }}>
                  ADD
               </Button>
            </div>
           
        </div>
        </div>
        
    )
}

export default AddProdModal
