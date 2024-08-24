import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import SideNavgation from '../../Layout/SideNavgation'
import {Context,Provider} from '../../context/AllSellerProductContext'
import { useSelector } from 'react-redux';
import CategoriesSellerProduct from '../categories/CategoriesSellerProduct';

function AllSellerProducts() {
    const [Product, setProducts] = useState([]);
    const {state:{allsellerproducts},ListAllSellerProducts} = useContext(Context);
    useEffect(() => {
        (async()=>{
            await ListAllSellerProducts()

        })();
   
    }, []);

    return (
        <div className="">
        <SideNavgation />
        {/* <CategoriesSellerProduct/> */}
        <div className="row center">
            {allsellerproducts.map((item,idx)=>(
                <div className="card" key={item.id}>
                <Link to={`product_one/${item.id}`}>
                <img className="medium" src={'http://localhost:4244/image/'+item.image} alt="" />
               </Link>
                <div className="card-body">
                    <Link>
                        <h2 className="product-name">Title:{item.name}</h2>
                    </Link>
                </div>
                <div className="rating">
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                </div>
                <div className="price">
                    <a href=""> Price</a>:<span>
                        Rs:{item.price}
                    </span>
                </div>
            </div>
            ))}
            
            <div className="card">
                <a href="">
                    <img className="medium" src="https://menclothing.xyz/wp-content/uploads/2019/06/TUNEVUSE-Mens-shirts-Camisa-Masculina-Long-Sleeve-Shirt-Men-Korean-Slim-Design-Formal-Casual-Male-Dress.jpg" alt="" />
                </a>
                <div className="card-body">
                    <a href="">
                        <h2>sleev shirt</h2>
                    </a>
                </div>
                <div className="rating">
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                </div>
                <div className="price">
                    <span>
                        Rs:2500
                    </span>
                </div>
            </div>
            <div className="card">
                <a href="">
                    <img className="medium" src="https://menclothing.xyz/wp-content/uploads/2019/06/TUNEVUSE-Mens-shirts-Camisa-Masculina-Long-Sleeve-Shirt-Men-Korean-Slim-Design-Formal-Casual-Male-Dress.jpg" alt="" />
                </a>
                <div className="card-body">
                    <a href="">
                        <h2>sleev shirt</h2>
                    </a>
                </div>
                <div className="rating">
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                </div>
                <div className="price">
                    <span>
                        Rs:2500
                    </span>
                </div>
            </div>
            <div className="card">
                <a href="">
                    <img className="medium" src="https://menclothing.xyz/wp-content/uploads/2019/06/TUNEVUSE-Mens-shirts-Camisa-Masculina-Long-Sleeve-Shirt-Men-Korean-Slim-Design-Formal-Casual-Male-Dress.jpg" alt="" />
                </a>
                <div className="card-body">
                    <a href="">
                        <h2>sleev shirt</h2>
                    </a>
                </div>
                <div className="rating">
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                </div>
                <div className="price">
                    <span>
                        Rs:2500
                    </span>
                </div>
            </div>
            <div className="card">
                <a href="">
                    <img className="medium" src="https://menclothing.xyz/wp-content/uploads/2019/06/TUNEVUSE-Mens-shirts-Camisa-Masculina-Long-Sleeve-Shirt-Men-Korean-Slim-Design-Formal-Casual-Male-Dress.jpg" alt="" />
                </a>
                <div className="card-body">
                    <a href="">
                        <h2>sleev shirt</h2>
                    </a>
                </div>
                <div className="rating">
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                    <span>
                        <i className="fa fa-star"></i>
                    </span>
                </div>
                <div className="price">
                    <span>
                        Rs:2500
                    </span>
                </div>
            </div>
        </div>
        </div>
    )
}

// export default AllSellerProducts;
export default () =>{
   return( 
   <Provider>
        <AllSellerProducts />
        
    </Provider>
    )
}