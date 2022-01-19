import React, { useContext } from 'react';
import { MediaPlayerContext } from '../../Context/MediaPlayerContext';
import './MediaPlayer.scss';
import waiting from './waiting_512@2.png'


const MediaPlayer = () => {
	const player = useContext(MediaPlayerContext);
	console.log('pickedchannel', player);
	return (player.pickedchannel === '' 
					? <aside id='media-player'>
						<h2>{}...</h2>
							<img src={waiting} alt='' id='media-player-image'/>
							<audio controls id='media-player-controls'>
								
								Your browser does not support the audio tag.
							</audio>
					</aside> 
					: <aside id='media-player' className='active'>
							<h2>{player.pickedchannel[0]}</h2>
							<img src={player.pickedchannel[1]} alt='' id='media-player-image'/>
							<audio controls id='media-player-controls'>
								<source src={player.pickedchannel[2]} type='audio/mpeg'></source>
								Your browser does not support the audio tag.
							</audio>
						</aside>)
}

export default MediaPlayer;