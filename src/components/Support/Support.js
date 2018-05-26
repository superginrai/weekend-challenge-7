import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Support extends Component {
    constructor(props) {
        super(props);

        this.state = {
            support: '',
        };
    }

    handleSupportChange = event => {
        this.setState({
            support: event.target.value,
        });
    };

    sendReduxSupport = () => {
        const action = {
            type: 'ADD_TO_FEEDBACK',
            payload: this.state.support,
        };
        this.props.dispatch(action);
    };

    render() {
        return (

            <div >
                <h4><i>How za suppport?</i></h4>
                <div>
                    <label>
                        <input type="radio" value="1" checked={this.state.support === '1'} onChange={this.handleSupportChange} />
                        1
          </label>
                    <label>
                        <input type="radio" value="2" checked={this.state.support === '2'} onChange={this.handleSupportChange} />
                        2
          </label>
                    <label>
                        <input type="radio" value="3" checked={this.state.support === '3'} onChange={this.handleSupportChange} />
                        3
          </label>
                    <label>
                        <input type="radio" value="4" checked={this.state.support === '4'} onChange={this.handleSupportChange} />
                        4
          </label>
                    <label>
                        <input type="radio" value="5" checked={this.state.support === '5'} onChange={this.handleSupportChange} />
                        5
          </label>
                </div>
                <Link to="/comments" onClick={this.sendReduxSupport}>Next</Link>
            </div>

        );
    }
}

export default connect()(Support);