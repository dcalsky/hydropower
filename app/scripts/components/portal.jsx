import React from "react";
import "../../styles/portal.scss";
import Loader from "./loader.jsx";
import Chart from "./chart.jsx";

const Portal = React.createClass({
    getInitialState(){
        return {
            renderId: null,
            loadCompleted: false,
            data: null
        };

    },
    componentWillReceiveProps(props){
        this.setState({
            renderId: props.renderId
        });
        /* request the data */

        /* simple data */
        this.setState({
           data: {
               id: props.renderId,
               name: "你好,我是: " + props.renderId
           },
            loadCompleted: true
        });
    },
    render(){
        if(this.state.loadCompleted) {
            return(
                <div className="portal">
                    <Chart data={this.state.data} />
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