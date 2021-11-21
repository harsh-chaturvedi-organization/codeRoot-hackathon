import React, { useState } from "react";
import "./AddProdModal.scss";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/ContextProvider";

function AddProdModal({ setAddProduct, addProdut, email }) {
    const [pName, setPname] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState("");
    const { productData, setProductData, changingData } = useContext(Context);

    const handleSubmit = async (e) => {
        if (pName === "" || quantity === "" || price === "") {
            alert("fill all field");
            return;
        }
        const data = new FormData();
        data.append("file", file);
        data.append("productName", pName);
        data.append("quantity", quantity);
        data.append("price", price);
        data.append("email", email);

        await axios
            .post("http://localhost:3002/product/create", data)
            //   .then(res => changingData(res.data))
            .then((res) => {
                axios
                    .get(`http://localhost:3002/vendor/information/${email}`)
                    .then((resp) => {
                        console.log(resp.data.productDetails);
                        setProductData(resp.data.productDetails);
                    });
            })

            .catch((err) => console.log(err));
        // console.log(data)
        setAddProduct(false);
    };

    return (
        <div style={{ display: addProdut ? "block" : "none" }} className="_wrapper">
            <div className="_prodModal">
                <div className="_modalHeader">
                    <div className="_modalTitle">Add your product details</div>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => {
                            // setShowModal(setAddProduct);
                            setAddProduct(false);
                        }}
                    >
                        Cancel
                    </Button>
                </div>

                <div className="_modalBody">
                    <TextField
                        onChange={(e) => setPname(e.target.value)}
                        id="outlined-basic"
                        value={pName}
                        name="Product-name"
                        label="Product name"
                        variant="outlined"
                        helperText="Please enter product name"
                        required="true"
                    />
                    <TextField
                        onChange={(e) => setQuantity(e.target.value)}
                        id="standard-basic"
                        value={quantity}
                        name="Quantity"
                        label="Quantity"
                        variant="standard"
                        required="true"
                    />
                    <TextField
                        required="true"
                        id="outlined-number"
                        label="Price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        type="number"
                        name="Price"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <input
                        type="file"
                        id="file"
                        onChange={(event) => {
                            const file = event.target.files[0];
                            setFile(file);
                        }}
                    />
                </div>
                <div className="_modalBottom">
                    <p>All * fields are required</p>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        ADD
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddProdModal;
