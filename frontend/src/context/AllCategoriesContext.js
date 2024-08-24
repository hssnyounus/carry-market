import { createContext } from "react";
import { allCatelogue,allChildCategory,allSubCategory } from "../actions";
import CategoriesBrowser from "../reducers/CategoriesBrowserReducer";

import createDataContext from "./createDataContext";

// const MyContext = createContext();

export const initialState = {
    allcategoriesBrowser: [
        
    ],
    error: ''
}



 export const { Context, Provider } = createDataContext(
    CategoriesBrowser,
    {allCatelogue,allChildCategory,allSubCategory},
    initialState
)