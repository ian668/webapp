import React, {Component} from 'react';
import {Button, Icon, InputItem, List, NavBar} from "antd-mobile";

class Transfer extends Component {
    render() {
        return (
            <div className='withdraw from'>

                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >转账</NavBar>

                <div className="contentBox">

                    <div className="listItem">

                        <List renderFooter={'提现最低100元，最高49999元'}>

                            <InputItem
                                placeholder="请输入下级收款账号"
                                moneyKeyboardAlign="left"
                            >下级账号</InputItem>

                            <InputItem
                                moneyKeyboardAlign="left"
                                defaultValue={'1000.00元'}
                                editable={false}
                            >账户余额</InputItem>

                            <InputItem
                                placeholder="请输入转账金额"
                                moneyKeyboardAlign="left"
                            >转账金额</InputItem>

                        </List>

                        <List>

                            <InputItem
                                placeholder="请输入资金密码"
                                moneyKeyboardAlign="left"
                                type={'password'}
                            >资金密码</InputItem>

                        </List>

                    </div>

                    <div className="bottonBtn">

                        <Button type="primary">确定</Button>

                    </div>

                </div>

            </div>
        );
    }
}

export default Transfer;