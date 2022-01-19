import React, { useContext, 
								useEffect, 
								useState } from 'react'
import { MediaPlayerContext } from '../../Context/MediaPlayerContext';
import ChannelSelectButton from '../ChannelSelectButton/ChannelSelectButton';
import './ChannelSelect.scss'
import errorImage from './error_512@2.png'
import fetchChannelList from '../../api/api';

const ChannelSelect = () => {
	const player = useContext(MediaPlayerContext);

	

	useEffect(() => {
		async function init() {
			const channels = await fetchChannelList()
			player.setChannelList(channels)
		}
		init()
	}, [])
	const listItems =  player.channelList
	

	return (
		<>
			<div id='channel-list'>
				<ul>
					{listItems && listItems.map((listItems, i) => (
						<li key={listItems.id}>
								<div id="channel-list-container">
									<img src={listItems.image} alt={`Image for ${listItems.name}`} onError={(e) => {
																																									e.target.onerror = null
																																									e.target.src = errorImage
																																								}}/>
									
									<ChannelSelectButton onClick={() => player.setPickedchannel([
																																	listItems.name, 
																																	listItems.image, 
																																	listItems.liveaudio.url])}
																			
																			name={listItems.name}
																			/>
								</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default ChannelSelect;

//TODO: Link error image correctly