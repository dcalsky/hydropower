import React from "react";
import "../../styles/home.scss";
import "../../styles/form.scss";

const Home = React.createClass({
    getInitialState(){
      return {
          username: null,
          password: null
      };
    },
    handleInputChange(name, e){
        switch(name){
            case "username": this.setState({username: e.target.value});
                break;
            case "password": this.setState({password: e.target.value});
                break;
        }
    },
    handleSubmit(e){
        e.preventDefault();
        /* form validation */
        if(!this.handleValidation("username", this.state.username) || !this.handleValidation("password", this.state.password)){
            return 0;
        }
        /* simple login */
        if(this.state.username == "admin" && this.state.password == "000000"){
            console.log("login!");
            this.props.history.pushState(null, "/console");
        }else{
            return 0;
        }

    },
    handleValidation(name, val){
        switch(name){
            case "username": return !(/\s/).test(val) && (/\w{4,10}/).test(val);
                break;
            case "password": return !(/\s/).test(val) && (/\w{6,14}/).test(val);
                break;
        }
    },
    render(){
        return(
            <div className="home">
                <div className="wrapper">
                    <div className="title">HYDROPOWER</div>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="帐号" onChange={this.handleInputChange.bind(this, "username")}/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="密码" onChange={this.handleInputChange.bind(this, "password")}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="login">
                                    登录
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

export default Home;