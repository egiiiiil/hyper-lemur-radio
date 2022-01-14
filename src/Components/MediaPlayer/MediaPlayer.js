import React, { useContext } from 'react';
import { MediaPlayerContext } from '../../Context/MediaPlayerContext';
import './MediaPlayer.scss';

const MediaPlayer = () => {
	const player = useContext(MediaPlayerContext);
	console.log('a', player);
	if (player.pickedchannel === '') {
		//console.log(player.pickedchannel);
		return <div id='media-player'>...</div>;
	} else {
		console.log(player.pickedchannel[1])
		return <div id='media-player'  className="active">
			<h2>{player.pickedchannel[0]}</h2>
			<img src={player.pickedchannel[1]} alt="" id="media-player-image"/>
			<audio controls id="media-player-controls">
				<source src={player.pickedchannel[2]} type="audio/mpeg"></source>
				Your browser does not support the audio tag.
			</audio>
		</div>;
	}
};

export default MediaPlayer;