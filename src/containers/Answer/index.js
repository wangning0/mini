import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ''
        }
    }

    submit(e) {
        e.preventDefault();
        const { answer } = this.state;
        const { submitAnswer, userInfo, params } = this.props;
        submitAnswer({
            UserID: userInfo.UserID,
            BubbleID: params.bId,
            Useranswer: answer,
            service: 'Act.getMatchPercnt',
            token: userInfo.token
        })
    }


    handleAnsInput(e) {
        e.preventDefault();
        this.setState({
            answer: e.target.value
        })
    }
    
    componentDidMount() {
        const { params, fetchBubbleInfo, userInfo } = this.props;
        fetchBubbleInfo({
            service: 'Act.getBubbleInfobyBid',
            BubbleID: params.bId,
            token: userInfo.token,
            UserID: userInfo.UserID
        });
    }

    render() { 
        const { answer } = this.state;
        const { bubbleAnswer } = this.props;
        return (
            <div className="init">
                <div className="question input-area">
                    <label className="label">气泡问题</label>
                    <div className="content">
                        {bubbleAnswer && bubbleAnswer.data && bubbleAnswer.data.bu_question}
                    </div>
                </div>
                <div className="answer input-area">
                    <label className="label">你的回答</label>
                    <input type="text" placeholder="请输入你的回答" value={answer} onChange={(e) => this.handleAnsInput(e)} />
                </div>
                <div className="tips">
                    <label className="label">提示</label>
                    <div className="content">
                        {bubbleAnswer && bubbleAnswer.tips}
                    </div>
                </div>
                <div className="submit">
                    <button type="button" onClick={(e) => this.submit(e)}>提交</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bubbleAnswer: state.answer,
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
