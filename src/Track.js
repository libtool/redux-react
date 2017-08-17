import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Track extends Component {
  render() {
console.log('tsts', this.props.track)
console.log('own', this.props.ownProps)

    return (
      <div>
        <Link to="/">Tracks</Link>
        <Link to="/about">About</Link>
        <div>{this.props.track.name}</div>
      </div>
    )
  }
}

export default connect (
  (state, ownProps) => ({
    track: state.traks.find(track => track.id === Number(ownProps.params.id)),
    ownProps
  }),
  dispatch  => ({})
)(Track);
