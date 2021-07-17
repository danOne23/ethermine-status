import React from "react";
import { StyleSheet, Text } from "react-native";

function LastSeen(props) {
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
    <Text style={styles.text}>
      Last seen{": "}
      <Text style={styles.difference}>{FormatTime(props.time)}</Text> ago
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  difference: {
    fontWeight: "bold",
  },
});

export default LastSeen;
