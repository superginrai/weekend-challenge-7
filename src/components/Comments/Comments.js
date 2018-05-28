import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField, Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Forward from '@material-ui/icons/Forward';

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
        this.props.history.push('/feedbackComplete');
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
                <Button onClick={this.sendReduxComments} variant="raised" color="primary">Next<Forward /></Button>
            </div>

        );
    }
}

export default connect()(Comments);