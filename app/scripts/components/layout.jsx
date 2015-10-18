import React from "react";

const Layout = React.createClass({
    render(){
        return(
            <div className="app">
                {this.props.children}
            </div>
        );
    }
});

export default Layout;