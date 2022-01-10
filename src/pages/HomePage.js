import React from "react";

import ChannelSelect from "../Components/ChannelSelect/ChannelSelect";
import MediaPlayer from "../Components/MediaPlayer/MediaPlayer";

import './Homepage.scss';

export default function App() {
  return (
    <div>
      <div id='home-page'>
				<div id='title'>
					<h1>SR PLAYER</h1>
				</div>
        <ChannelSelect />
        <MediaPlayer />
      </div>
    </div>
  );
}
