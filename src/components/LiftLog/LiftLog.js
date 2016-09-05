import React, { Component } from 'react';
import LoggedLift from './LoggedLift'

class LiftLog extends Component {
    render() {
        return (
            <div>
                <p>Lift Log Component</p>
                <ul>
                    <li>
                        <LoggedLift name="First Lift" />
                    </li>
                    <li>
                        <LoggedLift name="Second Lift" />
                    </li>
                </ul>
            </div>
        );
    }
}

export default LiftLog;
