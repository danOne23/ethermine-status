import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";

function FetchData(props = { miner: "" }) {
  const [stats, setStats] = useState([]);

  const url = `https://api.ethermine.org/miner/${props.miner}/currentStats`;

  const getMinerStats = () => {
    axios
      .get(url)
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log("test");
  };

  useEffect(() => {
    getMinerStats();
  }, [props.miner]);

  return <Text>{JSON.stringify(stats)}</Text>;
}

export default FetchData;
