import React, { useState } from "react";
import { Text } from "react-native";

function Hashrate(props) {
  const FormatHashrate = (rawHashrate) => {
    let formattedHashrate = rawHashrate / 1000000;
    formattedHashrate = formattedHashrate.toFixed(2);
    return `${formattedHashrate} MH/s`;
  };

  return <Text>{FormatHashrate(props.hashrate)}</Text>;
}

export default Hashrate;
