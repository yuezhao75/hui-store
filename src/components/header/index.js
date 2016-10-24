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
            <div>
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