import ReactDOM from "react-dom";
import { ChannelProvider } from "./Context/MediaPlayerContext";

import App from "./App";
ReactDOM.render(
	<ChannelProvider>
		<App />
	</ChannelProvider>,
	document.getElementById("root")
);
