import {
        ADD_PRODUCT,
        ADD_PRODUCT_SUCCESS,
        ADD_PRODUCT_FAILED,
        GET_PRODUCT, GET_PRODUCT_SEARCH
    } from '../constants/actionType'

const initialState={
    product:{},
    errors:{},
    products:[]    
}

const reducerProduct=(state=initialState, {type,payload})=>{

switch(type){
    case GET_PRODUCT_SEARCH:
        return {
          ...state,
          products: payload,
        };
    case GET_PRODUCT:
        return {...state, products:payload};
    case ADD_PRODUCT:
    case ADD_PRODUCT_SUCCESS:
        return{
            ...state,
            product: payload
        };
    case ADD_PRODUCT_FAILED:
        return{
            ...state,
            errors: payload,
        }
    default:
        return state
}

}

export default reducerProduct