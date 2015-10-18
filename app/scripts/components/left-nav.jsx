import React from "react";
import cx from "classname";
import "../../styles/left-nav.scss";
import Item from "./left-nav-item.jsx";

const LeftNav = React.createClass({
    getInitialState(){
        return {
            active: null,
            subActive: null,
            data: [],
            stations: [],
            stationActive: "紧水滩水电站"
        }
    },
    componentWillMount(){
        /* Get config */
        //TODO
        /* simple config */
        this.setState({
            data: [
                {
                    title: "统计",
                    enTitle: "statistics",
                    items: [
                        {
                            id: "g001",
                            name: "总览",
                            icon: "fa fa-align-justify",
                            subItems: []
                        },
                        {
                            name: "统计图",
                            enName: "chart",
                            icon: "fa fa-area-chart",
                            subItems: [{id: "c001", name: "实时水情图"}, {id: "c002", name: "地区降水图"}, {id: "c003", name: "流域水位图"}]
                        },
                        {
                            name: "统计表",
                            enName: "table",
                            icon: "fa fa-table",
                            subItems: [{id: "t001", name: "实时水情表"}, {id: "t002", name: "地区降水表"}, {id: "t003", name: "流域水位表"}]
                        }
                    ]
                },
                {
                    title: "任务",
                    enTitle: "task",
                    items: [
                        {
                            id: "g002",
                            name: "总览",
                            icon: "fa fa-align-justify",
                            subItems: []
                        },
                        {
                            name: "计划",
                            enName: "plan",
                            icon: "fa fa-tasks",
                            subItems: [{id: "p001", name: "工作安排"}, {id: "p002", name: "会议"}, {id: "p003", name: "休假"}]
                        },
                        {
                            name: "历史数据",
                            enName: "history",
                            icon: "fa fa-history",
                            subItems: [{id: "h001", name: "近十年数据"}, {id: "h002", name: "数据备份"}]
                        }
                    ]
                }
            ],
            stations: [
                {
                    name: "紧水滩水电站",
                    id: "s001"
                },
                {
                    name: "滩坑水电站",
                    id: "s002"
                },
                {
                    name: "三峡水电站",
                    id: "s003"
                }
            ]
        });
    },
    handleSelectItem(name){
        if(name == this.state.active){
            this.setState({
                active: null
            });
        }else if(name == "g001" || name == "g002") {
            this.handleTransition(name);
            this.setState({
                active: name,
                subActive: null
            });
        }else{
            this.setState({
                active: name
            });
        }

    },
    handleTransition(name){
        this.setState({
           subActive: name
        });
        this.props.handleTransition(name);
    },
    handleSelectStation(name){
        /* Change the station */
        // TODO
        if(this.state.stationActive != name){
            this.setState({
                stationActive: name
            });
        }
    },
    handleSkimArea(){
        this.setState({
            isSwitchStation: !this.state.isSwitchStation
        });
    },
    render(){
        let self = this;
        return(
            <div className="left-nav">
                <div className="area" onClick={this.handleSkimArea}>
                    <span className="station">
                        <i className="fa fa-home"></i>
                        {this.state.stationActive}
                        <i className="fa fa-angle-down select-icon"></i>
                    </span>
                    {
                        this.state.isSwitchStation?
                        <div className="stations-wrapper">
                            <ul className="stations">
                                {this.state.stations.map((item)=>{
                                  return(
                                      <li className="item" onClick={self.handleSelectStation.bind(this, item.name)}>{item.name}</li>
                                  );
                                })}
                            </ul>
                        </div> : null
                    }
                </div>
                {
                    this.state.data.map((part)=>{
                        return(
                            <div className="part">
                                <h4 className="title">{part.title}</h4>
                                <ul className="items">
                                    {part.items.map((item)=>{
                                        return(
                                            <Item
                                                id={item.id}
                                                name={item.name}
                                                enName={item.enName}
                                                icon={item.icon}
                                                active={self.state.active}
                                                subActive={self.state.subActive}
                                                handleSelectItem={self.handleSelectItem}
                                                handleTransition={self.handleTransition}
                                                subItem={item.subItems}
                                            />
                                        );
                                    })}
                                 </ul>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
});

export default LeftNav;