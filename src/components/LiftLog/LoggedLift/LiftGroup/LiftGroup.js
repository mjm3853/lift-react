import React, { Component } from 'react';
import Sets from './Sets/Sets';

class LiftGroup extends Component {
    render() {

        var setNodes = this.props.sets.map(function (set, index) {
            return (
                <Sets key={index} reps={set.reps} weight={set.weight} weightType={set.weightType} />
            )

        })

        return (
            <ul>
                <li>{this.props.name}</li>
                {setNodes}
            </ul>
        );
    }
}

export default LiftGroup;
