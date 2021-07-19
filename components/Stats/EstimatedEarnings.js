import { toUpper } from "lodash";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ConvertEstimatedEarnings } from "./Functions";
import { styles } from "./Stats";

function EstimatedEarnings(props = { currency: "", value: "" }) {
  const [perYear, setPerYear] = useState();
  const [perMonth, setPerMonth] = useState();
  const [perWeek, setPerWeek] = useState();
  const [perDay, setPerDay] = useState();

  useEffect(() => {
    let estimated = ConvertEstimatedEarnings(props.value);
    setPerDay([estimated[0]]);
    setPerWeek([estimated[1]]);
    setPerMonth([estimated[2]]);
    setPerYear([estimated[3]]);
  }, []);

  return (
    <View>
      <Text style={styles.title}>
        Per Day:{" "}
        <Text style={styles.value}>
          {perDay} {toUpper(props.currency)}
        </Text>
      </Text>
      <Text style={styles.title}>
        Per Week:{" "}
        <Text style={styles.value}>
          {perWeek} {toUpper(props.currency)}
        </Text>
      </Text>
      <Text style={styles.title}>
        Per Month:{" "}
        <Text style={styles.value}>
          {perMonth} {toUpper(props.currency)}
        </Text>
      </Text>
      <Text style={styles.title}>
        Per Year:{" "}
        <Text style={styles.value}>
          {perYear} {toUpper(props.currency)}
        </Text>
      </Text>
    </View>
  );
}

export default EstimatedEarnings;
