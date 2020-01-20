const getRandomNumber = max => Math.floor(Math.random() * max);

const getCorrectPair = countries => {
  const random = getRandomNumber(3);

  return {
    name: countries[random].name,
    flag: countries[random].file_url,
    correct: true
  };
};

const getIncorrectPair = countries => {
  let nameIndex = 0;
  let flagIndex = 0;

  do {
    nameIndex = getRandomNumber(3);
    flagIndex = getRandomNumber(3);
  } while (nameIndex === flagIndex);

  return {
    name: countries[nameIndex].name,
    flag: countries[flagIndex].file_url,
    correct: false
  };
};

export const getRandomPairs = countries => {
  const pairs = [];
  const counters = { correct: 0, incorrect: 0 };

  do {
    // TODO: Maybe i should refactor this / it loops more then 10 times
    const type = !!getRandomNumber(2);

    if (type && counters.correct < 5) {
      pairs.push(getCorrectPair(countries));
      counters.correct++;
    }

    if (!type && counters.incorrect < 5) {
      pairs.push(getIncorrectPair(countries));
      counters.incorrect++;
    }
  } while (pairs.length !== 10);
  return pairs;
};
