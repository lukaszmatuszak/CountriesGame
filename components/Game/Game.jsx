import React, { useEffect, useState } from 'react';
import { Text, Alert, View, StyleSheet, ToastAndroid } from 'react-native';
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
      ToastAndroid.show('Correct', ToastAndroid.SHORT);
      setIndex(i => i + 1);
    } else {
      ToastAndroid.show('Incorrect', ToastAndroid.SHORT);
      navigation.navigate('Summary', { score: index });
    }
  };

  const handleSwipeRight = () => {
    if (pairs[index].correct) {
      ToastAndroid.show('Correct', ToastAndroid.SHORT);
      setIndex(i => i + 1);
    } else {
      ToastAndroid.show('Incorrect', ToastAndroid.SHORT);
      navigation.navigate('Summary', { score: index });
    }
  };

  if (index >= 10) {
    navigation.navigate('Summary', { score: index });
  }

  if (timer > 3) {
    Alert.alert("Time's up!", 'Be faster next time :)');
    navigation.navigate('Summary', { score: index });
  }

  return (
    <GestureRecognizer onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
      <View style={styles.container}>
        <Text>Timer:{timer}</Text>
        <Text>Score:{index}/10</Text>
        <Pair pair={pairs[index]} />
      </View>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: { zIndex: 1 }
});

export default withNavigation(Game);
