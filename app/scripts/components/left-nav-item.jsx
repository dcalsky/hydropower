import React from "react";
import "../../styles/left-nav.scss";
import cx from "classname";

const LeftNavItem = React.createClass({
    render(){
        if(this.props.id){
            return(
                <li className="item">
                    <span className={cx("item-text", {active: this.props.active == this.props.id})} onClick={()=>{this.props.handleSelectItem(this.props.id); this.props.handleTransition(this.props.id)}}>
                        <i className={this.props.icon}></i>
                        {this.props.name}
                    </span>
                </li>
            );
        }else{
            return(
                <li className="item">
                    <span className={cx("item-text", {active: this.props.active == this.props.enName})} onClick={()=>{this.props.handleSelectItem(this.props.enName)}}>
                        <i className={this.props.icon}></i>
                        {this.props.name}
                    </span>
                    {
                        this.props.active == this.props.enName ?
                            <i className="fa fa-angle-up select-icon"></i>
                            :
                            <i className="fa fa-angle-down select-icon"></i>
                    }
                    {
                        this.props.active == this.props.enName?
                            <ul className="sub-items">
                                {this.props.subItem.map((item)=>{
                                    return(
                                        <li className={cx("sub-item", {active: this.props.subActive == item.id})} onClick={()=>{this.props.handleTransition(item.id)}}>{item.name}</li>
                                    );
                                })}
                            </ul>
                            :
                            null
                    }
                </li>
            );
        }

    }
});

export default LeftNavItem;