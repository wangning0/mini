import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import './chat.css';

class LeftChat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { message } = this.props;
        return (
            <ListItem
                disabled={true}
                leftAvatar={
                    <Avatar
                    size={30}
                    style={{backgroundColor: '#d1d3d4', marginBottom: '15px'}}
                    />
                }
                >
                    <div className="bubble left-bubble">
                        <i className="arrow"></i>
                        <div className="talk">{message}</div>
                    </div>
            </ListItem>
        )
    }
}

export default LeftChat;