import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { browserHistory } from 'react-router';
import * as actions from './actions';
import './index.css';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choose1: false,
            choose2: false,
            choose3: false,
            choose4: false,
            choose5: false,
            choose6: false,
            choose7: false,
            choose8: false,
            choose9: false,
            choose10: false,
        }
    }
    changeChoose(id) {
        if(this.state[`choose${id}`]) {
            this.setState({
                [`choose${id}`]: false
            })
        } else {
            this.setState({
                [`choose${id}`]: true
            })
        }
    }
    handleClick() {
        const {submitTag, userInfo} = this.props;
        const chooseTags = [];
        Object.keys(this.state).map((item, index) => {
            if(this.state[item]) {
                chooseTags.push(index);
            }
        })
        submitTag({
            service: 'Act.insertTags',
            UserID: userInfo.UserID,
            token: userInfo.token,
            tagIDs: chooseTags
        })
        // browserHistory.push('/graph');
        // submitTag
    }
    render() {
        const style = {
            margin: '5px'
        };
        const {choose1,choose2,choose3,choose4,choose5,choose6,choose7,choose8,choose9,choose10} = this.state;
        return (
            <div className="set-tag">
                <h4>选择你自己的个性标签吧～</h4>
                <div className="tags">
                    <RaisedButton label="娱乐" primary={true} style={style} onClick={() => this.changeChoose(1)} icon={choose1 ? <FontIcon className="material-icons" >done</FontIcon> : <FontIcon className="material-icons" style={{opacity: 0}} >done</FontIcon> }/>
                    <RaisedButton label="动漫" primary={true} style={style} onClick={() => this.changeChoose(2)} icon={choose2 ? <FontIcon className="material-icons" >done</FontIcon> : <FontIcon className="material-icons" style={{opacity: 0}} >done</FontIcon> }/>
                    <RaisedButton label="财经" primary={true} style={style} onClick={() => this.changeChoose(3)} icon={choose3 ? <FontIcon className="material-icons" >done</FontIcon> : <FontIcon className="material-icons" style={{opacity: 0}} >done</FontIcon> }/>
                    <RaisedButton label="汽车" primary={true} style={style} onClick={() => this.changeChoose(4)} icon={choose4 ? <FontIcon className="material-icons" >done</FontIcon> : <FontIcon className="material-icons" style={{opacity: 0}} >done</FontIcon> }/>
                    <RaisedButton label="体育" primary={true} style={style} onClick={() => this.changeChoose(5)} icon={choose5 ? <FontIcon className="material-icons" >done</FontIcon> : <FontIcon className="material-icons" style={{opacity: 0}} >done</FontIcon> }/>
                    <RaisedButton label="视频" primary={true} style={style} onClick={() => this.changeChoose(6)} icon={choose6 ? <FontIcon className="material-icons" >done</FontIcon> : <FontIcon className="material-icons" style={{opacity: 0}} >done</FontIcon> }/>
                    <RaisedButton label="科技" primary={true} style={style} onClick={() => this.changeChoose(7)} icon={choose7 ? <FontIcon className="material-icons" >done</FontIcon> : <FontIcon className="material-icons" style={{opacity: 0}} >done</FontIcon> }/>
                    <RaisedButton label="体育" primary={true} style={style} onClick={() => this.changeChoose(8)} icon={choose8 ? <FontIcon className="material-icons" >done</FontIcon> : <FontIcon className="material-icons" style={{opacity: 0}} >done</FontIcon> }/>
                    <RaisedButton label="搞笑" primary={true} style={style} onClick={() => this.changeChoose(9)} icon={choose9 ? <FontIcon className="material-icons" >done</FontIcon> : <FontIcon className="material-icons" style={{opacity: 0}} >done</FontIcon> }/>
                    <RaisedButton label="美食" primary={true} style={style} onClick={() => this.changeChoose(10)} icon={choose10 ? <FontIcon className="material-icons" >done</FontIcon> : <FontIcon className="material-icons" style={{opacity: 0}} >done</FontIcon> }/>
                </div>
                <RaisedButton
                        label="提交" 
                        primary={true}
                        style={{marginTop: '50px', width: '300px'}}
                        onClick={() => this.handleClick()}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
