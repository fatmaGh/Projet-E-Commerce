import React from 'react'
import "./Profile.css"
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Button} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


const Product = ({productData}) => {

    const classes = useStyles();

  const dispatch= useDispatch()


  const buffer = productData.image.data // e.g., <Buffer 89 50 4e ... >
  const b64 = new Buffer.from(buffer).toString('base64')
  const mimeType = 'image/png' // e.g., image/png


    return (
    <div className="list">
    <Card style={{width:"500px"}} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`data:${mimeType};base64,${b64}`}    title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <span className="card_title">{productData.description}</span>
          </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
         Product Price {productData.price}
         </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button style={{backgroundColor:"rgb(94,66,166)", margin:"3% 3%"}} variant="light" size="sm">
              <span style={{color:"white"}} >Add To Cart</span>
          </Button> 
      </CardActions>
    </Card>
    

    </div>



    )
}

export default Product
