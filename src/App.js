import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import * as actions from './action';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
injectTapEventPlugin();

const $ = window.$; // eslint-disable-line
class App extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { userInfo } = this.props;
    console.log(userInfo,11111);
    if(!userInfo.numofBubbles) {
      browserHistory.push('/init');
    } else {
      browserHistory.push('/graph');
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.props.children}
        </div>
        <div className="footer">
          <Tabs style={{backgroundColor: '#fafafa', height: '100%'}}>
            <Tab
              icon={<FontIcon className="material-icons">map</FontIcon>}
              label="附近"
              onActive={() => {browserHistory.push('/graph')}}
            />
            <Tab
              icon={<FontIcon className="material-icons">favorite</FontIcon>}
              label="懂你"
              onActive={() => {browserHistory.push('/unread')}}
            />
            <Tab
              icon={<FontIcon className="material-icons">group</FontIcon>}
              label="好友"
              onActive={() => {browserHistory.push('/friends')}}
            />
            <Tab
              icon={<FontIcon className="material-icons">person</FontIcon>}
              label="我"
              onActive={() => {browserHistory.push('/my')}}
            />
          </Tabs>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

