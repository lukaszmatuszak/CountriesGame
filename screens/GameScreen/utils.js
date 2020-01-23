const getRandomNumber = max => Math.floor(Math.random() * max);

const getCorrectPair = countries => {
  const random = getRandomNumber(countries.length);

  return {
    name: countries[random].name,
    flagUrl: countries[random].file_url,
    flagOwner: countries[random].name,
    correct: true
  };
};

const getIncorrectPair = countries => {
  let nameIndex = 0;
  let flagIndex = 0;

  do {
    nameIndex = getRandomNumber(countries.length);
    flagIndex = getRandomNumber(countries.length);
  } while (nameIndex === flagIndex);

  return {
    name: countries[nameIndex].name,
    flagUrl: countries[flagIndex].file_url,
    flagOwner: countries[flagIndex].name,
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
