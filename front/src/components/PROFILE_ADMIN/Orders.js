
import {Button} from 'react-bootstrap';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {deleteOrder} from '../../JS/action/actionOrder'
import { useDispatch } from 'react-redux'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Orders = ({ order }) => {
  const classes = useStyles();
  const dispatch= useDispatch()

  return (
    
        <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography style={{fontWeight:'bold', fontSize:'15px', color:'black'}} ><span >{order.date}</span> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontWeight:'bold'}} >
            <ul>
          <li><p class="lead">The order contain : {order.totalItems} Items</p> </li>
          <li><p class="lead">The order total price : {order.totalPrice} DT</p></li>
          <li><p class="lead">Delivery will be established by : {order.mod_liv}</p></li>
          <li><p class="lead">Payment will be established by : {order.mod_payement}</p></li>
          </ul>
          </Typography>
        </AccordionDetails>
        <Button style={{backgroundColor:"rgb(94,66,166)", margin:"3% 3%"}} variant="light" size="sm" onClick={() => dispatch(deleteOrder(order._id))}>
              <span style={{color:"white"}}>Delete</span>
          </Button> 
      </Accordion>
      
    </div>
  );
}

export default Orders
