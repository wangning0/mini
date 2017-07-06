import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';

class Init extends Component {
    constructor(props) {
	console.log('init')
        super(props);
        this.state = {
            answer: '',
            question: ''
        }
    }

    handleClick() {
        const { answer, question } = this.state;
        const { submitBubble, userInfo } = this.props;
        console.log(userInfo, 12);
        // alert(navigator.geolocation.getCurrentPosition);
        submitBubble({
                service: "Act.insertBubbleInfo",
                bu_answer: answer,
                bu_question: question,
                longtitude: '64.60035',
                latitude: '39.77978',
                UserID: userInfo.UserID,
                token: userInfo.token
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
        return (
            <div className="init">
                <div className="question input-area">
                    <label className="label">问题</label>
                    <input type="text" placeholder="请输入问题" value={question} onChange={(e) => this.handleQusInput(e)} />
                </div>
                <div className="answer input-area">
                    <label className="label">回答</label>
                    <input type="text" placeholder="请输入回答" value={answer} onChange={(e) => this.handleAnsInput(e)} />
                </div>
                <div className="submit">
                    <button type="button" onClick={() => this.handleClick()}>提交</button>
                </div>
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
