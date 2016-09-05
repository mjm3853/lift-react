import React, { Component } from 'react';

class Sets extends Component {
    render() {
        return (
            <ul>
                <li>{this.props.reps + " x " + this.props.weight + " " + this.props.weightType}</li>
            </ul>
        );
    }
}

export default Sets;
