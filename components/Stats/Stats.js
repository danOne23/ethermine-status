import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ActiveWorkers from "./ActiveWorkers";
import EstimatedEarnings from "./EstimatedEarnings";
import Hashrate from "./Hashrate";
import LastSeen from "./LastSeen";
import Shares from "./Shares";
import Unpaid from "./Unpaid";

function Stats(props = { stats: "" }) {
  return (
    <ScrollView>
      <LastSeen time={props.stats["lastSeen"]} />
      <ActiveWorkers workers={props.stats["activeWorkers"]} />
      <View style={styles.container}>
        <Hashrate stats={props.stats} name={"currentHashrate"} />
        <Hashrate stats={props.stats} name={"reportedHashrate"} />
        <Hashrate stats={props.stats} name={"averageHashrate"} />
      </View>
      <View style={styles.container}>
        <Shares stats={props.stats} name={"validShares"} />
        <Shares stats={props.stats} name={"invalidShares"} />
        <Shares stats={props.stats} name={"staleShares"} />
      </View>
      <View style={styles.container}>
        <Unpaid stats={props.stats} name={"unpaid"} currency={"ETH"} />
        <EstimatedEarnings value={props.stats["ethPerMin"]} currency="eth" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  title: {
    textAlign: "center",
  },
  value: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Stats;
export { styles };
