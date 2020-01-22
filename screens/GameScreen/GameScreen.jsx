import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useStore } from '../../hooks/useStore';
import Game from '../../components/Game/Game';
import { useDownloadImages } from '../../hooks/useDownloadImages';

const GameScreen = () => {
  const countries = useStore('@countries');
  const { isComplete, pairs } = useDownloadImages(countries);

  return !isComplete ? (
    <Text>Loading</Text>
  ) : (
    <SafeAreaView style={styles.container}>
      <Game pairs={pairs} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  }
});

export default GameScreen;
