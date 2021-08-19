import React from 'react'
import "./Profile.css"
import { Form } from "react-bootstrap"

const Contact = () => {
    return (
        
            <div className="form_contact">
                <Form className="contact-form">
                    <h3 className="section_title" style={{fontSize:"2.3em", marginLeft:"27%"}}>Contact Us</h3>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{fontFamily:"'El Messiri', sans-serif", color:"#8f8f96"}}>Name</Form.Label>
                        <Form.Control type="text" style={{fontFamily:"'El Messiri', sans-serif", height:"calc(2.5em + 0.75rem + 2px)", borderColor:"#bfb9ce", borderRadius:"2rem", marginBottom:"7%"}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{fontFamily:"'El Messiri', sans-serif", color:"#8f8f96"}}>Subject</Form.Label>
                        <Form.Control type="text
                        " style={{fontFamily:"'El Messiri', sans-serif", height:"calc(2.5em + 0.75rem + 2px)", borderColor:"#bfb9ce", borderRadius:"2rem", marginBottom:"7%"}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{fontFamily:"'El Messiri', sans-serif", color:"#8f8f96"}}>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} style={{fontFamily:"'El Messiri', sans-serif", height:"calc(2.5em + 0.75rem + 2px)", borderColor:"#bfb9ce", borderRadius:"2rem", marginBottom:"7%", maxHeight:"100px"}} />
                    </Form.Group>
                    <button className="button button_form">Submit</button>
                </Form>
            </div>
    )
}

export default Contact
