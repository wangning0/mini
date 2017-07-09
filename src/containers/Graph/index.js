import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './myGreatPlace';
import FontIcon from 'material-ui/FontIcon';
import group from './group.png'
import * as actions from './action';
import './index.css';

class Graph extends Component {
  
  constructor(props) {
    super(props);
    this.handleBubbleClick = this.handleBubbleClick.bind(this);
    this.state = {
      search: ''
    }
  }

  static defaultProps = {
    center: [22.5404030613,113.9345065627],
    zoom: 15
  };

  createMapOptions(maps) {
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_CENTER,
        style: maps.ZoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        // position: maps.ControlPosition.TOP_RIGHT
      },
      //mapTypeControl: true
    };
  }

  componentDidMount() {
    const { fetchBubbleInfo, userInfo } = this.props;
    // const geolocation = new window.qq.maps.Geolocation();
    // geolocation.getLocation(function(position) {
    //     fetchBubbleInfo({
    //       UserID: userInfo.UserID,
    //       service: 'Act.getAroundInfo',
    //       distance: '20000000',
    //       longtitude: position.lng,
    //       latitude: position.lat,
    //       token: userInfo.token
    //   })
    // })
    fetchBubbleInfo({
          UserID: userInfo.UserID,
          service: 'Act.getAroundInfo',
          distance: '20000000',
          longtitude: ',113.9345065627',
          latitude: '22.5404030613',
          token: userInfo.token
      })
  }

  handleBubbleClick(id, username, cur_username) {
    browserHistory.push(`answer/${id}/${username}/${cur_username}`);
  }

  handleInput(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    const { graph } = this.props;
    const { search } = this.state;
    return (
      <div className="index">
        <div className="search">
            <div className="content">
              <FontIcon className="material-icons">search</FontIcon>
              <input type="text" placeholder="搜索附近标签" value={search} onChange={(e)=>{this.handleInput(e)}}/>
              <FontIcon className="material-icons">settings_voice</FontIcon>
            </div>
        </div>
        <div className="graph">
            <GoogleMap
            bootstrapURLKeys={{key: "AIzaSyD1PD6JXA2zjSp2DcBSb_eldF44ojp7keM"}}
            center={this.props.center}
            zoom={this.props.zoom}
            options={this.createMapOptions}>
            {
                graph && graph.data && graph.data.map((item) => {
                  return (
                    <MyGreatPlace key={item.BubbleID} lat={item.latitude} lng={item.longtitude} text={item.bu_question} onClick={() => this.handleBubbleClick(item.BubbleID, item.username, graph.cur_username)} /* Kreyser Avrora */ />
                  )
                })
              }
          </GoogleMap>
        </div>
        <div className="publish-bubble" onClick={() => browserHistory.push('/init')}>
          <img src={group} alt=""/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      userInfo: state.userInfo,
      graph: state.graph
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
