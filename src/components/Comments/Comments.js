import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
                <h4><i>U leave commmeentz???</i></h4>
                <form>
                    <input onChange={this.handleCommentsChange} value={this.state.comment} name="comment" placeholder="Comments" />
                </form>
                <Link to="/feedbackComplete" onClick={this.sendReduxComments}>Submit Feedback</Link>
            </div>

        );
    }
}

export default connect()(Comments);