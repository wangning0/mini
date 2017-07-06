import React, {Component} from 'react/';

//import {greatPlaceStyle} from './my_great_place_styles.js';
import './bubble.css';

export default class MyGreatPlace extends Component {

  static defaultProps = {};


  constructor(props) {
    super(props);
  }

  render() {
    console.log('aa');
    return (
      <div className="bubble-map" onClick={this.props.onClick}>
        <div className="bubble left-bubble">
          <i className="arrow"></i>
          <div className="talk">{this.props.text}</div>
      </div>
      <div className="bubble-map-dot"></div>
      </div>
      //  <div style={greatPlaceStyle}>
      //     {this.props.text}
      //  </div>
    );
  }
}