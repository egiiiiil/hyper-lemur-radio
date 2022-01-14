import ReactDOM from "react-dom";
import { UserProvider } from "./Context/MediaPlayerContext";

import App from "./App";
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
