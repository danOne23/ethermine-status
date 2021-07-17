import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { styles } from "./Stats";

function Unpaid(props = { stats: {}, name: "", currency: "" }) {
  const [value, setValue] = useState();

  const WeiToEth = wei => (wei / Math.pow(10, 18)).toFixed(7);

  useEffect(() => {
    if (props.currency.toLowerCase() == "eth")
      setValue(WeiToEth(props.stats[props.name]));
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
