import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

//run function that calls this.props.select song pass in currently iterated song (button)
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}
            >
            Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  //when you click button you call action creator which
  //updated reducer which updated state in redux store anytime we
  // update redux store it causes all components hooked up to connect to rerender
  render() {

    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);

//connect looks at all functions wraps in another function,
//when called it automatically calls action creator automaticallys
//takes returned action and automatically calls dispatch function for us
