import React, { Component } from 'react';

class AddLift extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workoutName: '',
            liftName: '',
            reps: '',
            weight: ''
        }
    }

    handleWorkoutNameChange(e) {
        this.setState({ workoutName: e.target.value });
    }

    handleLiftNameChange(e) {
        this.setState({ liftName: e.target.value });
    }

    handleRepsChange(e) {
        this.setState({ reps: e.target.value });
    }

    handleWeightChange(e) {
        this.setState({ weight: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("The form doesn't work yet bozo")
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2>Add Lift</h2>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Workout Name"
                                value={this.state.workoutName}
                                onChange={this.handleWorkoutNameChange.bind(this)}
                                />
                        </div>
                        <div className="well well-sm">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Lift Name"
                                    value={this.state.liftName}
                                    onChange={this.handleLiftNameChange.bind(this)}
                                    />
                            </div>
                            <div className="well well-sm">
                                <div>
                                    <p>Sets</p>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Reps"
                                        value={this.state.reps}
                                        onChange={this.handleRepsChange.bind(this)}
                                        />
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Weight"
                                        value={this.state.weight}
                                        onChange={this.handleWeightChange.bind(this)}
                                        />
                                </div>
                            </div>
                        </div>
                        <div>
                            <input className="form-control btn btn-success" type="submit" value="Add Lift!" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddLift;
