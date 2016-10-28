'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Pagination  } from 'antd';

import * as actions from '../../actions/goodList';

import './index.less';

class GoodList extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let { dispatch, goods } = this.props;
        dispatch(actions.getGoods());
    }

    render(){
        let { goods } = this.props;
        const goodList = goods.goods;
        const uid = localStorage.uid;
        console.log(uid);
        //var data = this.props.location.query.id;
        //console.log(data);
        //let temp = this.props.location.state;
        //console.log(temp);

        return (
            <div className="p-goodList">
                <section className="g-content">
                    {
                        goodList.map((item, index) => {
                            return (
                                <div className="m-box" key={index}>
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
                            )
                        })
                    }
                    <div className="g-pagination">
                        <div className="m-pagination">
                            <Pagination defaultCurrent={1} total={28} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        goods:state.goods,
    }
})(GoodList);