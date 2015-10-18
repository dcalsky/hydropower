import React from "react";
import "../../styles/left-nav.scss";

const Chart = React.createClass({
    render(){
        return(
            <div className="chart">
                {this.props.data.name}
            </div>
        );
    }
});

export default Chart;