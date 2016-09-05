import React, { Component } from 'react';
import LoggedLift from './LoggedLift';

class LiftLog extends Component {
    render() {

        var liftNodes = this.props.data.map(function (lift) {
            return (
                <LoggedLift name={lift.name} />
            )

        })

        return (
            <div>
                <p>Lift Log Component</p>
                {liftNodes}
            </div>
        );
    }
}

export default LiftLog;
