import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../node_modules/font-awesome/css/font-awesome.min.css"
import "./profile.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Users from "./Users";
import Products from "./Products";
import Orders from "./Orders";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { getUsers } from '../../JS/action/actionUser'
import { getProduct } from '../../JS/action/actionProduct'
import { getOrder } from '../../JS/action/actionOrder'
import { useDispatch } from "react-redux"
import NAVBAR from "./NAVBAR"
import { useState } from 'react'
/* import AddProduct from "./AddProduct" */
import { Button, Form, FormControl } from 'react-bootstrap'
import {searchUser} from '../../JS/action/actionUser'
import {searchOrder} from '../../JS/action/actionOrder'
import {searchProduct} from '../../JS/action/actionProduct'
import img from "../../img/home.webp"
import admin2 from "../../img/admin2.png"

import { getProfileAdmin } from "../../JS/action/actionAdmin"
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));




const UserProfile = () => {

  const isAuth = useSelector((state) => state.reducerUser.isAuth);
  /* const user = useSelector((state) => state.reducerUser.user) */
  const products = useSelector(state => state.reducerProduct.products)
  const orders = useSelector(state => state.reducerOrder.orders)
  const users = useSelector(state => state.reducerUser.users)

  const [fullName, setfullName]=useState("")
  const [description, setdescription]=useState("")
  const [category, setcategory]=useState("")
  

  const classes = useStyles();


  const logout = () => {
    {
      localStorage.clear();
      window.location.href = 'http://localhost:3000';
    }
  };

  const dispatch = useDispatch()

  const getAdmin = () => {
    dispatch(getProfileAdmin());
  };
  
  useEffect(() => {
    getAdmin();
  }, [isAuth]);
  

  //Users
  const getAllUsers = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  //Products
  const getAllProducts = () => {
    dispatch(getProduct())
  }

  useEffect(() => {
    getAllProducts()
  }, [])



  //Orders

  const getAllOrders = () => {
    dispatch(getOrder())
  }

  useEffect(() => {
    getAllOrders()
  }, [])


  const getselectedUsers = () => {
    dispatch(searchUser(fullName))
  }

  const getselectedOrders = () => {
    dispatch(searchOrder(description))
  }

  const getselectedProducts = () => {
    dispatch(searchProduct(category))
  }
 

  
  return (
    <div>
      <div className='account'>
        <div className='sidebar'>
          <div className='navbar_Admin'>
            <a href="#">
              <div className={classes.root}>
                <Avatar style={{ marginLeft: "35%", marginTop: "35%" }} alt="Remy Sharp" src={admin2} className={classes.large} />
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "15px"
              }}>
                <p class="lead" style={{ color: "white" }}> Administrator</p>
             <p class="lead" style={{ color: "white" }}> Admin@gmail.com</p>
                <p class="lead" style={{ color: "white" }}> Admin 1 : Imen</p>
              </div>

            </a>
          </div>
          <nav className="nav">
            <ul>
              <li className="active"><a href="#users"><em className="fa fa-users"></em> Users </a></li>
              <li><a href="#orders"><em className="fa fa-shopping-basket"></em> Orders</a></li>
              <li><a href="#products"><em className="fa fa-shopping-cart"></em> Products</a></li>
              <li><a href="#" onClick={() => logout()}><em className="fa fa-sign-out"></em> Log Out</a></li>
            </ul>
          </nav>

        </div>
      </div>


      <NAVBAR />
      <div style={{display:"flex" , justifyContent:"space-around", alignItems:'center'}}>
      <img className="img" src={img} alt="banner" style={{width:"300px", height:"300px", marginLeft:"270px"}}/>

 {/*  Users */}
 <div>

      <Form className="d-flex" style={{marginTop:"40px"}}>
        <FormControl
          type="search"
          placeholder="Search Users By Name"
          className="mr-2"
          aria-label="Search"
          style={{width:"400px", marginLeft:"80px"}}
          onChange={(e)=>setfullName(e.target.value)}
          value={fullName}
        />
        <Button class="btn btn-warning btn-lg" onClick={()=>getselectedUsers()}>Search</Button>
        <Button style={{backgroundColor:"rgb(94,66,166)"}} variant="light">
              <span style={{color:"white"}} onClick={()=>getAllUsers()}>Refresh</span>
          </Button> 
      </Form>
      </div>
     
</div>
      <div style={{ marginLeft: "310px", marginTop: "50px" }}>
        <h1 class="display-1">List of Users </h1>
        <p class="lead">
          As an Admin y can delete any users that publish inappropriate content on your website
        </p>
      </div>
      <div id="users" className="users">{users.map((el, i) => (<Users key={i} user={el}/>))}</div>




{/* Orders */}



<Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search Orders By Name"
          className="mr-2"
          aria-label="Search"
          style={{width:"400px", marginLeft:"300px"}}
          onChange={(e)=>setdescription(e.target.value)}
          value={description}
        />
        <Button class="btn btn-warning btn-lg" onClick={()=>getselectedOrders()}>Search</Button>
        <Button style={{backgroundColor:"rgb(94,66,166)"}} variant="light">
              <span style={{color:"white"}} onClick={()=>getAllOrders()}>Refresh</span>
          </Button> 
      </Form>

      <div style={{ marginLeft: "310px", marginTop: "50px" }}>
        <h1 class="display-1">List of Orders </h1>
        <p class="lead">
          As an Admin y can verify the order list
        </p>
      </div>


       <div id="orders" className="users">{orders.map((el, i) => (<Orders key={i} order={el} />))}</div>





{/* Products */}


       <Form className="d-flex" style={{marginTop:"40px"}}>
        <FormControl
          type="search"
          placeholder="Search Products By category"
          className="mr-2"
          aria-label="Search"
          style={{width:"400px", marginLeft:"300px"}}
          onChange={(e)=>setcategory(e.target.value)}
          value={category}
        />
        <Button class="btn btn-warning btn-lg" onClick={()=>getselectedProducts()}>Search</Button>
        <Button style={{backgroundColor:"rgb(94,66,166)"}} variant="light">
              <span style={{color:"white"}} onClick={()=>getAllProducts()}>Refresh</span>
          </Button> 
      </Form>


      <div style={{ marginLeft: "310px", marginTop: "50px" }}>
        <h1 class="display-1">List of Products</h1>
        <p class="lead">
          As an Admin y can verify the Product list and delete inappropriate content
        </p>
      </div>

      <div id="products" className="users">{products.map((el, i) => (<Products key={i} product={el} />))}</div>

    </div>
  )
};

export default UserProfile;




