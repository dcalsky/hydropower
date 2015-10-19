import React from "react";
import Navbar from "../components/navbar.jsx";
import SubNav from "../components/sub-nav.jsx";

const Setting = React.createClass({

    componentWillMount(){
        /* load config */
        //TODO
        /* simple config */
        this.setState({
            name: "周以恒",
            items: [
                {
                    name: "控制台",
                    icon: "fa fa-th",
                    route: "/console"
                },
                {
                    name: "工单",
                    icon: "fa fa-suitcase",
                    route: "/order"
                },
                {
                    name: "帮助",
                    icon: "fa fa-question-circle",
                    route: "/intro"
                }
            ]
        });
    },
    render(){
        return(
            <div>
             <Navbar className="header" name={this.state.name} history={this.props.history} items={this.state.items} logo="HYDROPOWER" />
             <SubNav />
            </div>
        );
    }
});

export default Setting;