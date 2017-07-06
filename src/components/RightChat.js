import React, { Component } from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import './chat.css';

class RightChat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { message } = this.props;
        return (
            <ListItem
                disabled={true}
                style={{marginBottom: '15px'}}
                >
                    <div className="bubble right-bubble">
                        <i className="right-arrow"></i>
                        <div className="talk">{message}</div></div>
            </ListItem>
        )
    }
}

export default RightChat;