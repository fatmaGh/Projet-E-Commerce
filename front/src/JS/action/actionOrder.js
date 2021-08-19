import axios from 'axios'


import {ADD_ORDER,
    ADD_ORDER_SUCCESS,
    ADD_ORDER_FAILED, GET_ORDER, GET_ORDER_SEARCH} from '../constants/actionType'


export const addOrder =(newOrder)=> async(dispatch)=>{
    dispatch({type: ADD_ORDER})

    try{

        const res = await axios.post("/order/upload", newOrder)
        dispatch({type: ADD_ORDER_SUCCESS, payload:res.data})

    }

    catch(error){
        dispatch({type:ADD_ORDER_FAILED, payload: error.response.data})

    }
};

export const getOrder=()=> (dispatch)=>{

    axios.get('/order/display')
    .then(res=> dispatch({type:GET_ORDER, payload:res.data}))
    .catch(err=>console.log(err))
    
}

export const deleteOrder = (id) => (dispatch) => {
    axios.delete(`/order/${id}`)
        .then(() => dispatch(getOrder()))
        .catch(err => console.log(err))
}

export const searchOrder = (date) => (dispatch) => {
    axios.get(`/order/${date}`)
        .then(res => dispatch({ type: GET_ORDER_SEARCH, payload: res.data }))
        .catch(err => console.log(err))
  }