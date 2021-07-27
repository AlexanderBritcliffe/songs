//action creator
export const selectSong = song => {
  //return and action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

//if we pass a song object it will return an action with a type of song selected
//and payload of song this action should then end up in reducer reducer will
//look at action type if equal to song selected will return that particular
// song if it is action with different type will return currently selected song  
