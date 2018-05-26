import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FeedbackItem from '../FeedBackItem/FeedbackItem';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class Admin extends Component {

    componentDidMount() {
        this.getFeedbackFromServer();
    }

    getFeedbackFromServer = () => {
        axios.get('/api/feedback').then((response) => {
            const action = { type: 'LIST_FEEDBACK', payload: response.data };
            this.props.dispatch(action);
            console.log('ssuucess');
        }).catch((error) => {
            alert('problemssssss');
        });
    }

    render() {
        return (
            <div className="App">
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.allFeedback.map((feedback) => <FeedbackItem key={feedback.id} feedback={feedback} getFeedbackFromServer={this.getFeedbackFromServer}/>)}
                    </tbody>
                </table>

            </div>

        );
    }
}

export default connect(mapReduxStateToProps)(Admin);