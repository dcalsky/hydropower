import React from "react";
import Highcharts from "react-highcharts";
import moment from 'moment';
import "../../../styles/console/left-nav.scss";

const Chart = React.createClass({
    getInitialState(){
      return {
          date: moment().format('YYYY年MM月DD日HH时mm分ss秒')
      }
    },
    handleTimeChange(){
      this.setState({date: moment().format('YYYY年MM月DD日HH时mm分ss秒')});
    },
    componentDidMount(){
      setInterval(this.handleTimeChange, 1000);
    },
    render(){
        return(
            <div className="chart">
                <h1 style={{textAlign: 'center', color: 'red'}}>当前时间:{this.state.date}</h1>
            </div>
        );
    }
});

export default Chart;