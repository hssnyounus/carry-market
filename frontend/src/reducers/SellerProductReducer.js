import { initialState } from "../context/AllSellerProductContext";

// import { initialState } from "../../context/AllSellerProductContext";

// const initialState = {
//     allsellerproducts:[]
// }

const SellerProductReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case 'LIST_ALL_SELLER_PRODUCTS_REQUEST':
            return {...state, loading: true }
        case 'LIST_ALL_SELLER_PRODUCTS_SUCCESS':
            return {
                ...state,
                allsellerproducts: action.payload
            }
        case 'LIST_ALL_SELLER_PRODUCTS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'PRODUCT_BY_SELLER_CATALOG_SLUG_REQUEST':
            return {...state, loading: true }
        case 'PRODUCT_BY_SELLER_CATALOG_SLUG_SUCCESS':
            return {
                ...state,
                allsellerproducts: action.payload
            }
        case 'PRODUCT_BY_SELLER_CATALOG_SLUG_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'CREATE_PRODUCT_BY_SELLER_CATALOG_REQUEST':
            //   CREATE_PRODUCT_BY_SELLER_CATALOG_REQUEST
            return {...state, loading: true }
        case 'CREATE_PRODUCT_BY_SELLER_CATALOG_SUCCESS':
            //   CREATE_PRODUCT_BY_SELLER_CATALOG_SUCCESS
            return {
                ...state,
                allsellerproducts:[action.payload, ...state.allsellerproducts]
            }
        case 'CREATE_PRODUCT_BY_SELLER_CATALOG_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:return state;
            
    }
}
export default SellerProductReducer;