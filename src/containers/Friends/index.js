import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { browserHistory } from 'react-router'
import chevronLeft from 'material-ui/svg-icons/navigation/chevron-left';

import './index.css';

class Friends extends Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        const { userInfo, fetchFriends }  = this.props;
        fetchFriends({
           FromID: userInfo.UserID,
           UserID: userInfo.UserID,
           service: 'Act.getFriendsInfo',
           token: userInfo.token
        });
    }

    render() {
        const { friends, userInfo } = this.props;
        const { username, cur_username } = userInfo;
        return (
            <div className="friends">
                <div className="header">
                    <AppBar
                        title={<span>好友列表</span>}
                        style={{backgroundColor: '#3E50B4', height: '100%'}}
                        iconElementLeft={<IconButton><chevronLeft /></IconButton>}
                    />
                </div>
                <div className="friends-body">
                    <List>
                        {
                            friends && friends.friendlist && friends.friendlist.map((item) => {
                                return (
                                    <ListItem
                                        primaryText={item.username}
                                        key={item.username}
                                        onClick={() => browserHistory.push(`/chat/${cur_username}/${item.username}/friend`)}
                                        insetChildren={true}
                                        rightAvatar={<Avatar />}
                                    />
                                )
                            })
                        }
                        </List>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        friends: state.friends
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
