import React from 'react'
import "./Profile.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { addToCart } from "../../JS/action/actionCart"
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
const SingleItem = ({item}) => {
    
    const dispatch = useDispatch()

    const classes = useStyles();


    return (

    <div className="list">
    <Card style={{width:"500px"}} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          style={{height:"200px"}}
          image={item.image}    
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            <span className="card_title" style={{fontSize:"1rem", fontFamily:"'Poppins', sans-serif", fontWeight:"500"}}>{item.title}</span>
          </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
         DT {item.price.toFixed(2)}
         </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{height:'50px', marginTop:"1%", marginBottom:"3%"}}>
            <button  onClick={()=>{dispatch(addToCart(item.id))}} className="button">
              Add to cart
            </button>            
      </CardActions>
    </Card>
    </div>
    )
}

export default SingleItem