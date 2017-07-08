import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from './action';
import bubble from './bubble.png';
import './index.css';

class Init extends Component {
    constructor(props) {
	console.log('init')
        super(props);
        this.state = {
            answer: '',
            question: '',
            open: false
        }
    }

    handleClose() {
        this.setState({open: false});
    };
    handleClick() {
        const { answer, question } = this.state;
        const { submitBubble, userInfo } = this.props;
        console.log(userInfo, 12);
        if(!answer || !question) {
            this.setState({
                open: true
            })
            return;
        }
        // window.locationChanged()
        // alert(navigator.geolocation.getCurrentPosition);
        submitBubble({
            service: "Act.insertBubbleInfo",
            bu_answer: answer,
            bu_question: question,
            longtitude: '113.9345065627',
            latitude: '22.5404030613',
            UserID: userInfo.UserID,
            token: userInfo.token
        }, {
            numofBubbles: userInfo && userInfo.numofBubbles
        })
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     alert(11);
        //     const latitude = position.coords.latitude;
        //     const longitude = position.coords.longitude;
        //     alert(latitude);
        //     submitBubble({
        //         service: "Act.insertBubbleInfo",
        //         bu_answer: answer,
        //         bu_question: question,
        //         longtitude: longitude,
        //         latitude: latitude,
        //         UserID: userInfo.UserID,
        //         token: userInfo.token
        //     })
        // });
    }

    handleQusInput(e) {
        e.preventDefault();
        this.setState({
            question: e.target.value
        })
    }

    handleAnsInput(e) {
        e.preventDefault();
        this.setState({
            answer: e.target.value
        })
    }
    
    render() {
        const { answer, question } = this.state;
        const actions = [
        <FlatButton
            label="继续"
            primary={true}
            keyboardFocused={true}
            onTouchTap={() => this.handleClose()}
        />,
        ];
        return (
            <div className="init">
                <img src={bubble} alt="" className="bubble-image"/>
                <div className="input-area">
                    <TextField
                    hintText=""
                    floatingLabelText="请输入泡泡问题～"
                    onChange={(e) => this.handleQusInput(e)}
                    value={question}
                    /><br />
                    <TextField
                    hintText=""
                    floatingLabelText="请输入泡泡答案～"
                    onChange={(e) => this.handleAnsInput(e)}
                    value={answer}
                    /><br />
                    <RaisedButton
                        label="发布" 
                        primary={true}
                        style={{marginTop: '50px', width: '256px'}}
                        onClick={() => this.handleClick()}
                    />
                </div>
                <Dialog
                title="提示"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={() => this.handleClose()}
                >
                你还没有创造一个完整的泡泡哦～
                </Dialog>
                {/*<div className="question input-area">
                    <label className="label">问题</label>
                    <input type="text" placeholder="请输入问题" value={question} onChange={(e) => this.handleQusInput(e)} />
                </div>
                <div className="answer input-area">
                    <label className="label">回答</label>
                    <input type="text" placeholder="请输入回答" value={answer} onChange={(e) => this.handleAnsInput(e)} />
                </div>
                <div className="submit">
                    <button type="button" onClick={() => this.handleClick()}>提交</button>
                </div>*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Init);
