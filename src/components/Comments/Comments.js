import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField, Input }from '@material-ui/core';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: '',
        };
    }

    handleCommentsChange = event => {
        this.setState({
            comment: event.target.value,
        });
        console.log(this.state.comment);
    };

    sendReduxComments = () => {
        const action = {
            type: 'ADD_TO_FEEDBACK',
            payload: this.state.comment,
        };
        this.props.dispatch(action);

    };

    render() {
        return (
            <div >
                <h4><i>Leave a comment?</i></h4>
                <form>
                    <TextField onChange={this.handleCommentsChange}>
                        <Input value={this.state.comment} multiline="true" name="comment" placeholder="Comments" />
                    </TextField>
                </form>
                <br />
                <Link to="/feedbackComplete" onClick={this.sendReduxComments}>Submit Feedback</Link>
            </div>

        );
    }
}

export default connect()(Comments);