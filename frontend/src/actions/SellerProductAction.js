// import Axios from "axios"
import apiCall from "./api";

export const ListAllSellerProducts = (dispatch) => async () => {

    try {
        dispatch({
            type: 'LIST_ALL_SELLER_PRODUCTS_REQUEST',
        })

        const product = await apiCall('/alls-productsellerdetail', 'get');
       
        dispatch({
            type: 'LIST_ALL_SELLER_PRODUCTS_SUCCESS',
            payload: product.data.productsellerdetail
        })
       
    } catch (error) {
        dispatch({
            type:'LIST_ALL_SELLER_PRODUCTS_ERROR',
            payload:error.message
        })
    }
}

export const ProductbySellerCatalogSlug = (dispatch) => async (slug) =>{
    try {
        dispatch({
            type: 'PRODUCT_BY_SELLER_CATALOG_SLUG_REQUEST',
        })
        const catalogueslug = "mobiles";
        // const AllSubCategories = await apiCall('/all_subcategory', 'get');
        const productbyslug = await apiCall(`/product_by_seller_catalog_slug/${slug}`, 'get');
        
        dispatch({
            type: 'PRODUCT_BY_SELLER_CATALOG_SLUG_SUCCESS',
            payload: productbyslug.data.productbysellerslug
        })
     
    } catch (error) {
        dispatch({
            type:'PRODUCT_BY_SELLER_CATALOG_SLUG_ERROR',
            payload:error.message
        })
    }
}
export const CreateProductbySellerCatalogue = (dispatch) => async (SellerCatalogueWithProduct) =>{
    try {
        dispatch({
            type: 'CREATE_PRODUCT_BY_SELLER_CATALOG_REQUEST',
        })
        
        // const AllSubCategories = await apiCall('/all_subcategory', 'get');
         console.log(SellerCatalogueWithProduct,'backend data');
        const createproductbycatalgou = await apiCall(`/productsellerdetail`,'post',SellerCatalogueWithProduct);
        
        dispatch({
            type: 'CREATE_PRODUCT_BY_SELLER_CATALOG_SUCCESS',
            payload: createproductbycatalgou
        })
        console.log(createproductbycatalgou,'createproductbycatalgou');
     
    } catch (error) {
        dispatch({
            type:'CREATE_PRODUCT_BY_SELLER_CATALOG_ERROR',
            payload:error.message
        })
    }
}