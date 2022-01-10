import React, { useContext, 
								useEffect, 
								useState } from 'react'
import { MediaPlayerContext } from "../../Context/MediaPlayerContext";
import './ChannelSelect.scss'

const ChannelSelect = () => {
	const player = useContext(MediaPlayerContext);
	const srUrl = 'http://api.sr.se/api/v2'

	async function fetchChannelList() {
		return fetch(`${srUrl}/channels/?pagination=false&format=json`)
			.then((res) => res.json())
			.then((data) => data.channels)
			.catch((err) => console.error(err));
	}
	

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
			<div id="channel-list">
				<ul>
					{listItems && listItems.map((listItems, i) => (
						<li key={i}>
							<div>
								<p>{listItems.name}</p>
								<img src={listItems.image} alt={`Image for ${listItems.name}`}/>
								<button onClick={() => player.setPickedchannel([
																																listItems.name, 
																																listItems.image, 
																																listItems.liveaudio.url])}>Play</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default ChannelSelect;
/*<h2>{sr.channelName}</h2>
<img src={sr.image} alt="" id="media-player-image"/>
<audio controls id="media-player-controls">
	<source src={sr.audio} type="audio/mpeg"></source>
	Your browser does not support the audio tag.
</audio>*/