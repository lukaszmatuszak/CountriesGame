import React from 'react';
import { Text, View, Button } from 'react-native';

const SummaryScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Summary Screen{navigation.getParam('score')}</Text>
      <Text>Score:{navigation.getParam('score')}/10</Text>
      <Button
        title="Play again"
        onPress={() => {
          navigation.navigate('Game');
        }}
      />
    </View>
  );
};

export default SummaryScreen;
