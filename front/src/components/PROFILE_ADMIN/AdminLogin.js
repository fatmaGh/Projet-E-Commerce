import React from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import './header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { adminLogin } from '../../JS/action/actionAdmin'
import HEADER from '../HEADER/HEADER'


const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loading = useSelector((state) => state.reducerAdmin.loading);
    const admin = useSelector(state => state.reducerAdmin.admin)
    const isAuth = useSelector((state) => state.reducerAdmin.isAuth);
    const errors = useSelector((state) => state.reducerAdmin.errors);



    const dispatch = useDispatch();
    const loginAdmin = () => {
        const loginCred = {
            email,
            password,
        };

        dispatch(adminLogin(loginCred));
    };



    return isAuth ? <Redirect to="./profile" /> : loading ? (
        <div className='wait'>
            <h3>Please Wait </h3>
            <div className="loader">
            </div>
        </div>
    ) : (
        <div>
            <div className='login'>

                <div className='box_login'>
                    <form>
                        <div class="container">
                            <h1 style={{marginLeft:"25px"}}>Administrator Sign In </h1></div>
                        <div className="form-group" style={{marginTop:"35px"}}>
                            <label>Email</label>
                            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </div>
                        <div className="form-group" style={{marginTop:"35px"}}>
                            <label>Password</label>
                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                        </div>

                        <div className="form-group" style={{marginTop:"35px"}}>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" style={{backgroundColor:"#645FE5", width:"500px", padding:"10px 10px 10px 10px" , marginTop:"45px", borderRadius:"25px" }} onClick={() => loginAdmin()}><span style={{color:'white' , fontWeight:"bold", fontSize:"20px"}}>Sign in</span></button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>

                    <p style={{ listStyle: 'none', color: 'red', fontWeight: 'bold' }}> {errors.msg}</p>
                </div>

            </div>

        </div>
    )
}

export default AdminLogin
