import React from 'react'
import ContentArea from '../components/contentArea/ContentArea';
import SideBar from './SideBar';
import Footer from './footer'
import Header from './Header'
import SideNavgation from './SideNavgation';

function Layout(props) {
    return (
        <>
            <div className="wrapper">
                <Header />
               
                <div className="content_area">
                    {props.children}

                </div> 

            </div>
                <Footer />
        </>
    )

}

export default Layout;
