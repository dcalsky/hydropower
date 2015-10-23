import React from "react";
import "../../styles/console/navbar.scss";
import "../../styles/header.scss";
import cx from "classname";

const Navbar = React.createClass({
    handleTransition(route){
        this.props.history.pushState(null, route);
    },
    render(){
        console.log(this.props)
        let NameItem = this.props.name ? <li className="item"><span className="name">您好,{this.props.name}</span></li> : null ;
        return(
            <div className={cx("navbar", this.props.className)}>
                <div className="logo">
                    {this.props.logo}
                </div>
                <ul className="items">
                    {NameItem}
                    {
                        this.props.items.map((item)=>{
                            return(
                                <li className={cx("item", {active: this.props.history.isActive("")})} onClick={this.handleTransition.bind(this, item.route)}>
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