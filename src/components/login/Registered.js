import React, {Component} from 'react';
import {InputItem ,Checkbox} from "antd-mobile";
import './Login.scss';

import logo from '../../assets/img/loginLogo.png';
import yzm from '../../assets/img/captcha.jpg';

class Registered extends Component {
    render() {
        return (
            <div
                className='loginPage'
                style={{
                    minHeight:document.documentElement.clientHeight,
                    alignItems: 'center',
                    justifyContent: 'center',
                    direction:'row'
                }}
            >

                <div className="content">

                    <img src={logo} alt="" className='logo'/>
                    <p className='title'>登录/LOGIN</p>

                    <div className="loginBox">

                        <div className="loginInput">
                            <span className='icon'></span>
                            <InputItem
                                type="text"
                                placeholder={'用户名'}
                                clear={true}
                            />
                        </div>

                        <div className="loginInput">
                            <span className='icon'></span>
                            <InputItem
                                type="text"
                                defaultValue={'a123456'}
                                editable={false}
                            />
                            <span className='password'>默认密码：a123456</span>
                        </div>

                        <div className="loginInput">
                            <span className='icon'></span>
                            <InputItem
                                type="text"
                                placeholder={'验证码'}
                            />
                            <img src={yzm} alt=""/>
                        </div>


                        <div className="smallBtn">

                            <div className="left">

                                <Checkbox>记住密码</Checkbox>

                            </div>

                            <div className="right">联系在线客服</div>

                        </div>

                        <div className="loginBtn">登录</div>


                    </div>

                </div>


                <div className="downBtn">
                    <span>下载原生手机客户端</span>
                </div>

            </div>
        );
    }
}

export default Registered;