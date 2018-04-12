var playlist = {band: "song1"};
function updatePlaylist(playlist, artistName, songTitle){
  return playlist.assign({}, playlist, {[artistName]: songTitle})
}