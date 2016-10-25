'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/goodList';
import { Link } from 'react-router';

import './index.less';

class GoodList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return (
            <div className="p-goodList">
                <section className="g-content">
                    <div className="m-box">
                        <div className="m-img">
                            <img src="" />
                        </div>
                        <div className="m-introduce">
                            <h4 className="u-name">123</h4>
                            <div className="u-introduce">
                                啦啦阿拉
                            </div>
                            <div className="u-price">￥10000</div>
                        </div>
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
})(GoodList);