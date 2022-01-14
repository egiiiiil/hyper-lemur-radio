const player = useContext(MediaPlayerContext);
const srUrl = 'http://api.sr.se/api/v2'

export async function fetchChannelList() {
	return fetch(`${srUrl}/channels/?pagination=false&format=json`)
		.then((res) => res.json())
		.then((data) => data.channels)
		.catch((err) => console.error(err));
}