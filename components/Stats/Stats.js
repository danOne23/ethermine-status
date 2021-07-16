import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Hashrate from './Hashrate';
import LastSeen from './LastSeen';

function Stats(props = {stats: ''}) {
  return (
    <ScrollView>
      <LastSeen time={props.stats['lastSeen']} />
      <View style={styles.container}>
        <Hashrate stats={props.stats} hashrateName={'currentHashrate'} />
        <Hashrate stats={props.stats} hashrateName={'reportedHashrate'} />
        <Hashrate stats={props.stats} hashrateName={'reportedHashrate'} />
      </View>
      <View style={styles.container}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

export default Stats;
