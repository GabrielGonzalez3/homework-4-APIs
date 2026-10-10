// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 


// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "31hrPUMBg96szrqNAb3oqP");
localStorage.setItem("access_token", "BQC5lWNZMPyK2Eb3zmXn8rivCxwooVQp1dBgrf2I_r-M9cKgpCF-VRltealxyKN7DRuiOFy59b9w-zqA6xxLL2ZmSp5OgR4xIjIMAoQI7CfHtF4CRZC6W7mc6icE7PU-qrAYvPakT0Ce");
localStorage.setItem("track_id_1", "7F2MAlw2cPrXbmOdpiQ2Cj");
localStorage.setItem("track_id_2", "");
localStorage.setItem("track_id_3", "");


async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    
    const response = await fetch( 
      `https://api.spotify.com/v1/artists/${artistID}`, 
      { 
        headers: { 
        Authorization: `Bearer ${accessToken}` 
        } 
      } 
    ); 
    const artist = await response.json(); 
    console.log(document.getElementById("artist-name"));
    const picture = document.querySelector(".artist-image img");
    console.log(picture);

    const title = document.getElementById("artist-name");
    picture.src = artist.images[0].url;

    title.textContent = artist.name;
  
     const answer = await fetch( 
      `https://api.spotify.com/v1/tracks/${trackID1}`, 
      { 
        headers: { 
        Authorization: `Bearer ${accessToken}` 
        } 
      } 
    ); 
    const track1 = await answer.json(); 

    const list_tracks = document.querySelectorAll(".track");

    list_tracks[0].querySelector("img").src = track1.album.images[0].url;
    list_tracks[0].querySelector(".track-title").textContent =track1.name;
    list_tracks[0].querySelector(".track-album").textContent = track1.album.name;
    list_tracks[0].querySelector(".track-number").textContent = track1.track_number;
    list_tracks[0].querySelector(".track-duration").textContent = convertMsToMinSec(track1.duration_ms);

}
load();


   