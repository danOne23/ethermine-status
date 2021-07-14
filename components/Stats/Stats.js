import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Hashrate from "../Hashrate/Hashrate";

function Stats(props = { stats: "" }) {
  return (
    <View>
      <Text style={styles.text}>Current Hashrate:</Text>
      <Hashrate hashrate={props.stats["currentHashrate"]} />
      <Text style={styles.text}>Reported Hashrate:</Text>
      <Hashrate hashrate={props.stats["reportedHashrate"]} />
      <Text style={styles.text}>Average Hashrate:</Text>
      <Hashrate hashrate={props.stats["reportedHashrate"]} />t
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default Stats;
