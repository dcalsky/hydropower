import React from "react";
import "../../styles/navbar.scss";

const Navbar = React.createClass({
    render(){
        return(
            <div className="navbar">
                <div className="logo">
                    HYDROPOWER
                </div>
                <ul className="items">
                    <li className="item"><span className="name">您好,{this.props.name}</span></li>
                    <li className="item"><i className="fa fa-user"></i>我的账户</li>
                    <li className="item"><i className="fa fa-suitcase"></i>工单</li>
                    <li className="item"><i className="fa fa-cog"></i>配置管理</li>
                    <li className="item"><i className="fa fa-question-circle"></i>帮助</li>
                </ul>
            </div>
        );
    }
});

export default Navbar;