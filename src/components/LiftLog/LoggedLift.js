import React, { Component } from 'react';
import './LoggedLift.css';

class LoggedLift extends Component {
    render() {
        return (
            <div>
                <p className="workout">{this.props.name}</p>
            </div>
        );
    }
}

export default LoggedLift;
