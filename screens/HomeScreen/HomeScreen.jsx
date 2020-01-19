/* eslint-disable react/prop-types */
import React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Countries Game</Text>
      <Text>Confirm whether currently displayed flag/name pair is correct or not</Text>
      <Text>Swipe to right if pair is correct</Text>
      <Text>Swipe to left if pair is incorrect</Text>
      <Button
        title="Start Game"
        onPress={() => {
          navigation.navigate('Game');
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
