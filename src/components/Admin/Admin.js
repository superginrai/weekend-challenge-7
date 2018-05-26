import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            </tr>
          </thead>
          <tbody>
            {this.props.reduxState.allFeedback.map((feedback) => <tr key={feedback.id}>
              <td>{feedback.feeling}</td>
              <td>{feedback.understanding}</td>
              <td>{feedback.support}</td>
              <td>{feedback.comments}</td>
            </tr>)}
          </tbody>
        </table>
        
            </div>

        );
    }
}

export default connect(mapReduxStateToProps)(Admin);