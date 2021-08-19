import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../JS/action/actionCart";
import "./Profile.css";
import trash from "../../img/trash.png"

const SingleItem = ({ item }) => {
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    let total = item.qty * item.price;
    setTotal(total);
  }, [item, total, setTotal]);

  return (
    <div className="cart_container">
   
      <div className="cart_item">
        <div style={{flexBasis:"10%", marginLeft:"5%"}}>
          <img height="130px" width="180px" src={item.image} />
        </div>
        <div style={{flexBasis:"30%", marginLeft:"8%"}}>
          <p className="table_header">{item.title}</p>
        </div>
        <div style={{flexBasis:"10%", marginLeft:"15%"}}>
          <p className="table_header">DT  {item.price}</p>
        </div>
        <div style={{flexBasis:"5%", marginLeft:"10%"}}>
          <p className="table_header">{item.qty}</p>
        </div>
        <div style={{flexBasis:"10%", marginLeft:"8%"}}>
          <p className="table_header">DT  {total}</p>
        </div>
        <div style={{flexBasis:"20%", marginLeft:"10%"}}>
        <img style={{cursor:"pointer", marginBottom:'10%'}} src={trash} alt="Delete" height="35px" width="35px"
            onClick={() => dispatch(removeFromCart(item.id))}
            />
        </div>
      </div>
      <hr style={{ color: "gray" }} />
    </div>
  );
};

export default SingleItem;
