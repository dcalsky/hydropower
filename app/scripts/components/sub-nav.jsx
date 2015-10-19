import React from "react";
import "../../styles/sub-nav.scss";

const SubNav = React.createClass({
    handleSubNavChange(){

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
                            <li className="option" >{option.name}</li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
});

export default SubNav;