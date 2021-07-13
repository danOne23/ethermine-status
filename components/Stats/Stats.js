import React, { useState } from "react";
import { View, Text } from "react-native";
import Hashrate from "../Hashrate/Hashrate";

function Stats(props = { stats: "" }) {
  return (
    <View>
      <Text>
        Current Hashrate:
        <br />
        <Hashrate hashrate={props.stats["currentHashrate"]} />
      </Text>
      <Text>
        Reported Hashrate:
        <br />
        <Hashrate hashrate={props.stats["reportedHashrate"]} />
      </Text>
      <Text>
        Average Hashrate:
        <br />
        <Hashrate hashrate={props.stats["reportedHashrate"]} />
      </Text>
    </View>
  );
}

export default Stats;
