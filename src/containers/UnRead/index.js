import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import chevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import * as actions from './action';
import './index.css';

class UnRead extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchUnreads, userInfo } = this.props;
    fetchUnreads({
      username: userInfo.username
    })
  }

  render() {
    const { unread, userInfo } = this.props;
    const {username} = userInfo
    return (
      <div className="unread">
        <div className="header">
            <AppBar
                title={<span>懂你</span>}
                style={{backgroundColor: '#3E50B4', height: '100%'}}
                iconElementLeft={<IconButton><chevronLeft /></IconButton>}
            />
        </div>
        <div className="unread-body">
          {
            unread && unread.map(item => {
              return (
                <div className="unread-item" key={item.name} onClick={() => browserHistory.push(`/chat/${username}/${item.name}`)}>
                  <div className="unread-item-avatar"></div>
                  <div className="unread-item-body">
                    <div className="unread-item-body-name">{item.name}</div>
                    <div className="unread-item-body-message">{item.message}</div>
                  </div>
                  <div style={{clear: 'both'}}></div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    unread: state.unread,
    userInfo: state.userInfo
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UnRead);
