import React from "react";
import Highcharts from "react-highcharts";
import "../../../styles/console/left-nav.scss";

const Chart = React.createClass({
    render(){
        return(
            <div className="chart">
                <Highcharts config={this.props.data}></Highcharts>
            </div>
        );
    }
});

export default Chart;