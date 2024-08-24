import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import AppRoute from './AppRoute'
import Category from './components/categories/Category'
import allproduct from './components/sellerProduct/allproduct'
import AllSellerProduct from './components/sellerProduct/AllSellerProduct'
import CreateSellerProduct from './components/sellerProduct/SellerCreateProduct'
import OneSellerProduct from './components/sellerProduct/OneSellerProduct'
import { Provider } from './context/AllSellerProductContext'
import Header from './Layout/Header'
import Layout from './Layout/Layout'
import SideNavgation from './Layout/SideNavgation'
import SellerMainPage from './seller/SellerMainPage'
import ProductByCatalogSlug from './components/sellerProduct/ProductByCatalogSlug';
import CategoryWithProduct from './components/sellerProduct/CategoryWithProduct'
// import SideBar from './Layout/SideBar'

function App() {
    const [logedIn, setLogedIn] = useState(false);
    const PublickPage = () =>{
        return <h2>publickPage</h2>
    }
    return (
        <BrowserRouter>
            <Switch>

                {/* ===================================================================== */}
                {/* <Route> */}
                {/* <AppRoute exact path="/" component={AllSellerProduct} layout={Layout} /> */}
                {/* <AppRoute exact path="/product_one/:id" component={OneSellerProduct} layout={Layout} /> */}
                {/* <AppRoute exact path="/p" component={allproduct} layout={Layout} /> */}

                <AppRoute exact path="/create_seller_product" component={CreateSellerProduct} layout={Layout} />
                {/* ==============Seller side Page Routing===========  */}

                {/* <AppRoute exact path="/seller_product" component={CreateSellerProduct} layout={SellerMainPage} /> */}
                {/* </Route> */}
                {/*====================================================================== */}
                {/* ==============  seller inventory management Routing =========== */}
                <Route path="/seller_central:path?" >
                    <SellerMainPage>
                        <Switch>
                            <Route path="/seller_central"  component={CreateSellerProduct} />
                            <Route render={()=> <h4 style={{margin:'300px',backgroundColor:'lightcoral',color:'wheat'}}>NOT FOUND</h4>} />
                               
                        </Switch>
                    </SellerMainPage>
                </Route>
                {/* ==========layout Routing========== */}
                <Route>
                    <Layout>
                        <Switch>
                           {/* {logedIn?<Redirect to="/"/>: <PublickPage/>}  */}
                            <Route path="/" exact component={AllSellerProduct} />
                            <Route path="/category" exact component={Category} />
                            <Route  path="/product_one/:id" component={OneSellerProduct} />
                            <Route  path="/product_by_seller_catalog_slug_by_products/:slug" component={CategoryWithProduct} />
                            {/* <Route  path="/product_by_seller_catalog_slug_by_products/:catalogueslug" component={ProductByCatalogSlug} /> */}
                            <Route path="/category_with_product/:slug" component={CategoryWithProduct}/>;
                            <Route render={()=> <h4 style={{margin:'300px',backgroundColor:'lightcoral',color:'wheat'}}><Redirect to="/"/> NOT FOUND</h4>} />
                          
                        </Switch>
                    </Layout>
                </Route>
            </Switch>
            {/* <Route exact path="/menu" component={Category}/> */}
        </BrowserRouter>

    )
}

export default App;
// export default () => {
//     return (
//     <Provider>
//         <App />

//     </Provider>
//     )

// }
