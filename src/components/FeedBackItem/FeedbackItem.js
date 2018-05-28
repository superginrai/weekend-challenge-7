import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    deleteIcon: {
      marginLeft: theme.spacing.unit,
    },
  });


class FeedbackItem extends Component {

    deleteFeedback = () => {
        console.log(this.props.feedback.id);
        if (window.confirm('Are you sure you want to delete this feedback forever (forever...forever...)?')) {
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
        const { classes } = this.props
        return (
            <tr key={this.props.feedback.id}>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><Button className={classes.button} onClick={this.deleteFeedback} variant="raised" color="secondary">
                    Delete
        <Delete className={classes.deleteIcon} />
                </Button></td>
            </tr>
        );
    }
}
FeedbackItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles) (FeedbackItem);