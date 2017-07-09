import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
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
    const style = {
            margin: '5px'
        };
    const tags = ['娱乐', '动漫', '财经', '汽车', '体育', '视频', '科技', '情感', '搞笑', '美食'];
    return (
      <div className="my">
        <div className="personIntro">
          <div className="headPortrait">< img src=""/></div>
          <h3>{(my.data && my.data.nickname) ? my.data.nickname : '气泡君'}</h3>
        </div>
        <div className="myLabelCon">
          <div></div>
          <span className="myLabel">我的标签</span>
          <button style={{outline:'none', border: 'none'}} onClick={() => browserHistory.push('/settag/edit')}>编辑标签</button>
        </div>
        <div className="tagCon">
          {
            my && my.data.tags && my.data.tags.map((item, index) => {
              <RaisedButton label={tags[item]} key={index} primary={true} style={style} />
            })
          }
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
