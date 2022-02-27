import React, { useEffect, useState } from "react";
import "./app.css";
import Video from "./Video.js";
import axios from "./axios.js";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => {
            return (
              <Video
                key={url}
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                shares={shares}
                messages={messages}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;
