import React from 'react';
import { Link, IndexLink } from 'react-router';
import Footer from '../footer/index';

import './index.less';

class Header extends React.Component {
    login(){
        //this.props.history.pushState({passParam: true}, "/goodList");
        //this.context.router.push('/new-path',123)
        localStorage.uid = "zy";
    }
    register(){
        alert("注册成功！")
    }
    render() {
        //var data = 123456;
        //var a = "/goodList?id="+data;
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
                                    <IndexLink to="/" className="u-link" activeClassName="active">主页</IndexLink>
                                </li>
                                <li className="nav-item">
                                    <Link to="/goodList" className="u-link" activeClassName="active">笔记本</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="u-link">手机</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="u-link">智能设备</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="u-link">影音娱乐</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="u-link">游戏设备</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="u-link">平板电脑</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="u-link">活动</Link>
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
//
//Header.contextTypes = {
//    router: React.PropTypes.object.isRequired
//};

export default Header