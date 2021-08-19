import {ADD_ORDER,
     GET_ORDER, ADD_ORDER_FAILED, GET_ORDER_SEARCH} from '../constants/actionType'

const initialState={

  
    errors:{},
    orders:[],
    order:{}
    
}

const reducerOrder=(state=initialState, {type,payload})=>{

switch(type){
    case GET_ORDER_SEARCH:
        return {
          ...state,
          orders: payload,
        };
    case GET_ORDER:
        return {...state, orders:payload};
    case ADD_ORDER:
        return{
            ...state,
            order: payload
        };
    case ADD_ORDER_FAILED:
        return{
            ...state,
            errors: payload,
        }
    default:
        return state
}

}

export default reducerOrder