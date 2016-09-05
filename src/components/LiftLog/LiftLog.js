import React, { Component } from 'react';
import LoggedLift from './LoggedLift';

class LiftLog extends Component {

    constructor(props) {
        super(props);
        this.horizon = props.horizon;
        this.state = {
            workouts: []
        }
    }

    componentDidMount() {
        this.horizon('workouts')
            .watch()
            .subscribe(
            (result) => {
                this.setState({ workouts: result })
            },
            (error) => {
                console.error(error)
            }
            );
    }

    render() {

        var liftNodes = this.state.workouts.map(function (workout) {
            return (
                <LoggedLift key={workout.id} name={workout.name} />
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
