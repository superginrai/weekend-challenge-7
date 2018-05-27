import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class FeedbackStart extends Component {
    render() {
        return (
            <div className="App">
                <Link to="/feels">Leave Feedback</Link>
            </div>
        );
    }
}

export default connect()(FeedbackStart);
