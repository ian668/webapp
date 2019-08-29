import React, {Component} from 'react';
import {Icon, NavBar, Checkbox, Tabs, Badge, List} from "antd-mobile";



const tabs = [
    { title: <Badge>同倍追号</Badge> },
    { title: <Badge>翻倍追号</Badge> },
];

class Trace extends Component {
    render() {
        return (
            <div className='tracePage'>

                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={<span>生成追号</span> }
                >追号</NavBar>

                <div className="contentBox">

                    <div className="time">
                        <p>距第<span>20190825025</span>期,开奖剩余时间:<span className='lastTime'>00:12</span></p>
                    </div>

                    <Tabs tabs={tabs}
                          initialPage={0}
                          tabBarTextStyle={{fontSize:13}}
                          onChange={(tab, index) => { console.log('onChange', index, tab); }}
                          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div className='content'>
                            <div className="setBox">
                                <div className='set'>
                                    <div>起始<input type="text" placeholder={'1'}/>倍</div>
                                    <div>连追<input type="text" placeholder={'10'}/>期</div>
                                </div>
                            </div>

                            <List.Item>
                                <div className='listContent'>
                                    <Checkbox defaultChecked={true}></Checkbox>
                                    <div>期号<span>20190802123</span>期<span className='nub'>1</span></div>
                                    <div>截止时间:<span>2019-08-22 12:12:36</span></div>
                                    <div>倍数:<input type="text" placeholder={'1'}/>倍，金额:<span className='money'>8.00</span>元</div>
                                </div>
                            </List.Item>

                            <List.Item>
                                <div className='listContent'>
                                    <Checkbox defaultChecked={true}></Checkbox>
                                    <div>期号<span>20190802123</span>期<span className='nub'>2</span></div>
                                    <div>截止时间:<span>2019-08-22 12:12:36</span></div>
                                    <div>倍数:<input type="text" placeholder={'1'}/>倍，金额:<span className='money'>8.00</span>元</div>
                                </div>
                            </List.Item>

                            <List.Item>
                                <div className='listContent'>
                                    <Checkbox></Checkbox>
                                    <div>期号<span>20190802123</span>期<span className='nub'>3</span></div>
                                    <div>截止时间:<span>2019-08-22 12:12:36</span></div>
                                    <div>倍数:<input type="text" placeholder={'1'}/>倍，金额:<span className='money'>8.00</span>元</div>
                                </div>
                            </List.Item>

                            <List.Item>
                                <div className='listContent'>
                                    <Checkbox></Checkbox>
                                    <div>期号<span>20190802123</span>期<span className='nub'>4</span></div>
                                    <div>截止时间:<span>2019-08-22 12:12:36</span></div>
                                    <div>倍数:<input type="text" placeholder={'1'}/>倍，金额:<span className='money'>8.00</span>元</div>
                                </div>
                            </List.Item>

                            <List.Item>
                                <div className='listContent'>
                                    <Checkbox></Checkbox>
                                    <div>期号<span>20190802123</span>期<span className='nub'>5</span></div>
                                    <div>截止时间:<span>2019-08-22 12:12:36</span></div>
                                    <div>倍数:<input type="text" placeholder={'1'}/>倍，金额:<span className='money'>8.00</span>元</div>
                                </div>
                            </List.Item>
                        </div>

                        <div className='content'>
                            <div className="setBox">
                                <div className='set'>
                                    <div>起始<input type="text" placeholder={'1'}/>倍</div>
                                    <div>连追<input type="text" placeholder={'10'}/>期</div>
                                </div>
                                <div className='set'>
                                    <div>每隔<input type="text" placeholder={'1'}/>期</div>
                                    <div>倍数 <span className='active'>x</span><span>+</span><input type="text" placeholder={'2'}/></div>
                                </div>
                            </div>
                        </div>
                    </Tabs>

                </div>


                <div className="betFooter">

                    <div className="payment">

                        <div className="left">

                            <span>共</span>
                            <span className='nub'>10</span>
                            <span>期,</span>
                            <span className='nub'>80.00</span>
                            <span>元</span>

                            <Checkbox>中奖停追</Checkbox>

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

export default Trace;