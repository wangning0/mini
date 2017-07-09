import React, { Component } from 'react';
import io from 'socket.io-client';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import { browserHistory } from 'react-router'
import LeftChat from '../../components/LeftChat';
import RightChat from '../../components/RightChat';
import * as actions from './actions';
import './index.css';
let socket;

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatInput: ''
        }
        this.sendMessage = this.sendMessage.bind(this);
    }
    componentWillMount() {
       const { params } = this.props;
       socket = io(`http://119.29.194.62:9001?from=${params.userId}&to=${params.id}`)
    }
    componentDidMount() {
        const { chat } = this.props;
        const { userInfo, getChatMessage, clearMessage, params } = this.props;
        socket.on('connect', function () {
            // socket.emit('join', userInfo.username);
//            alert(params.userId, 'hello');
            socket.emit('join', params.userId);
        });
        socket.on('new message', data => {
            // getChatMessage(data, userInfo.username);
            getChatMessage(data, params.userId);
        })
        socket.on('disconnect', () => {
            clearMessage()
        })
    }

    componentWillUnmount() {
        const { clearMessage } = this.props;
        socket.disconnect();
        clearMessage();
    }

    handleChatInput(e) {
        this.setState({
            chatInput: e.target.value
        })
    }

    addFriendClick() {
        const { params, addFriend, userInfo } = this.props;
        const fromId = params.userId;
        const toId = params.id;
        
        addFriend({
            service: 'Act.addFriendsByUsername',
            FromID: userInfo.UserID, 
            ToUsername: toId,
            UserID: userInfo.UserID,
            token: userInfo.token
        })
    }

    sendMessage() {
        const { chatInput } = this.state;
        const { userInfo, addChatMessage, params, clearMessage } = this.props;
        if(chatInput == '') {
            return;
        }
        this.setState({
            chatInput: ''
        })
        const data = {
            name: params.userId,
            message: chatInput
        }
        socket.emit('new message', data);
        addChatMessage(data);
    }
    
    render() {
        const { params, chat, userInfo } = this.props;
        const { chatInput } = this.state;
        return (
            <div className="chat">
                <div className="header">
                    <AppBar
                        title={<span>懂你</span>}
                        style={{backgroundColor: '#3E50B4'}}
                        iconElementLeft={<IconButton><ArrowBack /></IconButton>}
                        iconElementRight={<FontIcon className="material-icons" style={{fontSize: '34px', color: '#ffffff', lineHeight: '48px', margin: '0px'}}>person</FontIcon>}
                        onRightIconButtonTouchTap={() => {alert('个人页面')}}
                        onLeftIconButtonTouchTap={() => {browserHistory.push('/graph')}}
                    />
                </div>
                <div className="nav">
                    <div className="shield">
                        <FlatButton
                            label="屏蔽此人"
                            secondary={true}
                            style={{color: '#9E9E9E'}}
                            icon={<FontIcon className="material-icons" style={{color: '#9E9E9E'}}>remove_circle</FontIcon>}
                            />
                    </div>
                    <div className="add-friends">
                        <FlatButton
                            label="添加好友"
                            secondary={true}
                            style={{color: '#9E9E9E'}}
                            onClick={() => this.addFriendClick()}
                            icon={<FontIcon className="material-icons" style={{color: '#9E9E9E'}}>add</FontIcon>}
                            />
                    </div>
                </div>
                <div className="chat-conatiners" ref="test">
                    <List>
                        {
                            chat && chat.map((item, index) => {
                                // if(item.name == userInfo.username) {
                                if(item.name == params.userId) {
                                    return <RightChat message={item.message} />
                                } else {
                                    return <LeftChat message={item.message} />
                                }
                               
                            })
                        }
                    </List>
                </div>
                <div className="input-area">
                    <input type="text" className="input" onChange={(e) => this.handleChatInput(e)} value={chatInput} placeholder="点击编辑信息"/>
                    <FlatButton
                        secondary={true}
                        style={{color: '#9E9E9E', minWidth: '10%'}}
                        icon={<FontIcon className="material-icons" style={{color: '#9E9E9E'}}>tag_faces</FontIcon>}
                        />
                    <FlatButton
                        secondary={true}
                        style={{color: '#9E9E9E', minWidth: '10%'}}
                        onClick={() => this.sendMessage()}
                        icon={<FontIcon className="material-icons" style={{color: '#9E9E9E'}}>send</FontIcon>}
                        />
                    
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        chat: state.chat
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
