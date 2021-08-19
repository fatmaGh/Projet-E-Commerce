import React from 'react'
import "../../../node_modules/font-awesome/css/font-awesome.min.css"

const Footer = () => {
    return (
        <div className="footer">
            {/* <hr style={{color:"gray"}} /> */}
            <div className="footer_content">
                <p className="copyright">
                    <span style={{margin:"0 0.5%"}}>Copyright © 2021 All rights reserved | This template is made with</span>  
                    <em style={{color:"purple"}} className="fa fa-heart"></em>
                    <span style={{marginLeft:"0.5%"}}>By <span style={{color:"purple", fontWeight:"bold"}}>US</span></span>
                </p>
                <div className="social_icons">
                    <div className="icon_circle"><em style={{color:"gray"}} className="fa fa-twitter"></em></div>
                    <div className="icon_circle"><em style={{color:"gray"}} className="fa fa-facebook-f"></em></div>
                    <div className="icon_circle"><em style={{color:"gray"}} className="fa fa-instagram"></em></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
