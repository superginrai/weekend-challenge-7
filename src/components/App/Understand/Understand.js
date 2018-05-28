import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Forward from '@material-ui/icons/Forward';

class Understand extends Component {
    constructor(props) {
        super(props);

        this.state = {
            know: '',
        };
    }

    handleKnowChange = event => {
        this.setState({
            know: event.target.value,
        });
        console.log(this.state.know);
    };

    sendReduxKnow = () => {
        const action = {
            type: 'ADD_TO_FEEDBACK',
            payload: this.state.know,
        };
        this.props.dispatch(action);
        this.props.history.push('/support');
    };

    render() {
        return (

            <div >
                <h4><i>How well do you understand today's content?</i></h4>
                <div>
                    <label>
                        <input type="radio" value="1" checked={this.state.know === '1'} onChange={this.handleKnowChange} />
                        1
          </label>
                    <label>
                        <input type="radio" value="2" checked={this.state.know === '2'} onChange={this.handleKnowChange} />
                        2
          </label>
                    <label>
                        <input type="radio" value="3" checked={this.state.know === '3'} onChange={this.handleKnowChange} />
                        3
          </label>
                    <label>
                        <input type="radio" value="4" checked={this.state.know === '4'} onChange={this.handleKnowChange} />
                        4
          </label>
                    <label>
                        <input type="radio" value="5" checked={this.state.know === '5'} onChange={this.handleKnowChange} />
                        5
          </label>
                </div>
                <br />
                <Button onClick={this.sendReduxKnow} variant="raised" color="primary">Next<Forward /></Button>
            </div>

        );
    }
}

export default connect()(Understand);