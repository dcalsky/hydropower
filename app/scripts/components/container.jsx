import React from "react";
import "../../styles/setting/setting.scss";
import Navbar from "./navbar.jsx";
import SubNav from "./sub-nav.jsx";
import Footer from "./footer.jsx";

const Container = React.createClass({
    getInitialState(){
        return{
            name: null,
            items: [],
            options: []
        };
    },
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
                    name: "配置管理",
                    icon: "fa fa-cog",
                    route: "/setting"
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
        console.log(this.props)
        return(
            <div className="container">
                <Navbar className="header" name={this.state.name} history={this.props.history} items={this.state.items} logo="HYDROPOWER" />
                {this.props.children}
                <Footer />
            </div>
        );
    }
});

export default Container;