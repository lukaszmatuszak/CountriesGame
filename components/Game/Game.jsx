import React, { useEffect, useState } from 'react';
import { Text, Alert, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Pair from '../Pair/Pair';

const Game = ({ pairs, navigation }) => {
  const [timer, setTimer] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t => t + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      setTimer(0);
    };
  }, [index]);

  const handleSwipeLeft = () => {
    if (!pairs[index].correct) {
      Alert.alert('Correct');
      setIndex(i => i + 1);
    } else {
      Alert.alert('Incorrect', 'Game Over');
      navigation.navigate('Home');
    }
  };

  const handleSwipeRight = () => {
    if (!pairs[index].correct) {
      Alert.alert('Correct');
      setIndex(i => i + 1);
    } else {
      Alert.alert('Incorrect', 'Game Over');
      navigation.navigate('Home');
    }
  };

  if (index >= 9) {
    navigation.navigate('Home');
    return null;
  }

  if (timer > 3) {
    Alert.alert("Time's up!");
    navigation.navigate('Home');
    return null;
  }

  return (
    <View>
      <Text>Timer:{timer}</Text>
      <Pair onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight} pair={pairs[index]} />
    </View>
  );
};

export default withNavigation(Game);