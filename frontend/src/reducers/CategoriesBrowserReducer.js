import { initialState } from "../context/AllCategoriesContext";

const CategoriesBrowser = (state = initialState, action) => {
   
    switch (action.type) {
        case 'LIST_ALL_CATELOGUE_REQUEST':
            return {...state, loading: true }
        case 'LIST_ALL_CATELOGUE_SUCCESS':
            return {
                ...state,
                allcategoriesBrowser: action.payload
            }
        case 'LIST_ALL_CATELOGUE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'LIST_ALL_CHILDCATEGORY_REQUEST':
            return {...state, loading: true }
        case 'LIST_ALL_CHILDCATEGORY_SUCCESS':
            return {
                ...state,
                allcategoriesBrowser: action.payload
            }
        case 'LIST_ALL_CHILDCATEGORY_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'LIST_ALL_SUBCATEGORY_REQUEST':
            return {...state, loading: true }
        case 'LIST_ALL_SUBCATEGORY_SUCCESS':
            return {
                ...state,
                allcategoriesBrowser: action.payload
            }
        case 'LIST_ALL_SUBCATEGORY_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:return state;
            
    }
}
export default CategoriesBrowser;