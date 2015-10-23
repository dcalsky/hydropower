import React from "react";
import "../../styles/footer.scss";

const Footer = React.createClass({
    render(){
        return(
            <div className="big-footer">
                <ul className="viewport">
                    <li className="line">
                        <h4 className="title">功能</h4>
                        <ul className="sub-line">
                            <li className="item">功能名称</li>
                            <li className="item">功能名称</li>
                            <li className="item">功能名称</li>
                            <li className="item">功能名称</li>
                            <li className="item">功能名称</li>
                        </ul>
                    </li>
                    <li className="line">
                        <h4 className="title">帮助</h4>
                        <ul className="sub-line">
                            <li className="item">用户指南</li>
                            <li className="item">常见问题</li>
                            <li className="item">人工服务</li>
                        </ul>
                    </li>
                    <li className="line">
                        <h4 className="title">联系我们</h4>
                        <ul className="sub-line">
                            <li className="item"><i class="fa fa-github"></i><a href="#">Github</a></li>
                            <li className="item"><i class="fa fa-weixin"></i><a href="#">Wechat</a></li>
                            <li className="item"><i class="fa fa-weixin"></i><a href="#">E-mail</a></li>
                            <li className="item"><i class="fa fa-phone"></i><a href="#">Phone</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="copyright footer">Copyright © 2015 周左左 All rights reserved.</div>
            </div>
        );
    }
});

export default Footer;