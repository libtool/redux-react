import { combineReducers } from 'redux';
import traks from './traks';
import playlists from './playlists';
import filterTracks from './filterTracks';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  traks,
  playlists,
  filterTracks
})
