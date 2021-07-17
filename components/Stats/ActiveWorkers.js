import React from "react";
import { Text } from "react-native";
import { styles } from "./Stats";

function ActiveWorkers(props = { workers: 0 }) {
  return (
    <Text style={styles.title}>
      Active Workers{": "}
      <Text style={styles.value}>{props.workers}</Text>{" "}
    </Text>
  );
}

export default ActiveWorkers;
