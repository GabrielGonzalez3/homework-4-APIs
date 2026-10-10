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
localStorage.setItem("access_token", "BQDpvrKNUqRFnuLD4d_hIPPA2gbjDYAIjWVzSavws2RziRwrqLt3Uocwh9CZuJV1GiffkQsEYNpUAZ-OpzeRW9QxJU76aYLC8UkXz4O1ODxUKka3jUsAx1_tciY7gzLOk0bUYRhTf7BB");
localStorage.setItem("track_id_1", "7F2MAlw2cPrXbmOdpiQ2Cj");
localStorage.setItem("track_id_2", "6QzA31bV1KdfzIB6IFKT2p");
localStorage.setItem("track_id_3", "0pXzwrn00Wrl2Hnri4kQJK");

// Added by me, look the first album was made from track1, but can't use the other tracks because they're all from the same album so yeah need different ones
localStorage.setItem("album_id2", "6IcDff8UAlkRq60DVFZezR");
localStorage.setItem("album_id3", "7CyFmxO1n8VyOjgdTW1LO8");
localStorage.setItem("album_id4", "6VQ69r1XITtS2APRucccta");


async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    // Also added by me
    let albumID2 = localStorage.getItem("album_id_2");
    let albumID3 = localStorage.getItem("album_id_3");
    let albumID4 = localStorage.getItem("album_id_4");
    
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
  
     const answer1 = await fetch( 
      `https://api.spotify.com/v1/tracks/${trackID1}`, 
      { 
        headers: { 
        Authorization: `Bearer ${accessToken}` 
        } 
      } 
    ); 
    const track1 = await answer1.json(); 

    const list_tracks = document.querySelectorAll(".track");

    list_tracks[0].querySelector("img").src = track1.album.images[0].url;
    list_tracks[0].querySelector(".track-title").textContent =track1.name;
    list_tracks[0].querySelector(".track-album").textContent = track1.album.name;
    list_tracks[0].querySelector(".track-number").textContent = track1.track_number;
    list_tracks[0].querySelector(".track-duration").textContent = convertMsToMinSec(track1.duration_ms);

    const answer2 = await fetch( 
      `https://api.spotify.com/v1/tracks/${trackID2}`, 
      { 
        headers: { 
        Authorization: `Bearer ${accessToken}` 
        } 
      } 
    ); 
    const track2 = await answer2.json(); 

    list_tracks[1].querySelector("img").src = track2.album.images[0].url;
    list_tracks[1].querySelector(".track-title").textContent =track2.name;
    list_tracks[1].querySelector(".track-album").textContent = track2.album.name;
    list_tracks[1].querySelector(".track-number").textContent = track2.track_number;
    list_tracks[1].querySelector(".track-duration").textContent = convertMsToMinSec(track2.duration_ms);

    const answer3 = await fetch( 
      `https://api.spotify.com/v1/tracks/${trackID3}`, 
      { 
        headers: { 
        Authorization: `Bearer ${accessToken}` 
        } 
      } 
    ); 
    const track3 = await answer3.json(); 

    list_tracks[2].querySelector("img").src = track3.album.images[0].url;
    list_tracks[2].querySelector(".track-title").textContent =track3.name;
    list_tracks[2].querySelector(".track-album").textContent = track3.album.name;
    list_tracks[2].querySelector(".track-number").textContent = track3.track_number;
    list_tracks[2].querySelector(".track-duration").textContent = convertMsToMinSec(track3.duration_ms);

    const list_albums = document.querySelectorAll(".album-card");
    
  //Look I would make another fetch, but why would when I have the info I need for it in one of the the 3 tracks I have and yes I check its the same info because they're in the same album

    list_albums[0].querySelector("img").src = track1.album.images[0].url;
    list_albums[0].querySelector("h3").textContent = track1.name;
    const year1 = track1.album.release_date.slice(0,4);
    const type1 = track1.album.type;
    list_albums[0].querySelector("p").textContent = `${year1} • ${type1}`;

  //Also just for record, the album info can be found in the tracks so yeah


}
load();


   