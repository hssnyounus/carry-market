import apiCall from "./api";


export const allCatelogue = (dispatch) => async () =>{
    try {
        dispatch({
            type: 'LIST_ALL_CATELOGUE_REQUEST',
        })

        const allCatelogue = await apiCall('/all_category', 'get');
     
        dispatch({
            type: 'LIST_ALL_CATELOGUE_SUCCESS',
            payload: allCatelogue.data.category
        })
      
    } catch (error) {
        dispatch({
            type:'LIST_ALL_CATELOGUE_ERROR',
            payload:error.message
        })
    }
}
export const allChildCategory = (dispatch) => async () =>{
    try {
        dispatch({
            type: 'LIST_ALL_CHILDCATEGORY_REQUEST',
        })

        const AllchildCategories = await apiCall('/all_child_category', 'get');
        
        dispatch({
            type: 'LIST_ALL_CHILDCATEGORY_SUCCESS',
            payload: AllchildCategories.data.Childcategory
        })
     
    } catch (error) {
        dispatch({
            type:'LIST_ALL_CHILDCATEGORY_ERROR',
            payload:error.message
        })
    }
}
export const allSubCategory = (dispatch) => async () =>{
    try {
        dispatch({
            type: 'LIST_ALL_SUBCATEGORY_REQUEST',
        })

        // const AllSubCategories = await apiCall('/all_subcategory', 'get');
        const AllSubCategories = await apiCall('/file_all_catelogue_categories', 'get');
        
        dispatch({
            type: 'LIST_ALL_SUBCATEGORY_SUCCESS',
            payload: AllSubCategories.data.categoryList
        })
     
    } catch (error) {
        dispatch({
            type:'LIST_ALL_SUBCATEGORY_ERROR',
            payload:error.message
        })
    }
}
