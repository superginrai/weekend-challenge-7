import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Feels extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feel: '',
        };
    }

    handleFeelChange = event => {
        this.setState({
            feel: event.target.value,
        });
        console.log(this.state.feel);
    };

    sendReduxFeels = () => {
        const action = {
            type: 'ADD_TO_FEEDBACK',
            payload: this.state.feel,
        };
        this.props.dispatch(action);
    };

    render() {
        return (

            <div >
                <h4><i>How the feels???</i></h4>
                <div>
                    <label>
                        <input type="radio" value="1" checked={this.state.feel === '1'} onChange={this.handleFeelChange} />
                        1
          </label>
                    <label>
                        <input type="radio" value="2" checked={this.state.feel === '2'} onChange={this.handleFeelChange} />
                        2
          </label>
                    <label>
                        <input type="radio" value="3" checked={this.state.feel === '3'} onChange={this.handleFeelChange} />
                        3
          </label>
                    <label>
                        <input type="radio" value="4" checked={this.state.feel === '4'} onChange={this.handleFeelChange} />
                        4
          </label>
                    <label>
                        <input type="radio" value="5" checked={this.state.feel === '5'} onChange={this.handleFeelChange} />
                        5
          </label>
                </div>
                <Link to="/understand" onClick={this.sendReduxFeels}>Next</Link>
            </div>

        );
    }
}

export default connect()(Feels);