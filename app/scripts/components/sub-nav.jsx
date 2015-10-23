import React from "react";
import cx from "classname";
import "../../styles/sub-nav.scss";

const SubNav = React.createClass({
    handleTransition(route){
        this.props.handleTransition(route)
    },
    render(){
        return(
            <div className="sub-nav">
                <div className="text">
                    <h4 className="title">{this.props.title}</h4>
                    <h5 className="intro">{this.props.intro}</h5>
                </div>
                <ul className="options">
                {
                    this.props.options.map((option)=>{
                        return(
                            <li className={cx("option", {active: this.props.active == option.route})} onClick={this.handleTransition.bind(this, option.route)}>{option.name}</li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
});

export default SubNav;