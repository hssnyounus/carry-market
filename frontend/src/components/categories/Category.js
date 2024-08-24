import React, { useState } from 'react'
import ArrowIcon from '../../../public/icon/arrow.svg';

import { FaArrowLeft ,FaArrowDown,FaPlus,FaArrowRight} from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
function Category() {
    return (
        <Navbar>
            <NavItem icon={<FaArrowDown/>}/>
            <NavItem icon={<FaPlus/>}/>
            <NavItem>
                hello world
                <DropDownMenu/>
            </NavItem>
        </Navbar>
    )
}

function DropDownMenu() {
    const [activeMenu,setActiveMenu] = useState('main')
    function DropDownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}>
                {/* <FaArrowLeft className="icon-left"/> */}
                {props.children
                    // console.log(props.children,'props.children')
                }
                {/* <FaArrowRight  className="icon-right"/> */}
            </a>
        )
    }
    return (
        <div className="dropdown">
            <CSSTransition in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary">

                <div className="menu">

                    <DropDownItem>My Profile</DropDownItem>
                    <DropDownItem
                    goToMenu="settings"
                    >My setting</DropDownItem>
                </div>
            </CSSTransition>
            <CSSTransition in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary" >

                <div className="menu">

                    <DropDownItem goToMenu="main"><FaArrowLeft/></DropDownItem>
                    <DropDownItem>setting</DropDownItem>
                    <DropDownItem>setting</DropDownItem>
                </div>
            </CSSTransition>
        </div>
    )
}



function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    )
}
function NavItem(props) {
    const [open,setOpen] = useState(false)
    return (
            <li className="nav-item">
                <a onClick={()=> setOpen(!open)} href="#"className="icon-button" style={{color:'white'}} >{props.icon}</a>
            {open && props.children}
            </li>
        )
}


export default Category
