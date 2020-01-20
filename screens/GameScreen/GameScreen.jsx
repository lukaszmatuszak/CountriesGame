import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useStore } from '../../hooks/useStore';
import { getRandomPairs } from './utils';
import Game from '../../components/Game/Game';

const GameScreen = () => {
  const countries = useStore('@countries');
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    if (countries?.length) {
      setPairs(getRandomPairs(countries));
    }
  }, [countries]);

  return !countries?.length || !pairs?.length ? (
    <Text>Loading</Text>
  ) : (
    <SafeAreaView style={styles.container}>
      <Text>Game Screen</Text>
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
