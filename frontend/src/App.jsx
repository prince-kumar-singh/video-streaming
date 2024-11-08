import './App.css';
import VideoPlayer from './vidoePlayer.jsx';
import { useRef } from 'react';
import 'videojs-youtube'; // Import YouTube plugin for video.js

function App() {
  const playerRef = useRef(null);
  const videoLink = "http://localhost:8000/uploads/courses/d74916fa-8051-41db-81b2-23be79ca2ecf/index.m3u8"; // Replace with your YouTube link

  
  // USe this in case of HLS videos
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  };
  
  // USe  this in case of YouTube videos
  // const videoPlayerOptions = {
  //   controls: true,
  //   responsive: true,
  //   fluid: true,
  //   techOrder: ['youtube'], // Specify YouTube as the preferred tech
  //   sources: [
  //     {
  //       src: videoLink,
  //       type: 'video/youtube', // Set the type to 'video/youtube' for YouTube videos
  //     },
  //   ],
  // };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // Log events
    player.on("waiting", () => {
      videojs.log("Player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("Player will dispose");
    });

    player.on("error", () => {
      videojs.log("Player encountered an error:", player.error());
    });
  };

  return (
    <>
      <div>
        <h1>Video Player</h1>
      </div>
      <VideoPlayer
        options={videoPlayerOptions}
        onReady={handlePlayerReady}
      />
    </>
  );
}

export default App;
