import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Hashrate from "./Hashrate";
import LastSeen from "./LastSeen";
import Shares from "./Shares";

function Stats(props = { stats: "" }) {
  return (
    <ScrollView>
      <LastSeen time={props.stats["lastSeen"]} />
      <View style={styles.container}>
        <Hashrate stats={props.stats} name={"currentHashrate"} />
        <Hashrate stats={props.stats} name={"reportedHashrate"} />
        <Hashrate stats={props.stats} name={"reportedHashrate"} />
      </View>
      <View style={styles.container}>
        <Shares stats={props.stats} name={"validShares"} />
        <Shares stats={props.stats} name={"invalidShares"} />
        <Shares stats={props.stats} name={"staleShares"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

export default Stats;
