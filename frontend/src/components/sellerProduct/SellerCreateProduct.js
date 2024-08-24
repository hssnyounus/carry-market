import React, { useContext, useState, useEffect, Fragment } from 'react';
import Select from 'react-select'
// import { Context, Provider } from '../../context/AllCategoriesContext';
import { Context,Provider } from '../../context/AllSellerProductContext';
import { FaArrowLeft, FaArrowDown, FaPlus, FaArrowRight, FaArrowCircleUp, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import apiCall from '../../actions/api';

function SellerCreateProduct() {
    const [childCategoryRendom, setChildCategoryRendom] = useState('');
    // const { state: { allcategoriesBrowser }, allCatelogue, allChildCategory, allSubCategory} = useContext(Context);
    const { state: { allsellerproducts },CreateProductbySellerCatalogue} = useContext(Context);
    // const [children2] = AllSubCategories;
    const [catalogues,  setCatalogues] = useState({});
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');


    // console.log(children2);
    // const {children} = Array(children2)? children2:null;
    console.log(childCategoryRendom,);

    useEffect(async () => {
        let unmounted = false;
        // await allSubCategory();
        const AllSubCategories = await apiCall('/file_all_catelogue_categories', 'get');
        
        setChildCategoryRendom(AllSubCategories.data.categoryList);
        return () => {
            unmounted = true;
        };
    }, []);
    const getCategory = (pos) => {
        alert(JSON.stringify(pos))
    }

    const formHandle = (e) =>{
        e.preventDefault();
         CreateProductbySellerCatalogue({catalogues});
        //  CreateProductbySellerCatalogue({name,price,stock});
        // alert(JSON.stringify({data:}))
        console.log(typeof catalogues,'form data');
    }
    return (
        <Fragment>
            <form onSubmit={formHandle} className="form_seller_product">

            <select className="menu" id="catalogues"  onChange={(e)=>setCatalogues(e.target.value)}>

                <option value="" key="">select a category</option>
                {childCategoryRendom && childCategoryRendom.map((catalog, index) => (
                    <Fragment key={catalog.id}>

                    { catalog.children && catalog.children.map((catalog2, index) => (
                        <Fragment key={catalog2.id}>
                        { catalog2.children && catalog2.children.map((catalog3, index) => (
                        
                        
                            <option value={Array([catalog2.id,catalog3.id])}  key={[catalog2.id,catalog3.id]}>{catalog.cataloguename}/{catalog2.cataloguename}/{catalog3.cataloguename}</option>
                            
                            ))}
                           {/* <option value={catalog.id} key={catalog2.id}>{catalog.cataloguename}/{catalog2.cataloguename}</option> */}

                        </Fragment>
                        ))}

               
                        </Fragment>
                    ))}
            </select>
         

                {/* <div>
                    <h2>
                    Seller list a product
                    </h2>
                </div> */}
                <div className="seller_input_product">
                    <label htmlFor="item-name">Item name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="item name"
                        onChange={(e)=> setName(e.target.value)}

                    />

                </div>
                <div className="seller_input_product">
                    <label htmlFor="item-price">Item price</label>
                    <input
                        type="text"
                        id="price"
                       
                        placeholder="item price"
                        onChange={(e)=> setPrice(e.target.value)}
                    />

                </div>
                {/* <div className="seller_input_product">
                    <label htmlFor="item-image">Item image</label>
                    <input
                        type="text"
                        id="image"
                       
                        placeholder="item image"
                        onChange={(e)=> setStock(e.target.value)}
                    />

                </div> */}
                <div className="seller_input_product">
                    <label htmlFor="item-stock">Item stock</label>
                    <input
                        type="text"
                        id="stock"
                      
                        placeholder="item stock"
                        onChange={(e)=> setStock(e.target.value)}
                    />

                </div>
                <div className="seller_input_product">
                    <div>
                        <button type="submit">save and finish</button>

                    </div>
                </div>
            </form>
        </Fragment>
    )
}

// export default SellerCreateProduct;
export default () => {
    return (
        <Provider>
            <SellerCreateProduct />
        </Provider>
    )
}
