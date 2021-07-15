import React from "react";
import { View } from "react-native";
import Hashrate from "../Hashrate/Hashrate";

function Stats(props = { stats: "" }) {
  return (
    <View>
      <Hashrate stats={props.stats} hashrateName={"currentHashrate"} />
      <Hashrate stats={props.stats} hashrateName={"reportedHashrate"} />
      <Hashrate stats={props.stats} hashrateName={"reportedHashrate"} />
    </View>
  );
}

export default Stats;
