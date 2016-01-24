import React from "react";
import "../../styles/setting/setting.scss";
import Container from "../components/container.jsx";
import SubNav from "../components/sub-nav.jsx";

const Order = React.createClass({
    getInitialState(){
        return{
            active: null
        };
    },
    componentWillMount(){
        /* load config */
        //TODO
        /* simple config */
        this.setState({
            title: "工单",
            intro: "关于一切问题的提交、反馈等",
            options: [
                {
                    name: "提交",
                    route: "/submit"
                },
                {
                    name: "反馈",
                    route: "/feedback"
                },
                {
                    name: "人工服务",
                    route: "/human"
                }
            ]
        });
    },
    handleTransition(route){
        this.setState({
            active: route
        });
        this.props.history.pushState(null, this.props.location.pathname + route);
    },
    render(){
        return(
            <Container history={this.props.history}>
                <SubNav
                    title={this.state.title}
                    intro={this.state.intro}
                    options={this.state.options} />
                {this.props.children}
            </Container>
        );
    }
});

export default Order;