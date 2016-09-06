import React, { Component } from 'react';

class AddLift extends Component {

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
                            <input className="form-control" type="text" placeholder="Workout Name" />
                        </div>
                        <div className="well well-sm">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Lift Name" />
                            </div>
                            <div className="well well-sm">
                                <div>
                                    <p>Sets</p>
                                    <input className="form-control" type="text" placeholder="Reps" />
                                    <input className="form-control" type="text" placeholder="Weight" />
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
