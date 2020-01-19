/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Text, SafeAreaView, Button, AsyncStorage } from 'react-native';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/linssen/country-flag-icons/master/countries.json')
      .then(response => response.json())
      .then(data => {
        AsyncStorage.setItem('@countries', JSON.stringify(data));
      });
  }, []);

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
