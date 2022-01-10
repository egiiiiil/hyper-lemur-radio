import React, { createContext, useState } from "react";

export const MediaPlayerContext = createContext();

export const UserProvider = ({ children }) => {
	const [channelList, setChannelList] = useState("");
	const [pickedchannel, setPickedchannel] = useState("");

	return (
		<MediaPlayerContext.Provider
			value={{
				channelList,
				setChannelList,
				pickedchannel,
				setPickedchannel
			}}
		>
			{children}
		</MediaPlayerContext.Provider>
	);
};
