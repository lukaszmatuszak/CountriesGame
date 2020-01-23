/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View } from 'react-native';
import Image from 'react-native-remote-svg';

const Pair = ({ pair }) => {
  return (
    <View>
      <Text>{pair.name}</Text>
      <Image
        style={{ width: 300, height: 200, zIndex: 0 }}
        source={{
          uri: pair.flagUrl
        }}
      />
    </View>
  );
};

export default Pair;
