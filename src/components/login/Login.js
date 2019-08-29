import React, { Component } from "react";
import { InputItem, Checkbox,Toast,Button} from "antd-mobile";
import "./Login.scss";
import { fetchData, submitData } from "../../services/httpService";
import { qqtjm } from "../../services/utilsService";
import { default as md5 } from "md5";
import logo from "../../assets/img/loginLogo.png";

class Login extends Component {
  constructor(prop) {
    super(prop);
    this.init_request = "";
    this.submitRequest = "";
    this.state = {
      username: "",
      password: "",
      login_loading: false,
      is_remeber: true
    };
  }

  componentDidMount() {
    this.init_request = fetchData("/auth/signin?type=mobile").subscribe();
    let password = window.localStorage.getItem('password')?window.atob(window.localStorage.getItem('password').toString()):'';
    this.setState({
      username:window.localStorage.getItem('username'),
      password:password
    });
  }
  componentWillUnmount = () => {
    this.init_request&&this.init_request.unsubscribe();
    this.submitRequest&&this.submitRequest.unsubscribe();
  };

  login() {
    let { username, password } = this.state;
    if(!username){
        Toast.info('用户名不能为空',1);
        return;
    }
    if(!password){
        Toast.info('密码不能为空',1);
        return;
    }
    this.setState({
      login_loading:true
    });
    this.submitRequest = submitData("/auth/signin?type=mobile", {
      username: username.toLowerCase(),
      password: qqtjm(md5(md5(md5(username.toLowerCase() + password)))),
    }).subscribe(
      res => {
        this.setState({
          login_loading:false
        })
        if (res.data.isSuccess === 1) {
          if(this.state.is_remeber){
            window.localStorage.setItem('username',this.state.username);
            window.localStorage.setItem('password',window.btoa(this.state.password));
          }else{
            window.localStorage.removeItem('username');
            window.localStorage.removeItem('password');
          }
          this.props.history.push("/home");
          return;
        }
        Toast.info(res.data.Msg,1);
      },
      error => {
        this.setState({
          login_loading:false
        })
        Toast.fail(error);
      }
    );
  }

  remeberPwd(e){
    this.setState({ is_remeber: e.target.checked });
  }

  render() {
    return (
      <div
        className="loginPage"
        style={{
          minHeight: document.documentElement.clientHeight,
          alignItems: "center",
          justifyContent: "center",
          direction: "row"
        }}
      >
        <div className="content">
          <img src={logo} alt="" className="logo" />
          <p className="title">登录/LOGIN</p>

          <div className="loginBox">
            <div className="loginInput">
              <span className="icon"></span>
              <InputItem 
                value={this.state.username}
                onChange={(val)=>{this.setState({
                  username:val
                })}}
                type="text" 
                placeholder={"用户名"} 
                clear={true} />
            </div>

            <div className="loginInput">
              <span className="icon"></span>
              <InputItem
                type="password"
                value={this.state.password}
                onChange={(value)=>{this.setState({
                    password:value
                })}}
                clear={true}
                placeholder={"登录密码"}
                clear={true}
              />
            </div>

            <div className="smallBtn">
              <div className="left">
                <Checkbox>记住密码</Checkbox>
              </div>

              <div className="right">联系在线客服</div>
            </div>
            <Button loading={this.state.login_loading} onClick={this.login.bind(this)} type="warning">登录</Button>
            {/* <div onClick={this.login.bind(this)} className="loginBtn">登录</div> */}
          </div>
        </div>

        <div className="downBtn">
          <span>下载原生手机客户端</span>
        </div>
      </div>
    );
  }
}

export default Login;
