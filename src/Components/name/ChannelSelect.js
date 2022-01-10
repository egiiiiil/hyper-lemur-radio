import React, { useContext } from "react";
import { MyContext } from "../../Context/useContext";

const ChannelSelect = () => {
  const user = useContext(MyContext);

  return (
    <>
      <button onClick={() => user.setName("Playing")}>Play</button>
    </>
  );
};

export default ChannelSelect;

// <input onChange={(event) => user.setName(event.target.value)} />
