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
        dispatch(actions.getHome());
    }
    handleClick(){
        var { dispatch } = this.props;
        dispatch(actions.getHomeName());
    }

    render() {
        var { dispatch, home } = this.props;
        const IMAGE_DATA = home.bg;
        const logos = home.logo;
        const goods = home.goods;

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
                    {
                        goods.map((item, index) => {
                            return <div className="m-box" key={index}>
                                    <div className="m-img">
                                        <img src={item.url} />
                                    </div>
                                    <div className="m-introduce">
                                        <h4 className="u-name">{item.name}</h4>
                                        <div className="u-introduce">
                                            {item.introduce}
                                        </div>
                                        <div className="u-price">￥{item.price}</div>
                                    </div>
                                </div>
                        })
                    }
                </section>

                <div className="g-title">
                    <div className="m-title">
                        推荐品牌
                        <span className="u-en">Recommended brand</span>
                    </div>
                </div>
                <section className="g-logo">
                    {
                        logos.map((item, index ) => {
                            return <div className="m-logo" key={index}>
                                        <img src={item.url}/>
                                        <div className="u-logo-name" >{item.name}</div>
                                    </div>
                        })
                    }

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