import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
import reducerProduct from "./reducerProduct";
import reducerOrder from "./reducerOrder";
import reducerAdmin from "./reducerAdmin";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  reducerUser: reducerUser,
  reducerProduct: reducerProduct,
  reducerOrder: reducerOrder,
  reducerAdmin:reducerAdmin,
  cart: cartReducer, 
});

export default rootReducer;