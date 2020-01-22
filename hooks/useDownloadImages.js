import { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import { getRandomPairs } from '../screens/GameScreen/utils';

export const useDownloadImages = countries => {
  const [isComplete, setIsComplete] = useState(false);
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    if (!countries?.length) return;

    (async () => {
      const randomPairs = getRandomPairs(countries);
      for (let i = 0; i < randomPairs.length; i++) {
        const { uri } = await downloadImage(randomPairs[i]);
        randomPairs[i].flagUrl = uri;
      }

      setPairs(randomPairs);
      setIsComplete(true);
    })();
  }, [countries]);

  return { isComplete, pairs };
};

const downloadImage = pair =>
  FileSystem.downloadAsync(
    `http:${pair.flagUrl}`,
    `${FileSystem.documentDirectory}${pair.flagOwner}.svg`
  );
