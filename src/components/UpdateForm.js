import React, { Component } from 'react'
// import { Form, Button } from 'react-bootstrap'
export class UpdateForm extends Component {
    render() {
        return (
            <>
                <form onSubmit={this.props.updateFlower}>
                    <input defaultValue={this.props.instructions} name="input" type="text" onChange={this.props.instructionsState} />
                    <input type="submit" value="updateData" />
                </form>
            </>
        )
    }
}

export default UpdateForm;
