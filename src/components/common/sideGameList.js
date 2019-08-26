import React, {Component} from 'react';
import txffc from "../../assets/img/cplogo/txffc.png";
import './Common.scss'

class SideGameList extends Component {
    render() {
        return (
            <div className='sideGameList'>

                <ul className="box">
                    <p className='title'>时时彩系列</p>
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
                    <p className='title'>11选5系列</p>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                </ul>

                <ul className="box">
                    <p className='title'>赛车PK10系列</p>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                </ul>

                <ul className="box">
                    <p className='title'>快3系列</p>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                </ul>

                <ul className="box">
                    <p className='title'>其他彩种</p>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                    <li><img src={txffc} alt=""/><p>腾讯时时彩</p></li>
                </ul>

            </div>
        );
    }
}

export default SideGameList;