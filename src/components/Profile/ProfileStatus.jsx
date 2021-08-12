import React from "react";

export class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode () {
        debugger
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
          status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div><span onDoubleClick={this.activateEditMode.bind(this)}> status: { this.props.status || "type your status"}</span></div>

                }
                {
                    this.state.editMode && <div> status: <input
                        onChange={this.onStatusChange.bind(this)}
                        value={this.state.status}
                        onBlur={this.deactivateEditMode.bind(this)}
                        autoFocus={true}
                    /></div>
                }
            </div>
        )
    }
}