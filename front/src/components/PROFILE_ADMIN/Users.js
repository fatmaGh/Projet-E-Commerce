import React from 'react'
import { Card, Image, Col, Button, Form, FormControl} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {deleteUser, searchUser} from '../../JS/action/actionUser'
import profile from "../../img/profile.png"

const Users= ({ user , search}) => {

  const dispatch= useDispatch()

  

  return (
    <>
    
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexWrap: "warp",
      }}
    >


      
      <Card
        style={{
          width: "11rem",
          height: "16rem",
          marginRight: "20px",
          marginTop: "30px",
          marginBottom:"45px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "18px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#4B0082",
            height: "10rem",
          }}
        />
         
        <Col>
          <Image
          src={profile}
         
            style={{
              height: "100px",
              width: "160px",
              position: "relative",
              bottom: "80px",
              border: "10px solid white",
              backgroundColor: "transparent",
            }}
          />
        </Col>
        <Card.Body style={{ position: "relative", bottom: "90px" }}>
          <Card.Title style={{ margin: "0", color: "#505151" }}>
            {user.fullName}
          </Card.Title>
          <Card.Text style={{ fontSize: "small", color: "#4baed4" }}>
            {user.email}
          </Card.Text>
          <Card.Text style={{ fontSize: "small", color: "#4baed4" }}>
            VIP User
          </Card.Text>
        
          <Button style={{backgroundColor:"rgb(94,66,166)", margin:"3% 3%"}} variant="light" size="sm">
              <span style={{color:"white"}} onClick={() => dispatch(deleteUser(user._id))} >Delete</span>
          </Button> 
        </Card.Body>
      </Card>
    </div >
    </>
  )
}

export default Users
