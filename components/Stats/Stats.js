import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import ActiveWorkers from "./ActiveWorkers";
import EstimatedEarnings from "./EstimatedEarnings";
import Hashrate from "./Hashrate";
import LastSeen from "./LastSeen";
import Shares from "./Shares";
import Unpaid from "./Unpaid";
import { styles } from "../Styles";

function Stats(props = { stats: "", currency: "eth" }) {
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
        <Unpaid stats={props.stats} currency={props.currency} />
        <EstimatedEarnings stats={props.stats} currency={props.currency} />
      </View>
    </ScrollView>
  );
}

export default Stats;
