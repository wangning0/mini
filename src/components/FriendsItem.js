import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class FriendsItem extends Component {
    constructor(props) {
        super(props);
    }

    intoChat() {
        const { id, userId } = this.props;
        browserHistory.push(`/chat/${userId}/${id}`)
    }

    render() {
        const { name } = this.props;
        return (
            <div onClick={() => {this.intoChat()}}>
                好友名称: {name}
            </div>
        )
    }
}

export default FriendsItem;