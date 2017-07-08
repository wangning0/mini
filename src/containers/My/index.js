import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from './action';
import './index.css';

class My extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      const { userInfo, fetchUserInfo } = this.props;
      fetchUserInfo({
          service: 'Act.getPersonInfo',
          token: userInfo.token,
          UserID: userInfo.UserID
      });
  }
  render() {
    const {my} = this.props;
    return (
      <div className="my">
        <div className="personIntro">
          <div className="headPortrait">< img src=""/></div>
          <h3>Oscar Armer</h3>
        </div>
        <div className="myLabelCon">
          <div></div>
          <span className="myLabel">我的标签</span>
          <button>钮</button>
        </div>
        <div className="tagCon">
          <div className="first"><span>TreveoHnadnson</span><span>TreveoHnadnson</span></div>
          <div className="second"><span>TreveoHnadnsonTreveoHnadnson</span></div>
          <div className="third"><span>TreveoHnadnson</span><span>TreveoHnadnson</span></div>
          <div className="fourth"><span>TreveoHnadnsonTreveoHnadnson</span></div>
        </div>
        <button className="escButton">
          退出登录
        </button>
        </div>
    );
  }
}
function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        my: state.my
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(My);
