import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class FeedbackComplete extends Component {
// constructor(props){
//     super(props);
// }

    componentDidMount() {
        this.sendFeedbackToServer();
      }

      sendFeedbackToServer = () => {
          console.log(this.props.reduxState.feedback);
        axios.post('/api/feedback', this.props.reduxState.feedback).then((response) => {
            console.log('ssuucess');
        }).catch((error) => {
            alert('problemssssss');
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Thank you for your feedback!!</h1>
            </div>

        );
    }
}

export default connect(mapReduxStateToProps)(FeedbackComplete);