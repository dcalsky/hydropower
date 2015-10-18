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
            name: "周以恒"
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
                    <Navbar name={this.state.name}/>
                    <LeftNav handleTransition={this.handleTransition}/>
                    <Portal renderId={this.state.renderId}/>
                    <Footer />
            </div>
        );
    }
});

export default Console;