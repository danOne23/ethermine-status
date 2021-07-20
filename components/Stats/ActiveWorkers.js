import React, { useState } from "react";
import { Text } from "react-native";
import { styles } from "./Stats";

function ActiveWorkers(props = { workers: 0 }) {
  const [activeWorkers, setActiveWorkers] = useState(props.workers);
  if (activeWorkers == null) setActiveWorkers(0);

  return (
    <Text style={styles.title}>
      Active Workers{": "}
      <Text style={styles.value}>{activeWorkers}</Text>{" "}
    </Text>
  );
}

export default ActiveWorkers;
