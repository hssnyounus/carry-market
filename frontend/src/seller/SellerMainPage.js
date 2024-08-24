import React, { Fragment } from 'react'
import Footer from './Footer'
import Header from './Header'

function SellerMainPage(props) {
    return (
        <Fragment>
        <div className="seller_wrapper">
            <Header />
            <div className="content_area">
                {props.children}
            </div>

        <Footer/>
        </div>
            
           
    </Fragment>
    
    )
}

export default SellerMainPage
