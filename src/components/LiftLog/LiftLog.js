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
            },
            () => {
                console.log('Results fetched')
            });

    }


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
