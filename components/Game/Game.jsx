import React, { useEffect, useState } from 'react';
import { Text, Alert, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import GestureRecognizer from 'react-native-swipe-gestures';
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
      navigation.navigate('Summary', { score: index });
    }
  };

  const handleSwipeRight = () => {
    if (pairs[index].correct) {
      Alert.alert('Correct');
      setIndex(i => i + 1);
    } else {
      Alert.alert('Incorrect', 'Game Over');
      navigation.navigate('Summary', { score: index });
    }
  };

  if (index >= 10) {
    navigation.navigate('Summary', { score: index });
  }

  if (timer > 3) {
    Alert.alert("Time's up!");
    navigation.navigate('Summary', { score: index });
  }

  return (
    <GestureRecognizer onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
      <View style={{ zIndex: 1 }}>
        <Text>Timer:{timer}</Text>
        <Text>Score:{index}/10</Text>
        <Pair pair={pairs[index]} />
      </View>
    </GestureRecognizer>
  );
};

export default withNavigation(Game);
