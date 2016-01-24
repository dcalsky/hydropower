import React from "react";

const Base = React.createClass({
    handleSubmit(){

    },
    render(){
        console.log(this.props)
        return(
            <div className="setting-base">
                <form className="form">
                    <div className="form-group">
                        <div className="label">公司名称:</div>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <div className="label">地址:</div>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <div className="label">邮编:</div>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <div className="label">E-mail:</div>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <div className="label">联系方式:</div>
                        <input type="text"/>
                    </div>
                    <div className="form-group submit">
                        <button type="submit" className="login">
                            提交
                        </button>
                    </div>
                </form>
            </div>
        );
    }
});

export default Base;