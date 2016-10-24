import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/home';
import { Link } from 'react-router';

import Slider from '../../components/slider/slider';

import './index.less';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        var { dispatch, home} = this.props;
        dispatch(actions.getHomeMessage());
    }
    handleClick(){
        var { dispatch } = this.props;
        dispatch(actions.getHomeName());
    }

    render() {
        var { dispatch, home } = this.props;
        const IMAGE_DATA = [
            {
                src: require('../../../img/bg1.jpg'),
                alt: 'images-1',
                url: 'http://www.baidu.com'
            },
            {
                src: require('../../../img/bg2.jpg'),
                alt: 'images-2',
                url: 'http://www.baidu.com'
            },
            {
                src: require('../../../img/bg3.jpg'),
                alt: 'images-3',
                url: 'http://www.baidu.com'
            },
        ];
        return (
            <div className="g-home">
                <Slider
                    items={IMAGE_DATA}
                    speed={1.2}
                    delay={2.1}
                    pause={true}
                    autoplay={true}
                    dots={true}
                    arrows={true}
                />
                <div className="g-title">
                    <div className="m-title">
                        推荐产品
                        <span className="u-en">Recommended products</span>
                    </div>
                </div>
                <section className="g-goods">
                    <div className="m-box">
                        <div className="m-img">
                            <img src="http://yanxuan.nosdn.127.net/d51656c7ab2401fb44383db47200d17a.jpg?imageView&quality=95&thumbnail=265x265" />
                        </div>
                        <div className="m-introduce">
                            <h4 className="u-name">联想笔记本</h4>
                            <div className="u-introduce">
                                反正一大堆配置反正一大堆配置反正一大堆配置反正一大堆配置反正一大堆配置
                            </div>
                        </div>
                    </div>
                    <div className="m-box">
                        <div className="m-img">
                            <img src="http://yanxuan.nosdn.127.net/d51656c7ab2401fb44383db47200d17a.jpg?imageView&quality=95&thumbnail=265x265" />
                        </div>
                        <div className="m-introduce">
                            <h4 className="u-name">联想笔记本</h4>
                            <div className="u-introduce">
                                反正一大堆配置反正一大堆配置反正一大堆配置反正一大堆配置反正一大堆配置
                            </div>
                        </div>
                    </div>
                    <div className="m-box">
                        <div className="m-img">
                            <img src="http://yanxuan.nosdn.127.net/d51656c7ab2401fb44383db47200d17a.jpg?imageView&quality=95&thumbnail=265x265" />
                        </div>
                        <div className="m-introduce">
                            <h4 className="u-name">联想笔记本</h4>
                            <div className="u-introduce">
                                反正一大堆配置反正一大堆配置反正一大堆配置反正一大堆配置反正一大堆配置
                            </div>
                        </div>
                    </div>
                    <div className="m-box">
                        <div className="m-img">
                            <img src="http://yanxuan.nosdn.127.net/d51656c7ab2401fb44383db47200d17a.jpg?imageView&quality=95&thumbnail=265x265" />
                        </div>
                        <div className="m-introduce">
                            <h4 className="u-name">联想笔记本</h4>
                            <div className="u-introduce">
                                反正一大堆配置反正一大堆配置反正一大堆配置反正一大堆配置反正一大堆配置
                            </div>
                        </div>
                    </div>
                </section>

                <div className="g-title">
                    <div className="m-title">
                        推荐品牌
                        <span className="u-en">Recommended brand</span>
                    </div>
                </div>
                <section className="g-logo">
                    <div className="m-logo">
                        <img src="../../../img/iphone.jpg"/>
                        <div className="u-logo-name">苹果</div>
                    </div>
                    <div className="m-logo">
                        <img src="../../../img/dell.jpg"/>
                        <div className="u-logo-name">DELL</div>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        home:state.home,
    }
})(Home);