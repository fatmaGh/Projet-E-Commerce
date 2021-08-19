import React from "react"
import {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import './header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {userLogin} from '../../JS/action/actionUser'
import HEADER from '../HEADER/HEADER'


const LOGIN = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loading = useSelector((state) => state.reducerUser.loading);
    const users = useSelector(state => state.reducerUser.users)
    const user = useSelector(state => state.reducerUser.users)
    const isAuth = useSelector((state) => state.reducerUser.isAuth);
    const errors= useSelector((state) => state. reducerUser.errors);

    const dispatch = useDispatch();

    const login = () => {
        const loginCred = {
            email,
            password,
        };

        dispatch(userLogin(loginCred));
    };


   
    return  isAuth?  <Redirect to="./client" /> : loading ? (
        <div className='wait'>
        <h3>Please Wait </h3>
        <div className="loader">  
        </div>
        </div>
      ) :(
     <div>
        <HEADER/>
        <div className='login'>
            <img className='img_login' src="./login1.png" alt="profile photo"></img>
            <div className='box_login'>
                <form>
                    <h3>Log in</h3>
                    <div className="form-group" style={{marginTop:"35px"}}>
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={ (e)=> setEmail(e.target.value)} placeholder="Enter email" />
                    </div>
                    <div className="form-group" style={{marginTop:"35px"}}>
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
                    </div>

                    <div className="form-group" style={{marginTop:"35px"}}>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <button className="login_button" type="submit"  onClick={() => login()}><span style={{color:'white' , fontWeight:"bold", fontSize:"20px"}}>Sign in</span></button>
                      
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
   
            <p style={{listStyle: 'none', color: 'red', fontWeight: 'bold'}}> {errors.msg}</p>
            </div>
           
        </div>
       
        </div>
    )
}

export default LOGIN
