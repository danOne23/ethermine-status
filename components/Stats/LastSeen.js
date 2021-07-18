import React from "react";
import { Text } from "react-native";
import { FormatTime } from "./Functions";
import { styles } from "./Stats";

function LastSeen(props = { time: 0 }) {
  return (
    <Text style={styles.title}>
      Last Seen{": "}
      <Text style={styles.value}>{FormatTime(props.time)}</Text> ago
    </Text>
  );
}

export default LastSeen;
