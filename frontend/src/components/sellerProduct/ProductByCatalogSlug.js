import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import SideNavgation from '../../Layout/SideNavgation'
import { Context, Provider } from '../../context/AllSellerProductContext'
import { useSelector } from 'react-redux';
import CategoriesSellerProduct from '../categories/CategoriesSellerProduct';

const ProductByCatalogSlug = (props) => {
    // const catalogueslug = props.match.params.catalogueslug;
    // const qty = props.location.search ? Number(props.location.search):null;
	
    // console.log(catalogueslug, 'catalog sss');
    const { state: { allsellerproducts }, ProductbySellerCatalogSlug } = useContext(Context);
    console.log(props, 'allsellerproducts');
    // console.log(allsellerproducts,qty, 'allsellerproducts');
    useEffect(() => {
        (async () => {
            // await ProductbySellerCatalogSlug(catalogueslug);

        })();

    }, []);
    return (
        <div></div>
    )
}

// export default ProductByCatalogSlug
export default () =>{
    return( 
    <Provider>
         <ProductByCatalogSlug />
         
     </Provider>
     )
 }