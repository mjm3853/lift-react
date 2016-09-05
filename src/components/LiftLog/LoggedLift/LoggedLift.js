import React, { Component } from 'react';
import LiftGroup from './LiftGroup/LiftGroup';

class LoggedLift extends Component {
    
    render() {
        
        var liftGroupNodes = this.props.lifts.map(function (lift, index) {
            return (
                <LiftGroup key={index} name={lift.name} sets={lift.sets} />
            )

        })
        
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.timestamp.toString()}</p>
                {liftGroupNodes}
                <hr/>
            </div>
        );
    }
}

export default LoggedLift;
