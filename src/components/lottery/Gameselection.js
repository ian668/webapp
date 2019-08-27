import React, {Component} from 'react';



class Gameselection extends Component {
    render() {
        return (
            <div className='gameSelectionPage'>

                <div
                    className="gameSelectionBox"

                >
                    <p className='boxTitle'>玩法选择</p>

                    <div
                        className="left"
                        style={{height: document.documentElement.clientHeight - 176,}}
                    >

                        <ul>

                            <li>五星直选</li>
                            <li className='active'>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>
                            <li>五星直选</li>

                        </ul>

                    </div>

                    <div
                        className="right"
                        style={{
                            height: document.documentElement.clientHeight - 176,
                            width:document.documentElement.clientWidth -100,
                        }}
                    >

                        <div className="gameType">

                            <p className='title'>五星直选</p>
                            <ul>
                                <li>复式</li>
                                <li>单式</li>
                            </ul>

                        </div>

                        <div className="gameType">

                            <p className='title'>五星直选</p>
                            <ul>
                                <li>复式</li>
                                <li>单式</li>
                            </ul>

                        </div>

                        <div className="gameType">

                            <p className='title'>五星直选</p>
                            <ul>
                                <li>复式</li>
                                <li className='active'>单式</li>
                                <li>复式</li>
                                <li>单式</li>
                                <li>复式</li>
                                <li>单式</li>
                                <li>复式</li>
                                <li>单式</li>
                                <li>复式</li>
                                <li>单式</li>
                                <li>复式</li>
                                <li>单式</li>
                            </ul>

                        </div>

                        <div className="gameType">

                            <p className='title'>五星直选</p>
                            <ul>
                                <li>复式</li>
                                <li>单式</li>
                            </ul>

                        </div>

                        <div className="gameType">

                            <p className='title'>五星直选</p>
                            <ul>
                                <li>复式</li>
                                <li>单式</li>
                            </ul>

                        </div>

                        <div className="gameType">

                            <p className='title'>五星直选</p>
                            <ul>
                                <li>复式</li>
                                <li>单式</li>
                                <li>复式</li>
                                <li>单式</li>
                                <li>复式</li>
                                <li>单式</li>
                                <li>复式</li>
                                <li>单式</li>
                                <li>复式</li>
                                <li>单式</li>
                                <li>复式</li>
                                <li>单式</li>
                            </ul>

                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default Gameselection;