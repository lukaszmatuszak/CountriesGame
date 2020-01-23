import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Image from 'react-native-remote-svg';

const Pair = ({ pair }) => {
  return (
    <View>
      <Text>{pair.name}</Text>
      <Image
        style={styles.flagImage}
        source={{
          uri: pair.flagUrl
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flagImage: { width: 300, height: 200, zIndex: 0 }
});

export default Pair;
