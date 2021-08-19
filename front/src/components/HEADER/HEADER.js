import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function HEADER() {
    return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>eShop.tn</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
   
     
      
        
    </div>
  
    )
}

export default HEADER;
