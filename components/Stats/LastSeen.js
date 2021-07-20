import React from "react";
import { Text } from "react-native";
import { FormatTime } from "../Functions";
import { styles } from "../Styles";

function LastSeen(props = { time: 0 }) {
  if (props.time !== null) {
    return (
      <Text style={styles.title}>
        Last Seen{": "}
        <Text style={styles.value}>{FormatTime(props.time)}</Text> ago
      </Text>
    );
  } else
    return (
      <Text style={styles.title}>
        Last Seen{": "}
        <Text style={styles.value}>N/A</Text>
      </Text>
    );
}

export default LastSeen;
