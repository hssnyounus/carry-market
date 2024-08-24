import React, { Fragment, useContext,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Context, Provider } from '../../context/AllSellerProductContext';

const CategoryWithProduct = (props) =>{
    // console.log(props,'props is success');
    
    const {slug} = useParams();
    const {state:{allsellerproducts},ProductbySellerCatalogSlug} = useContext(Context);
    console.log(allsellerproducts);
    const {productsellerdetails,cataloguename,catalogues} = allsellerproducts;
    // const  = productsellerdetails;
    
    // console.log(catalogues);
    useEffect(() => {
        ProductbySellerCatalogSlug(slug);
    }, []);
    return(
        <Fragment>
            {cataloguename}
        <div>
                   {productsellerdetails && productsellerdetails.map((item,index)=>(
                       <span key={item.id}>{item.name}</span>
                   ))}                      
        </div>
        </Fragment>
    )
}
// export default CategoryWithProduct;
export default () =>{
    return(
        <Provider>

            <CategoryWithProduct />
            
        </Provider>
    )
}
