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

async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    
    //Combination of section 1 and 2
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
    picture.src = artist.images[0].url; //Note there were multiple images

    title.textContent = artist.name;
  //This is the 3rd section, had to make multiple fetch as different tracks
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

    //Alright start of section 4, note had to do it like this instead of just running it from albums as CORS block me from doing it

    const list_albums = document.querySelectorAll(".album-card");

    const decision = await fetch( 
      `https://api.spotify.com/v1/artists/${artistID}/albums`, 
      { 
        headers: { 
        Authorization: `Bearer ${accessToken}` 
        } 
      } 
    ); 
    const album_start = await decision.json(); 

    list_albums[0].querySelector("img").src = album_start.items[0].images[0].url; //First album with first picture size
    list_albums[0].querySelector("h3").textContent = album_start.items[0].name;
    const year1 = album_start.items[0].release_date.slice(0,4);
    const type1 = album_start.items[0].type;
    list_albums[0].querySelector("p").textContent = `${year1} • ${type1}`;

    list_albums[1].querySelector("img").src = album_start.items[1].images[0].url; //Second album with first picture size
    list_albums[1].querySelector("h3").textContent = album_start.items[1].name;
    const year2 = album_start.items[1].release_date.slice(0,4);
    const type2 = album_start.items[1].type;
    list_albums[1].querySelector("p").textContent = `${year2} • ${type2}`;

    list_albums[2].querySelector("img").src = album_start.items[2].images[0].url; //Third album with first picture size
    list_albums[2].querySelector("h3").textContent = album_start.items[2].name;
    const year3 = album_start.items[2].release_date.slice(0,4);
    const type3 = album_start.items[2].type;
    list_albums[2].querySelector("p").textContent = `${year3} • ${type3}`;

    list_albums[3].querySelector("img").src = album_start.items[3].images[0].url; //Forth album with first picture size
    list_albums[3].querySelector("h3").textContent = album_start.items[3].name;
    const year4 = album_start.items[3].release_date.slice(0,4);
    const type4 = album_start.items[3].type;
    list_albums[3].querySelector("p").textContent = `${year4} • ${type4}`;

}
load();


   