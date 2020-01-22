/* eslint-disable react/prop-types */
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Image from 'react-native-remote-svg';

const Pair = ({ pair, onSwipeRight, onSwipeLeft }) => {
  return (
    <View>
      <Text>{pair.name}</Text>
      <Image
        style={{ width: 300, height: 200 }}
        source={{
          uri: pair.flagUrl
        }}
      />

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
