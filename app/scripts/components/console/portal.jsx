import React from "react";
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
            data: {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: '测试图表'
                },
                subtitle: {
                    text: 'Dcalsky'
                },
                xAxis: {
                    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Population (millions)',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' millions'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 100,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Year 1800',
                    data: [107, 31, 635, 203, 2]
                }, {
                    name: 'Year 1900',
                    data: [133, 156, 947, 408, 6]
                }, {
                    name: 'Year 2008',
                    data: [973, 914, 4054, 732, 34]
                }]
            },
            loadCompleted: true
        });
    },
    componentWillReceiveProps(props){
        this.setState({
            renderId: props.renderId,
            loadCompleted: false
        });
        /* request the data */

        /* simple data */
        this.setState({
            data: {
                title: {
                    text: '测试图表'
                    //center
                },
                subtitle: {
                    text: 'Dcalsky'

                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'Tokyo',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'New York',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'Berlin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'London',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }]
            },
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