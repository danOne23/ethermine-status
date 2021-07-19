import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { styles } from "./Stats";
import BigNumber from "bignumber.js";
import { WeiToEth } from "./Functions";

function Unpaid(props = { stats: {}, name: "", currency: "" }) {
  const [value, setValue] = useState();

  useEffect(() => {
    if (props.currency.toLowerCase() == "eth")
      setValue(WeiToEth(new BigNumber(props.stats[props.name])).toFixed(7));
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
