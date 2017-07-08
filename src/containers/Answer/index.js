import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from './actions';
import './index.css';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            open: false
        }
    }
    handleClose() {
        this.setState({open: false});
    };
    submit(e) {
        e.preventDefault();
        const { answer } = this.state;
        if(!answer) {
            this.setState({
                open: true
            })
            return;
        }
        const { submitAnswer, userInfo, params } = this.props;
        console.log(params);
        submitAnswer({
            UserID: userInfo.UserID,
            BubbleID: params.bId,
            Useranswer: answer,
            service: 'Act.getMatchPercnt',
            token: userInfo.token
        }, {
            from: userInfo.username,
            to: params.username,
        })
    }


    handleAnsInput(e) {
        e.preventDefault();
        this.setState({
            answer: e.target.value
        })
    }
    
    componentDidMount() {
        const { params, fetchOneBubbleInfo, userInfo } = this.props;
        fetchOneBubbleInfo({
            service: 'Act.getBubbleInfobyBid',
            BubbleID: params.bId,
            token: userInfo.token,
            UserID: userInfo.UserID
        });
    }

    render() { 
        const { answer } = this.state;
        const { bubbleAnswer } = this.props;
        console.log(bubbleAnswer && bubbleAnswer.data && bubbleAnswer.data.bu_question);
        const actions = [
        <FlatButton
            label="继续"
            primary={true}
            keyboardFocused={true}
            onTouchTap={() => this.handleClose()}
        />,
        ];
        return (
            <div className="answer">
                <div className="input-area">
                    <TextField
                    value={bubbleAnswer && bubbleAnswer.data && bubbleAnswer.data.bu_question}
                    floatingLabelText="泡泡内容"
                    disabled={true}
                    /><br />
                    <TextField
                    hintText=""
                    floatingLabelText="请输入泡泡答案～"
                    value={answer}
                    onChange={(e) => this.handleAnsInput(e)}
                    />
                    <div className="tips">
                        <label className="label">提示:</label>
                        <div className="content">
                            {bubbleAnswer && bubbleAnswer.tips}
                        </div>
                    </div>
                    <RaisedButton
                        label="回答" 
                        primary={true}
                        style={{marginTop: '50px', width: '256px'}}
                        onClick={(e) => this.submit(e)}
                    />
                </div>
                <Dialog
                title="提示"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={() => this.handleClose()}
                >
                你还没有输入答案哦～
                </Dialog>
                {/*<div className="question input-area">
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
                </div>*/}
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
