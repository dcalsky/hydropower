import React from "react";
import "../../styles/navbar.scss";
import "../../styles/header.scss";
import cx from "classname";

const Navbar = React.createClass({
    handleTransition(route){
        this.props.history.pushState(null, route);
    },
    render(){
        let NameItem = this.props.name ? <li className="item"><span className="name">您好,{this.props.name}</span></li> : null ;
        return(
            <div className={cx("navbar", this.props.className)} style={this.props.style}>
                <div className="logo">
                    {this.props.logo}
                </div>
                <ul className="items">
                    {NameItem}
                    {
                        this.props.items.map((item)=>{
                            return(
                                <li className="item" onClick={this.handleTransition.bind(this, item.route)}>
                                    <i className={item.icon}></i>
                                    {item.name}
                                </li>
                            );
                        })
                    }

                </ul>
            </div>
        );
    }
});

export default Navbar;