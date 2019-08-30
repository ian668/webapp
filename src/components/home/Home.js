import React, {Component} from 'react';
import {NavBar, Icon, Carousel, WingBlank,Tabs, Badge,Drawer, List } from "antd-mobile";
import {Link} from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';
import './Home.scss';

import SideGameList from '../common/sideGameList';

import logo from "../../assets/img/logo.png";
import banner1 from "../../assets/img/banner.jpg";
import txffc from "../../assets/img/cplogo/txffc.png";
import tx5fc from "../../assets/img/cplogo/tx5fc.png";
import cqssc from "../../assets/img/cplogo/cqssc.png";
import ahk3 from "../../assets/img/cplogo/ahk3.png";


const tabs = [
    { title: <Badge>全部彩种</Badge> },
    { title: <Badge text={'Hot'}>时时彩</Badge> },
    { title: <Badge>11选5</Badge> },
    { title: <Badge>PK10</Badge> },
    { title: <Badge>快3</Badge> },
    { title: <Badge>其他彩种</Badge> },
];


class Home extends Component {

    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        open: false,
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }



    render() {


        const sidebar = (
            <SideGameList />
        );


        return (
            <div className='homePage'>

                {/*导航侧边栏*/}

                <Drawer
                    className="navSideBar"
                    style={{ minHeight: document.documentElement.clientHeight,width:document.documentElement.clientWidth}}
                    enableDragHandle={false}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                    position={'right'}
                >

                    <NavBar
                        mode="light"
                        leftContent={<img src={logo} alt="" className='logo'/>}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={()=>{this.props.history.push('/member')}}/>,
                            <Icon key="1" type="ellipsis" onClick={this.onOpenChange}/>,
                        ]}
                    />


                 <div className="contentBox">

                    {/*首页banner*/}

                    <div className='banner'>

                        <WingBlank>
                            <Carousel
                                autoplay={false}
                                infinite
                                autoplay={true}
                                // cellSpacing={10}
                                // slideWidth={0.85}
                                autoplayInterval={6000}
                                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                // afterChange={index => console.log('slide to', index)}
                            >
                                <img src={banner1} alt=""/>
                            </Carousel>
                        </WingBlank>

                    </div>


                    {/*滚动公告*/}

                    <div className="rollingAnnounce">
                        <Icon type="search" className='announceIcon'/>
                        <div className="content">
                            <WingBlank>
                                <Carousel className="my-carousel"
                                          vertical
                                          dots={false}
                                          dragging={false}
                                          swiping={false}
                                          autoplay
                                          infinite
                                >
                                    <div className="v-item">平台扫码充值通知</div>
                                    <div className="v-item">奖金封顶及单挑限额</div>
                                    <div className="v-item">关于腾讯分分彩重复开奖处理通知</div>
                                </Carousel>
                            </WingBlank>
                        </div>
                    </div>


                    {/*账户信息*/}

                    <div className="userInfo">

                        <div className="content">

                            <div className='user'>
                                <span>下午好,</span>
                                <span>bb5521</span>

                                <span className='bankCard'>银行卡管理</span>
                            </div>

                            <div className="funds">

                                <div className="money">

                                    <p>888.00</p>
                                    <span>余额</span>

                                </div>

                                <div className="btns">

                                    <div>
                                        <Icon type="search" className='announceIcon'/>
                                        <span>充值</span>
                                    </div>
                                    <div>
                                        <Icon type="search" className='announceIcon'/>
                                        <span>提款</span>
                                    </div>
                                    <div>
                                        <Icon type="search" className='announceIcon'/>
                                        <span>转账</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/*我的收藏*/}

                    <div className="collection">

                        <div className="title">
                            <span>我的收藏</span>

                            <span className='right'>
                                <i className='icon' />
                                添加收藏
                            </span>
                        </div>

                        <div className='content'>

                            <ul>

                                <li className="game"><Link to='./lottery'><img src={txffc} alt=""/><p>腾讯时时彩</p></Link></li>

                                <li className="game"><img src={tx5fc} alt=""/><p>腾讯时时彩</p></li>

                                <li className="game"><img src={cqssc} alt=""/><p>腾讯时时彩</p></li>

                                <li className="game"><img src={ahk3} alt=""/><p>腾讯时时彩</p></li>

                                <li className="game"><img src={cqssc} alt=""/><p>腾讯时时彩</p></li>

                                <li className="game"><img src={tx5fc} alt=""/><p>腾讯时时彩</p></li>

                                <li className="game"><img src={txffc} alt=""/><p>腾讯时时彩</p></li>

                            </ul>

                        </div>

                    </div>


                    {/*精选推荐*/}

                    <div className="recommend">

                        <div className="title">
                            <span>精选推荐</span>

                            <span className='right'>多彩人生 · 一触即发</span>
                        </div>

                        <div className='content'>

                            <ul>


                                <li className="game">
                                    <img src={txffc} alt=""/>
                                    <p className='name'>腾讯时时彩</p>
                                    <p className='time'>00:00:28</p>
                                </li>

                                <li className="game">
                                    <img src={txffc} alt=""/>
                                    <p className='name'>腾讯时时彩</p>
                                    <p className='time'>00:00:28</p>
                                </li>

                                <li className="game">
                                    <img src={txffc} alt=""/>
                                    <p className='name'>腾讯时时彩</p>
                                    <p className='time'>00:00:28</p>
                                </li>

                                <li className="game">
                                    <img src={txffc} alt=""/>
                                    <p className='name'>腾讯时时彩</p>
                                    <p className='time'>00:00:28</p>
                                </li>

                                <li className="game">
                                    <img src={txffc} alt=""/>
                                    <p className='name'>腾讯时时彩</p>
                                    <p className='time'>00:00:28</p>
                                </li>

                            </ul>

                        </div>

                    </div>


                    {/*游戏列表*/}

                    <div className='gameList'>
                        <Tabs tabs={tabs}
                              initialPage={0}
                              onChange={(tab, index) => { console.log('onChange', index, tab); }}
                              onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                            <ul className="box">
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                            </ul>

                            <ul className="box">
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                            </ul>

                            <ul className="box">
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                            </ul>

                            <ul className="box">
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                            </ul>

                            <ul className="box">
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                            </ul>

                            <ul className="box">
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                                <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                            </ul>
                        </Tabs>
                    </div>
                 </div>



                </Drawer>

            </div>
        );
    }
}

export default Home;