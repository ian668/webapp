import React, {Component} from 'react';
import {Icon, NavBar, Button ,List ,SwipeAction} from "antd-mobile";

class Carts extends Component {
    render() {
        return (
            <div className='cartsPage'>

                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >购彩蓝</NavBar>


                <div className="contentBox">

                    <div className="time">
                        <p>距第<span>20190825025</span>期,开奖剩余时间:<span className='lastTime'>00:12</span></p>
                    </div>

                    <div className="btns">
                        <Button type="primary" onClick={()=>{this.props.history.push('/lottery')}} inline size="small" style={{ marginRight: '4px' }}>继续选号</Button>
                        <Button type="primary" onClick={()=>{this.props.history.push('/trace')}} inline size="small" style={{ marginRight: '4px' }}>快速追号</Button>
                    </div>

                    <div className="cartContents">

                        <SwipeAction
                            autoClose
                            right={[
                                {
                                    text: '删除',
                                    onPress: () => console.log('delete'),
                                    style: { backgroundColor: '#F4333C', color: 'white' },
                                },
                            ]}
                            onOpen={() => console.log('global open')}
                            onClose={() => console.log('global close')}
                        >
                            <List.Item>

                                <div className="left">
                                    <span>五星-复式</span>
                                </div>

                                <div className="right">

                                    <div className='Btns'>
                                        <span>-</span>
                                        <input type="text" min={10} placeholder={1}/>
                                        <span>+</span>
                                    </div>
                                    <span className='unit'>倍</span>

                                </div>

                            </List.Item>

                            <List.Item>

                                <div className="left">
                                    <span>1960 / 元模式</span>
                                </div>

                                <div className="right">
                                    <span className='nub'>160</span>
                                    <span>注/支付金额:</span>
                                    <span className='nub'>160</span>
                                    <span>元</span>
                                </div>

                            </List.Item>

                            <List.Item>

                                <div className="left">
                                    <span>-,-,13579,13579,13579</span>
                                </div>

                            </List.Item>

                        </SwipeAction>

                        <SwipeAction
                            autoClose
                            right={[
                                {
                                    text: '删除',
                                    onPress: () => console.log('delete'),
                                    style: { backgroundColor: '#F4333C', color: 'white' },
                                },
                            ]}
                            onOpen={() => console.log('global open')}
                            onClose={() => console.log('global close')}
                        >
                            <List.Item>

                                <div className="left">
                                    <span>五星-复式</span>
                                </div>

                                <div className="right">

                                    <div className='Btns'>
                                        <span>-</span>
                                        <input type="text" min={10} placeholder={1}/>
                                        <span>+</span>
                                    </div>
                                    <span className='unit'>倍</span>

                                </div>

                            </List.Item>

                            <List.Item>

                                <div className="left">
                                    <span>1960 / 元模式</span>
                                </div>

                                <div className="right">
                                    <span className='nub'>160</span>
                                    <span>注/支付金额:</span>
                                    <span className='nub'>160</span>
                                    <span>元</span>
                                </div>

                            </List.Item>

                            <List.Item>

                                <div className="left">
                                    <span>-,-,13579,13579,13579</span>
                                </div>

                            </List.Item>

                        </SwipeAction>

                    </div>

                </div>

                <div className="betFooter">

                    <div className="payment">

                        <div className="left">

                            <span>总注数:</span>
                            <span className='nub'>20</span>
                            <span>注</span>

                            <span className='btn'>清空选号</span>

                        </div>

                        <div className="right">
                            <span>余额:</span>
                            <span className='nub'>20.00</span>
                            <span>元</span>
                        </div>

                    </div>


                    <div className="betBtns">

                        <div className="right">

                            <div className="btn fastBet">确定投注</div>

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Carts;