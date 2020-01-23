import React, { useEffect } from 'react';
import { SafeAreaView, Button, AsyncStorage } from 'react-native';

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
