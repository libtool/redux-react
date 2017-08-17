import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetTracks } from './actions/tracks';
import Menu from './Menu';
import { Link } from 'react-router';

class App extends Component {

  addTrack() {
    console.log('addTrack', this.trackInput.value)
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }
findTrack() {
  console.log('Find', this.searchInput.value);
  this.props.onFindTrack(this.searchInput.value);
}

  render() {
    console.log(this.props.testStore);
    console.log('ownProps', this.props.ownProps)



    return (
      <div>
        <Menu />
        <input type="text" ref={(input) => { this.trackInput = input; }} />
        <button onClick={this.addTrack.bind(this)}>Add track</button>
        <ul>
          {this.props.testStore.map((track, index) =>
            <li key={index}>
              <Link to={`track/${track.id}`}>{track.name}</Link>
            </li>
          )}
        </ul>
        <div>
          <input type="text" ref={(input) => { this.searchInput = input }} />
          <button onClick={this.findTrack.bind(this)}>Find track</button>
        </div>
        <div>
          <button onClick={this.props.onGetTracks}>Get tracks</button>
        </div>
      </div>
    );
  }
}

export default connect (
  (state, ownProps) => ({
    testStore: state.traks.filter(track => track.name.includes(state.filterTracks)),
    ownProps
  }),
  dispatch  => ({
    onAddTrack: (trackName) => {
      const payload = {
        id: Date.now().toString(),
        name: trackName
      }
     dispatch({ type: 'ADD_TRACK', payload: payload })
   },
   onFindTrack: (name) => {
     dispatch({type: 'FIND_TRACK', payload: name})
   },
   onGetTracks: () => {

     dispatch(GetTracks());
   }

  })
)(App);
