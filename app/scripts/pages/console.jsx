import React from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import LeftNav from "../components/left-nav.jsx";
import Portal from "../components/portal.jsx";

const Console = React.createClass({
    getInitialState(){
        return {
            username: null,
            token: null,
            name: null,
            renderId: 0,
            loadCompleted: false
        };
    },
    componentWillMount(){
        /* some functions when console interface launching */

        /* simple account */
        this.setState({
            name: "周以恒",
            items: [
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
    handleTransition(renderId){
        this.setState({
            renderId: renderId
        });
    },
    render(){
        return(
            <div className="console">
                    <Navbar name={this.state.name} history={this.props.history} items={this.state.items} logo="HYDROPOWER" />
                    <LeftNav handleTransition={this.handleTransition} />
                    <Portal renderId={this.state.renderId}/>
            </div>
        );
    }
});

export default Console;