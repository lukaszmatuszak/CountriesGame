import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Button, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useStore } from '../../hooks/useStore';

const GameScreen = () => {
  const countries = useStore('@countries');
  console.log('render');
  const [pairs, setPairs] = useState([]);

  useEffect(() => {});

  console.log(countries?.[0]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Game Screen</Text>
      <Text>{countries?.[0].name}</Text>
      <SvgUri
        viewBox="0 0 600 400"
        width="600"
        height="400"
        uri={`https:${countries?.[0].file_url}`}
      />
      <View style={styles.actionButtons}>
        <Button title="Incorrect" />
        <Button title="Correct" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default GameScreen;
