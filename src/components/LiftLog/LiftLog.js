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
                <div className="col-md-8">
                    <h2>Lift Log</h2>
                    {liftNodes}
                </div>
        );
    }
}

export default LiftLog;
