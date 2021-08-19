import axios from 'axios'


import {ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILED, GET_PRODUCT,  GET_PRODUCT_SEARCH} from '../constants/actionType'


export const addProduct =(newProduct)=> async(dispatch)=>{
    dispatch({type: ADD_PRODUCT})

    try{

        const res = await axios.post("/product/upload", newProduct)
        dispatch({type: ADD_PRODUCT_SUCCESS, payload:res.data})

    }

    catch(error){
        dispatch({type:ADD_PRODUCT_FAILED, payload: error.response.data})

    }
};

export const getProduct=()=> (dispatch)=>{
    axios.get('/product/display')
    .then(res=> dispatch({type:GET_PRODUCT, payload:res.data}))
    .catch(err=>console.log(err))    
}

export const deleteProduct = (id) => (dispatch) => {
    axios.delete(`/product/${id}`)
        .then(() => dispatch(getProduct()))
        .catch(err => console.log(err))
}

export const searchProduct = (category) => (dispatch) => {
    axios.get(`/product/${category}`)
        .then(res => dispatch({ type: GET_PRODUCT_SEARCH, payload: res.data }))
        .catch(err => console.log(err))
  }