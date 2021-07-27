import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a Song</div>
  }
    return (
      <div>
        <h3>Details for:</h3>
        <p>
          Title: {song.title}
          <br />
          Duration: {song.duration}
          </p>
      </div>
    );
};

//if song does not exist or is a null value than return message telling user to select something

//function above will get props object which
// will contain currently selected song which will be referred to as props....
// instead take out only song property so you do not keep having to type props

const mapStateToProps = (state) => {
  return {song: state.selectedSong }
};

//this function is called with entire state project were
// going to reach in and pull out only the property that we care about
// and return as an object from
//
// create components select specific components that need to receive info or
//  make changes to state if thats the case we import connect helper than at
//  the bottom of the file we define mapstatetoprops and pass it as first argument
//   to connect and then put component that we care about as the second function next to the connect call

export default connect(mapStateToProps)(SongDetail);
