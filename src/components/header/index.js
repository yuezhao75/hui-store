import React from 'react';
import { Link } from 'react-router';
import Footer from '../footer/index';

import './index.less';

class Header extends React.Component {
    login(){
        alert("登录成功！")
    }
    register(){
        alert("注册成功！")
    }
    render() {
        return (
            <div className="g-header">
                <header className="g-hd">
                    <div className="m-nav">
                        <div className="g-row">
                            <div className="m-left">
                                <img className="u-logo" src="../../../img/logo.png" />
                            </div>
                            <div className="m-right">
                                <div className="f-login" onClick={this.login.bind(this)}>登录</div>
                                <div className="u-split"></div>
                                <div className="f-register" onClick={this.register.bind(this)}>注册</div>
                            </div>
                        </div>
                    </div>
                    <div className="m-funTab">
                        <div className="g-row">
                            <a className="tab-logo" href="/" title="惠抢购"></a>
                            <div className="m-inner">
                                <div className="m-search">
                                    <input className="u-input" type="text" placeholder="搜索你喜欢的商品"/>
                                    <div className="u-button">搜索</div>
                                </div>
                            </div>
                            <ul className="tab-nav">
                                <li className="nav-item">
                                    <Link className="u-link active" to="/home">主页</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/goodList">笔记本</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home">手机</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home">智能设备</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home">影音娱乐</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home">游戏设备</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home">平板电脑</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home">活动</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className="g-content">
                    {this.props.children}
                </div>
                <Footer></Footer>
            </div>

        )

    }
}

export default Header