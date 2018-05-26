import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class FeedbackComplete extends Component {

    componentDidMount() {
        this.sendFeedbackToServer();
      }

      sendFeedbackToServer = () => {
          console.log(this.props.reduxState.feedback);
        axios.post('/api/feedback', this.props.reduxState.feedback).then((response) => {
            this.props.dispatch({ type: 'RESET' });
            console.log('ssuucess');
        }).catch((error) => {
            alert('problemssssss');
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Thank you for your feedback!!</h1>
                <Link to="/feels">Leave more feedback!</Link>
            </div>

        );
    }
}

export default connect(mapReduxStateToProps)(FeedbackComplete);