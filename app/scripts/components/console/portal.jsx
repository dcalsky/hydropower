import React from "react";
import background from "../../../www/img/jst.jpg";
import "../../../styles/console/portal.scss";
import Loader from "../loader.jsx";
import Chart from "./chart.jsx";
import Footer from "./footer.jsx";

const Portal = React.createClass({
    getInitialState(){
        return {
            renderId: "g001",
            loadCompleted: false,
            data: null
        };

    },
    componentWillMount(){
        /* request the data */
        /* simple data */
        this.setState({
            loadCompleted: true
        });
    },
    componentWillReceiveProps(props){
        this.setState({
            renderId: props.renderId,
            loadCompleted: false
        });
        // request the data
        // todo get RenderId message from back-end
        // simple data
        this.setState({
            loadCompleted: true
        });
    },
    render(){
        if(this.state.loadCompleted) {
            return(
                <div className="portal">
                    <Chart data={this.state.data} />
                    <Footer />
                </div>
            );
        }else{
            return(
                <Loader />
            );
        }

    }
});

export default Portal;