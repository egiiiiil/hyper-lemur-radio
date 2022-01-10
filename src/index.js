import ReactDOM from "react-dom";
import { UserProvider } from "./Context/MediaPlayerContext";

import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  rootElement
);
