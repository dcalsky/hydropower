import React from "react";
import "../../styles/setting/setting.scss";
import Container from "../components/container.jsx";
import SubNav from "../components/sub-nav.jsx";

const Setting = React.createClass({
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
            title: "配置管理",
            intro: "基础、站点、安全设置等",
            options: [
                {
                    name: "基本信息",
                    route: "/base"
                },
                {
                    name: "站点设置",
                    route: "/station"
                },
                {
                    name: "安全与通讯",
                    route: "/safety"
                }
            ]
        });
    },
    handleTransition(route){
        this.setState({
            active: route
        });
        this.props.history.pushState(null, "/setting" + route);
    },
    render(){
        return(
            <Container history={this.props.history} route={this.props.route}>
             <SubNav
                 title={this.state.title}
                 intro={this.state.intro}
                 options={this.state.options}
                 handleTransition={this.handleTransition}
                 active={this.state.active} />
                {this.props.children}
            </Container>
        );
    }
});

export default Setting;