/* eslint-disable react/prop-types */
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Pair = ({ pair, onSwipeRight, onSwipeLeft }) => {
  return (
    <View>
      <Text>{pair.name}</Text>
      <SvgUri viewBox="0 0 900 600" width="300" height="200" uri={`https:${pair.flag}`} />
      <View style={styles.actionButtons}>
        <Button title="Incorrect" onPress={onSwipeLeft} />
        <Button title="Correct" onPress={onSwipeRight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Pair;
