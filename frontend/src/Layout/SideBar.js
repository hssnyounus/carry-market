import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styeld from 'styled-components';
const StyledSideNav = styeld.div`
    position:fixed;
    height:100%;
    width:75px;
    z-index:3.4rem;
    background-color:gray;
    overflow-x:hidden;
    padding-top:10px;
`
const StyledNavItem = styeld.div`
   
    height:70px;
    width:75px;
    text-align: center;
    margin-bottom: 0;
   a{
       font-size: 2.7em;
       color: ${(props) => props.active ? "white" : "#9fffbc"};
       :hover{
           opacity:0.7;
           text-decoration:none;
       } 
   }
`

class NavItem extends Component {
    constructor(){
        super(props)
    }
   
   
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={handleClick}>

                </Link>
            </StyledNavItem>
        );
    }
}







class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: '/',
            items: [
                {
                    path: '/',
                    name: "Home",
                    css: 'fa fa-fw fa-home',
                    key: 1
                },
                {
                    path: '/about',
                    name: "About",
                    css: 'fa fa-fw fa-home',
                    key: 2
                },

            ]
        }
    }

    onItemClick = ()=>{
        this.setState({
            active:path
        })
    }
    render() {
        const {items,activePath}= this.props;

        return (
            <StyledSideNav>
                {items &&  
                    items.map((item)=>{
                        return(
                            <NavItem
                            path={item.path}
                            name={item.name}
                            css={item.css}
                            onClick={this.onItemClick}
                            active={item.path === activePath}
                            key={item.key}
                            />
                            );
                    })
                }



                
            </StyledSideNav>
        );
    }
}

export default class SideBar extends Component {
    render() {
        return (
            <SideNav>

            </SideNav>
        );
    }
}

