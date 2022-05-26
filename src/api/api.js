const srUrl = "https://api.sr.se/api/v2";

async function fetchChannelList() {
	return fetch(`${srUrl}/channels/?pagination=false&format=json`)
		.then((res) => res.json())
		.then((data) => data.channels)
		.catch((err) => console.error("ERROR", err));
}

export default fetchChannelList;
