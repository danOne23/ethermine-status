import React from "react";
import { Text, StyleSheet } from "react-native";

function ActiveWorkers(props) {
  return (
    <Text style={styles.name}>
      Active Workers{": "}
      <Text style={styles.workers}>{props.workers}</Text>{" "}
    </Text>
  );
}

const styles = StyleSheet.create({
  name: {
    textAlign: "center",
  },
  workers: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ActiveWorkers;
