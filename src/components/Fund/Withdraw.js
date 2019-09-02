import React, {Component} from 'react';
import {Button, Icon, InputItem, List, NavBar, Picker} from "antd-mobile";



const banks = [
    {
        label: (<span>中国工商银行  621226****5554</span>),
    },
    {
        label: (<span>中国工商银行  621226****5554</span>),
    },
    {
        label: (<span>中国银行  621226****5554</span>),
    },
];



class Withdraw extends Component {
    render() {
        return (
            <div className='withdraw from'>

                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >提款</NavBar>

                <div className="contentBox">

                    <div className="listItem">

                        <List renderFooter={'提现最低100元，最高49999元，剩余提款次数：3次'}>

                            <Picker
                                data={banks}
                                cols={1}
                            >
                                <List.Item arrow="horizontal">选择银行</List.Item>
                            </Picker>

                            <InputItem
                                moneyKeyboardAlign="left"
                                defaultValue={'1000.00元'}
                                editable={false}
                            >账户余额</InputItem>

                            <InputItem
                                placeholder="请输入提款金额"
                                moneyKeyboardAlign="left"
                            >提款金额</InputItem>

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

export default Withdraw;