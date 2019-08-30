import React, {Component} from 'react';
import './Fund.scss';
import {Icon, NavBar, InputItem ,List, Picker } from "antd-mobile";


const colorStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '16px',
    height: '16px',
    marginRight: '10px',
};

const banks = [
    {
        label: (<span>中国工商银行</span>),
    },
    {
        label: (<span>中国工商银行</span>),
    },
    {
        label: (<span>中国银行</span>),
    },
];



class Charge extends Component {


    render() {


        return (
            <div className='chargePage'>

                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >充值</NavBar>

                <div className="contentBox">

                    <div className="listItem">

                        <List renderFooter={() => '单笔充值金额:100 - 10000元'}>

                            <Picker
                                data={banks}
                                cols={1}
                            >
                                <List.Item arrow="horizontal">选择银行</List.Item>
                            </Picker>

                            <InputItem
                                placeholder="请输入充值金额"
                                moneyKeyboardAlign="left"
                            >充值金额</InputItem>

                        </List>

                    </div>

                </div>

            </div>
        );
    }
}

export default Charge;