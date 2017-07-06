import React, { Component } from 'react';

class ChatItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, message } = this.props;
        return (
            <div>
                {name}: {message}
                <div>---------------</div>
            </div>
        )
    }
}

export default ChatItem;