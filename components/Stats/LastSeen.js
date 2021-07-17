import React from "react";
import { Text } from "react-native";
import { styles } from "./Stats";

function LastSeen(props = { time: 0 }) {
  const FormatTime = unixTime => {
    let now = Math.floor(Date.now() / 1000);
    let difference = now - props.time;
    let returnTime;
    let unit;

    if (difference < 60) {
      returnTime = difference;
      unit = "seconds";
    } else if (difference < 7200) {
      returnTime = difference / 60;
      unit = "minutes";
    } else if (difference < 172800) {
      returnTime = difference / 3600;
      unit = "hours";
    } else if (difference < 63072000) {
      returnTime = difference / 86400;
      unit = "days";
    } else {
      returnTime = difference / 63072000;
      unit = "years";
    }

    returnTime = Math.floor(returnTime);
    return `${returnTime} ${unit}`;
  };

  return (
    <Text style={styles.title}>
      Last Seen{": "}
      <Text style={styles.value}>{FormatTime(props.time)}</Text> ago
    </Text>
  );
}

export default LastSeen;
