import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooterText">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooterTicker">
          <MusicNoteIcon className="videoFooterIcon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooterRecord"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
