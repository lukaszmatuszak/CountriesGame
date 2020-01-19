import { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

export const useStore = key => {
  const [state, setState] = useState();

  useEffect(() => {
    AsyncStorage.getItem(key).then(value => setState(JSON.parse(value)));
  }, [key]);

  return state;
};
