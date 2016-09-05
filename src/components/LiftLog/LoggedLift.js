import React, { Component } from 'react';

class LoggedLift extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default LoggedLift;
