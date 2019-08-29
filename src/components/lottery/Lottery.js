import React, {Component} from 'react';
import {Drawer, Icon, NavBar, SegmentedControl, Slider ,Modal ,Tabs, Badge} from "antd-mobile";
import {Link} from 'react-router-dom';
import SideGameList from "../common/sideGameList";
import './Lottery.scss'
import cqssc from "../../assets/img/cplogo/cqssc.png";
import Gameselection from "./Gameselection";
function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}



class Lottery extends Component {



    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
        };
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }


    state = {
        open: false,
    }


    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }


    onChange = (e) => {
        console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    }
    onValueChange = (value) => {
        console.log(value);
    }

    onChange = (key) => {
        console.log(key);
    }

    log = (name) => {
        return (value) => {
            console.log(`${name}: ${value}`);
        };
    }

    render() {

        const sidebar = (
            <SideGameList />
        );

        return (
            <div className='lotteryPage'>

                {/*导航侧边栏*/}

                <Drawer
                    className="navSideBar"
                    style={{
                        minHeight: document.documentElement.clientHeight,
                        width:document.documentElement.clientWidth
                    }}
                    enableDragHandle={false}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                    position={'right'}
                >


                    {/*头部*/}

                    <NavBar
                        mode="light"
                        leftContent={<Icon type="left"/>}
                        rightContent={[

                            <img src={cqssc} alt="" key="0" onClick={this.onOpenChange} className='cpLogo'/>
                        ]}
                    >

                        <SegmentedControl values={['投注', '走势', '开奖', '记录']} />

                    </NavBar>


                    <div className="contentBox">



                        {/*开奖区域*/}


                        <div className="openLottery">

                            <div className="time">
                                <p className='title'>距<span>1908241088</span>期截止</p>
                                <div className="lastTime">
                                    <span>00</span>:<span>01</span>:<span>28</span>
                                </div>
                            </div>


                            <div className="openWins">
                                <p className='title'>第<span>1908241088</span>期开奖</p>
                                <div className="openNub">

                                    {/*时时彩、5球、3球*/}

                                    <div className="ssc">

                                        <span>1</span>
                                        <span>6</span>
                                        <span>6</span>
                                        <span>0</span>
                                        <span>8</span>

                                    </div>

                                </div>
                            </div>

                        </div>




                        {/*玩法选择、添加按钮*/}

                        <div className="gameSelectionBox">

                            <div className="gameSelection">
                                <ul>
                                    <li>五星直选复式</li>
                                    <li className='active'>五星直选复式</li>
                                    <li>五星直选复式</li>
                                    <li>五星直选复式</li>
                                    <li>五星直选复式</li>
                                    <li>五星直选复式</li>
                                </ul>
                            </div>

                            <div className="addBtn">
                                <span onClick={this.showModal('modal2')}></span>
                            </div>

                        </div>



                        {/*玩法说明、奖金*/}
                        <div className="gameDescription">

                            <div className="left">

                                <span className='icon'> </span>
                                <span className='title'>玩法说明</span>

                            </div>

                            <div className="right">

                                <span className='title'>当前奖金:</span>
                                <span className='nub'>1920.00</span>
                                <span className='unit'>元</span>

                            </div>

                        </div>



                        <div className="contentSelectionBox">

                            {/*复式选择*/}

                            <div className="contentSelection">

                                <div className="titleBox">

                                    <div className="title">
                                        <span>万位</span>
                                    </div>

                                    <div className="btns">

                                        <span>全</span>
                                        <span>大</span>
                                        <span>小</span>
                                        <span>单</span>
                                        <span>双</span>
                                        <span>清</span>

                                    </div>

                                </div>

                                <div className="ball">

                                    <ul>
                                        <li><span>0</span></li>
                                        <li><span className='active'>1</span></li>
                                        <li><span>2</span></li>
                                        <li><span>3</span></li>
                                        <li><span>4</span></li>
                                        <li><span>5</span></li>
                                        <li><span>6</span></li>
                                        <li><span>7</span></li>
                                        <li><span>8</span></li>
                                        <li><span>9</span></li>
                                    </ul>

                                </div>

                            </div>

                            <div className="contentSelection">

                                <div className="titleBox">

                                    <div className="title">
                                        <span>万位</span>
                                    </div>

                                    <div className="btns">

                                        <span>全</span>
                                        <span>大</span>
                                        <span>小</span>
                                        <span>单</span>
                                        <span>双</span>
                                        <span>清</span>

                                    </div>

                                </div>

                                <div className="ball">

                                    <ul>
                                        <li><span>0</span></li>
                                        <li><span className='active'>1</span></li>
                                        <li><span>2</span></li>
                                        <li><span>3</span></li>
                                        <li><span>4</span></li>
                                        <li><span>5</span></li>
                                        <li><span>6</span></li>
                                        <li><span>7</span></li>
                                        <li><span>8</span></li>
                                        <li><span>9</span></li>
                                    </ul>

                                </div>

                            </div>

                            <div className="contentSelection">

                                <div className="titleBox">

                                    <div className="title">
                                        <span>万位</span>
                                    </div>

                                    <div className="btns">

                                        <span>全</span>
                                        <span>大</span>
                                        <span>小</span>
                                        <span>单</span>
                                        <span>双</span>
                                        <span>清</span>

                                    </div>

                                </div>

                                <div className="ball">

                                    <ul>
                                        <li><span>0</span></li>
                                        <li><span className='active'>1</span></li>
                                        <li><span>2</span></li>
                                        <li><span>3</span></li>
                                        <li><span>4</span></li>
                                        <li><span>5</span></li>
                                        <li><span>6</span></li>
                                        <li><span>7</span></li>
                                        <li><span>8</span></li>
                                        <li><span>9</span></li>
                                    </ul>

                                </div>

                            </div>

                            <div className="contentSelection">

                                <div className="titleBox">

                                    <div className="title">
                                        <span>万位</span>
                                    </div>

                                    <div className="btns">

                                        <span>全</span>
                                        <span>大</span>
                                        <span>小</span>
                                        <span>单</span>
                                        <span>双</span>
                                        <span>清</span>

                                    </div>

                                </div>

                                <div className="ball">

                                    <ul>
                                        <li><span>0</span></li>
                                        <li><span className='active'>1</span></li>
                                        <li><span>2</span></li>
                                        <li><span>3</span></li>
                                        <li><span>4</span></li>
                                        <li><span>5</span></li>
                                        <li><span>6</span></li>
                                        <li><span>7</span></li>
                                        <li><span>8</span></li>
                                        <li><span>9</span></li>
                                    </ul>

                                </div>

                            </div>


                            {/*单式选择*/}

                            <div className="contentSelection">

                                <div className="titleBox">

                                    <div className="title">
                                        <span>输入号码</span>
                                    </div>

                                    <div className="btnType2">

                                        <span className='btn'>粘贴</span>
                                        <span className='btn'>清空内容</span>

                                    </div>

                                </div>

                                <div className="position">

                                    <span>万位</span>
                                    <span className='active'>千位</span>
                                    <span>百位</span>
                                    <span>十位</span>
                                    <span>个位</span>

                                </div>

                                <div className="teatArea">

                                    <span>说明：每注号码需用间隔符分开（如：回车键 英文逗号 分号"|"），最大支持10万注。</span>

                                </div>



                            </div>


                        </div>


                        <div className="bonusBox">

                            <div className="bonus">

                                <div className="left">

                                    <span className='title'>倍投</span>

                                    <div className='Btns'>
                                        <span>-</span>
                                        <input type="text" min={10} placeholder={1}/>
                                        <span>+</span>
                                    </div>

                                </div>

                                <div className="right">

                                    <span>元</span>
                                    <span className='active'>角</span>
                                    <span>分</span>
                                    <span>厘</span>

                                </div>

                            </div>

                            <div className="sliderBox">

                                <span className='title'>奖金</span>

                                <div className="slider">
                                    <Slider
                                        style={{ marginLeft: 40, marginRight: 60 }}
                                        defaultValue={26}
                                        min={0}
                                        max={30}
                                        onChange={this.log('change')}
                                        onAfterChange={this.log('afterChange')}
                                    />
                                </div>

                                <span className='nub'>8.5%</span>

                            </div>

                        </div>


                        <div className="betFooter">

                            <div className="payment">

                                <div className="left">

                                    <span>已选:</span>
                                    <span className='nub'>20</span>
                                    <span>注,</span>
                                    <span className='nub'>1</span>
                                    <span>倍</span>

                                    <span className='btn'>清空选号</span>

                                </div>

                                <div className="right">
                                    <span>余额:</span>
                                    <span className='nub'>20.00</span>
                                    <span>元</span>
                                </div>

                            </div>


                            <div className="betBtns">

                                <div className="left">

                                    <div className="btn">

                                        <p className='icon'> </p>
                                        <p className='name'>添加</p>

                                    </div>

                                    <Link to='./carts' className='name'>
                                        <div className="btn">

                                            <span>2</span>
                                            <p className='icon'> </p>
                                            <p className='name'>购彩蓝</p>

                                        </div>
                                    </Link>

                                </div>

                                <div className="right">

                                    <div className="btn zhuihao">追号</div>
                                    <div className="btn fastBet">一键投注</div>

                                </div>

                            </div>
                        </div>

                    </div>

                </Drawer>


                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                    closable={true}
                >
                    <Gameselection/>
                </Modal>

            </div>
        );
    }
}

export default Lottery;