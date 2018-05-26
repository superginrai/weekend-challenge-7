import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class FeedbackItem extends Component {

    deleteFeedback = () => {
        console.log(this.props.feedback.id);
        if (window.confirm('Are you sure you want to delete thie feedback forever (forever...forever...)?')) {
            axios.delete(`/api/feedback/${this.props.feedback.id}`, this.props.feedback.id).then((response) => {
                this.props.getFeedbackFromServer();
            }).catch((error) => {
                alert('problemssssss');
            });
        } else {
            console.log('do NOT delete');
        }
    }

    render() {
        return (
            <tr key={this.props.feedback.id}>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><button onClick={this.deleteFeedback}>Delete</button></td>
            </tr>
        );
    }
}

export default connect()(FeedbackItem);