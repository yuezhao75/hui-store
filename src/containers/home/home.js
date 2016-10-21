import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/home';
import { Link } from 'react-router';
import './home.less';

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
        return (
            <div>
                <p className="u-p" onClick={this.handleClick.bind(this)}>
                    {home.img}
                </p>
                <p>
                    {home.name}
                </p>
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        home:state.home,
    }
})(Home);