import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context, Provider } from '../context/AllCategoriesContext';


import { FaArrowLeft ,FaArrowDown,FaPlus,FaArrowRight,FaArrowCircleUp,FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
const StyledSideNav = styled.div`
    top:0px;`

function SideNavgation() {
    var categoryChild = [];
    const [activeMenu, setActiveMenu] = useState('main');
    const [childCategoryRendom, setChildCategoryRendom] = useState('');
    const [secodeCategory,setSecodeCategory] = useState([]);
    // const [uniqueCategory,setUniqueCategory] = useState('');
    // const [SeconduniqueCategory,setSecondUniqueCategory] = useState([]);
    const { state: { allcategoriesBrowser}, allCatelogue,allChildCategory,allSubCategory } = useContext(Context);
    // console.log(allcategoriesBrowser,'allcategoriesBrowser');
    const changeCategory = (pos)=>{
    
     
    //  console.log(pos,'children rendom');
    setChildCategoryRendom(pos);
    // const {children} = childCategoryRendom;
    // setSecodeCategory(children);
    // setUniqueCategory(secodeCategory);
    // setSecondUniqueCategory(uniqueCategory);
    // const a = [...Array([...Array([...Array(secodeCategory)])])];
    // const ab = [secodeCategory];
    // console.log({childCategoryRendom:pos},'childCategoryRendom');
    // console.log(childCategoryRendom,'childCategoryRendom');
    // const {id} = SeconduniqueCategory;
    // console.log(pos,'2rendom category')
    // secodeCategory.map((row,index)=>{
    //     console.log(row.cateloguename,'row')
    // })
    // console.log( childCategoryRendom,'rendom category')
   
   
}  
    const ChildCategoryHandle = () =>{
    //    const {children} = childCategoryRendom;
    //    setSecodeCategory(children);
    //    console.log(children,'categoryChildElement');
        for(categoryChild of  Array(childCategoryRendom)){
            // console.log(categoryChild,'data enter');
        }
        return categoryChild;
    }
    ChildCategoryHandle();
    useEffect(async () => {
        // await allCatelogue();
         allSubCategory();
    }, [])

    // const renderCategories = (categoriesSeller) =>{
    //     let categoriesList = [];
    //     for(let category of categoriesSeller){
    //         categoriesList.push(
             
              
    //                 <>
    //                 {category.children.map((item,idex)=>(
    //                      <DropDownItem key={item.cateloguename}> {item.cateloguename}</DropDownItem>
    //                 ))}
    //                 {category.children.length > 0 ? renderCategories(category.children) :null}
    //                 </>
    //         );
    //     }
    //     // console.log(categoriesList,'renderCategories');
    //     return categoriesList;
    // }
    // console.log(renderCategories(allcategoriesBrowser),'category');
//////// DropDownItem function component starting area /////////////
    function DropDownItem(props) {
        // console.log(categoryChild,'data enter DropDonwItem');
        // console.log(props,'categoriesItems props');


        return (
            <div className="" style={{ position: 'sticky', position: '-webkit-sticky' }} >
           {/* <div className="category_image">
                
               </div> */}
                  {/* {allcategoriesBrowser.length > 0 ? renderCategories(allcategoriesBrowser):null} */}
           
          {props.categories && props.categories.map((browserCategoriesItem,idx)=>(  
                <div key={browserCategoriesItem.id}>
                        <img src={`http://localhost:4244/image/${browserCategoriesItem.image}`} alt="" />
                        <h2><a href="#" className="menu-item"    onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}onMouseEnter={()=> props.changeCategory(browserCategoriesItem)}>{browserCategoriesItem.cataloguename}</a>
                        {/* {alert(JSON.stringify(browserCategoriesItem.categoryId))} */}
                        <span><p className="angle-right"><FaAngleRight/></p></span>
                        </h2>
                </div>  
                
                ))} 

                    {/* <h2>{secodeCategory?secodeCategory.map((row,index)=>(
                        <span>{row.cateloguename}</span>
                    )):null}</h2> */}
                    <h2><a href="#" onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}>{props.children}</a></h2>
        </div>
        )
    }
//////// DropDownItem function component ending area /////////////
    // ===========================================//
////////////navigation function components return area/////////////
    return (
        <Fragment>
        <div className="sidebar">
        <CSSTransition in={activeMenu === 'main'}
            unmountOnExit
            timeout={500}
            classNames="menu-primary">

            <div className="menu">

                 {/* {allcategoriesBrowser && allcategoriesBrowser.map((categoriesItem, idx) => ( */}
                  
                <DropDownItem
                goToMenu="settings"
                categories={allcategoriesBrowser}
                changeCategory={changeCategory}
                ></DropDownItem>
                {/* <DropDownItem
                goToMenu="settings"
                categories={allcategoriesBrowser}
                >{categoriesItem.title}</DropDownItem> */}
                {/* //  ))} */}
            </div>
        </CSSTransition>
        <CSSTransition in={activeMenu === 'settings'}
            unmountOnExit
            timeout={500}
            classNames="menu-secondary" >

            <div className="menu">

                <DropDownItem goToMenu="main"><FaArrowLeft />main menu</DropDownItem>
                {childCategoryRendom.children?childCategoryRendom.children.map((row,index)=>(
                        <DropDownItem key={row.id}> <Link  to={`product_by_seller_catalog_slug_by_products/${row.catalogueslug}`}>{row.cataloguename}</Link></DropDownItem>
                        // <DropDownItem key={row.id}>{row.cateloguename}</DropDownItem>
                    )):null}
                {/* <DropDownItem>{SeconduniqueCategory.id  ? SeconduniqueCategory.id : "No Item Category"}</DropDownItem> */}
              {/* { secodeCategory > 0 ? secodeCategory.map((row,index)=>(
                   <DropDownItem>{row.cateloguename}</DropDownItem>
                    // console.log(row.cateloguename,'row')
              )):null} */}
                {/* {||categoryChild.map((row,idx)=>(
                    <span>{row.cateloguename}</span>
                ))}
                {console.log(categoryChild,'categoryChild')} */}
            </div>
        </CSSTransition>
        {/* <DropDownItem>{renderCategories(allcategoriesBrowser.categoriesSeller)}</DropDownItem> */}
                {/* {allcategoriesBrowser.map((AllchildCategoriesItem,idx)=>( 
                <DropDownItem>{AllchildCategoriesItem.brandName}</DropDownItem>

                 ))} */}
                    {/* <DropDownItem>{ childCategoryRendom.subcategories.name}</DropDownItem> */}
                    {/* <DropDownItem>{childCategoryRendom.brandName? childCategoryRendom.brandName: 'no item' }</DropDownItem> */}
                    {/* <DropDownItem>{console.log( childCategoryRendom,'rendom category')}</DropDownItem> */}
                    {/* <DropDownItem>{allcategoriesBrowser.length>0?renderCategories(allcategoriesBrowser.categoriesSeller):null}</DropDownItem> */}
                {/* <DropDownItem>setting2</DropDownItem>
                <DropDownItem>setting4</DropDownItem>
                <DropDownItem>setting5</DropDownItem>
                <DropDownItem>setting6</DropDownItem> */}
              
               {/* <DropDownItem>{allcategoriesBrowser.length > 0 ? renderCategories(allcategoriesBrowser):null}</DropDownItem> */}
               {/* {childCategoryRendom || childCategoryRendom.map((it,idx)=>(
                   
                //    console.log(it,' If you')
                //    <DropDownItem>{it.cateloguename}</DropDownItem>
               ))} */}
              
                   {/* <DropDownItem>{secodeCategory}</DropDownItem> */}
               
               {/* {secodeCategory>0?secodeCategory.map((item,idx)=>(
                   <DropDownItem>{item.cateloguename}</DropDownItem>
               )):null} */}
            
    </div>
    </Fragment>
    )
}

// navgation breaket area ending point 

// export default SideNavgation
export default () => {
    return (
        <Provider>
            <SideNavgation />
        </Provider>

    )
} 
