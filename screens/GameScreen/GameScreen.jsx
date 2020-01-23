import React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { useStore } from '../../hooks/useStore';
import Game from '../../components/Game/Game';
import { useDownloadImages } from '../../hooks/useDownloadImages';

const GameScreen = () => {
  const countries = useStore('@countries');
  const { isComplete, pairs } = useDownloadImages(countries);

  return !isComplete ? (
    <ActivityIndicator size="large" color="#0000ff" />
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
