import React, {Component} from 'react';
import {List} from 'antd-mobile';
import {Link} from 'react-router-dom';
import './Member.scss';

import avatar from '../../assets/img/usericon.png';

const Item = List.Item;

class Member extends Component {

    state = {
        disabled: false,
    }


    render() {
        return (
            <div className='memberPage'>

                <div className='memberBg'>
                    <span className='bg1'></span>
                    <span className='bg2'></span>
                </div>

                <div className="userInfo">

                    <div className='user'>

                        <div className="left">
                            <img src={avatar} alt="" className='avatar'/>

                            <div className="info">
                                <div>
                                    <span className='name'>bb5521</span>
                                    <span className='type'>代理</span>
                                </div>
                                <div className='bonus'>奖金组:1950</div>
                            </div>
                        </div>

                    </div>

                    <div className="fundAbout">

                        <div className="fund">

                            <p className='title'>账户余额</p>
                            <p className='money'>80110.00<span>￥</span></p>

                            <Link>资金详情</Link>

                        </div>


                        <div className="btns">

                            <div>
                                <div className='icon'></div>
                                <span>充值</span>
                            </div>

                            <div>
                                <div className='icon'></div>
                                <span>提款</span>
                            </div>

                            <div>
                                <div className='icon'></div>
                                <span>转账</span>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="commonFunctions">

                    <div className="btns">

                        <div>
                            <div className='icon'></div>
                            <span>投注记录</span>
                        </div>

                        <div>
                            <div className='icon'></div>
                            <span>账变记录</span>
                        </div>

                        <div>
                            <div className='icon'></div>
                            <span>个人盈亏</span>
                        </div>

                    </div>

                </div>

                <div className="btnList">

                    <div className="box">

                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => {}}
                            arrow="horizontal"
                        >
                            账户设置
                        </Item>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >消息中心</Item>

                    </div>

                </div>


                <div className="btnList">

                    <div className="box">

                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >代理总览</Item>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => {}}
                            arrow="horizontal"
                        >
                            会员开户
                        </Item>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >团队管理</Item>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => {}}
                            arrow="horizontal"
                        >团队盈亏</Item>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => {}}
                            arrow="horizontal"
                        >分红管理</Item>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => {}}
                            arrow="horizontal"
                        >日工资</Item>
                    </div>

                </div>

                <div className="btnList">

                    <div className="box">

                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >退出登录</Item>

                    </div>
                </div>

            </div>
        );
    }
}

export default Member;