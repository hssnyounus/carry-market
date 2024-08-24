import { createContext } from "react";
import { ListAllSellerProducts,ProductbySellerCatalogSlug,CreateProductbySellerCatalogue} from "../actions";
import SellerProductReducer from "../reducers/SellerProductReducer";
import createDataContext from "./createDataContext";

// const MyContext = createContext();

export const initialState = {
    allsellerproducts: [
        
    ],
    error: ''
}



 export const { Context, Provider } = createDataContext(
    SellerProductReducer,
    {ListAllSellerProducts,ProductbySellerCatalogSlug,CreateProductbySellerCatalogue},
    initialState
)