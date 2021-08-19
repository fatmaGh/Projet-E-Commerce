import React, {useEffect} from 'react'
import "./Profile.css"
import Product from "./Product"
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../../JS/action/actionProduct'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useState } from 'react'
import {searchProduct} from '../../JS/action/actionProduct'
const Products = () => {

    const products = useSelector((state) => state.reducerProduct.products)
    const [category, setcategory]=useState("")
    const dispatch = useDispatch()
    //Products
    const getAllProducts = () => {
        dispatch(getProduct())
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const getselectedProducts = () => {
        dispatch(searchProduct(category))
      }


    return (

<div className="products" >
       <Form className="d-flex" style={{marginTop:"140px", marginLeft:"130px"}}>
        <FormControl
          type="search"
          placeholder="Search Products By category"
          className="mr-2"
          aria-label="Search"
          style={{width:"400px"}}
          onChange={(e)=>setcategory(e.target.value)}
          value={category}
        />
        <Button class="btn btn-warning btn-lg" onClick={()=>getselectedProducts()}>Search</Button>
        <Button style={{backgroundColor:"rgb(94,66,166)"}} variant="light">
              <span style={{color:"white"}} onClick={()=>getAllProducts()}>Refresh</span>
          </Button> 
      </Form>
        

            <hr style={{color:"gray", marginTop:"1%"}} />
            <div className="products_list">      
                <div className="box">
                        <div id="products" className="products">{products.map((prod) => (<Product key={prod.id} productData={prod} />))}</div>
                </div>
            </div>
        </div>       

    )
}


export default Products;
