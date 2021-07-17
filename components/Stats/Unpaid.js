import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { styles } from "./Stats";
import BigNumber from "bignumber.js";

function Unpaid(props = { stats: {}, name: "", currency: "", decimals: 5 }) {
  const [value, setValue] = useState();

  const WeiToEth = (wei = new BigNumber(), decimals) =>
    wei.dividedBy(Math.pow(10, 18)).toFixed(decimals);

  useEffect(() => {
    if (props.currency.toLowerCase() == "eth")
      setValue(
        WeiToEth(new BigNumber(props.stats[props.name]), props.decimals),
      );
  });

  return (
    <Text style={styles.title}>
      Unpaid:{" "}
      <Text style={styles.value}>
        {value} {props.currency}
      </Text>
    </Text>
  );
}

export default Unpaid;
