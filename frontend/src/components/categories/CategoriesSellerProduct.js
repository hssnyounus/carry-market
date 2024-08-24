import React,  {useContext, useEffect} from'react';
import { Context,Provider } from '../../context/AllCategoriesContext';

function CategoriesSellerProduct() {
    
    const { state: { allcategoriesBrowser}, allCatelogue,allChildCategory,allSubCategory } = useContext(Context);
 
    useEffect(() => {
        (async()=>{
          await allSubCategory();

        })();
   
    }, []);
    const renderCategories = (categories) =>{

        let MyCategoriesList = [];
        for(let category of categories){
            MyCategoriesList.push(
                <li className="seconde-li">{category.cateloguename}
                    {category.children.length > 0 ? (<ul className="third-ul">{renderCategories(category.children)}</ul>):null}
                </li>
            )
        }
        console.log(MyCategoriesList,'MyCategoriesList ');
        return MyCategoriesList;
    }
    return (
        <div>
            {/* {allcategoriesBrowser} */}
            <ul className="main-ul">
        
            {allcategoriesBrowser.length > 0 ? renderCategories(allcategoriesBrowser):null}
            </ul>
        </div>
    )
}

// export default CategoriesSellerProduct

export default () => {
    return (
        <Provider>
            <CategoriesSellerProduct />
        </Provider>

    )
} 