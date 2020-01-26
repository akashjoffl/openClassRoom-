const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    return wordArray.length;
  }
  
  const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    let totalLetters = 0;
    for (let word of wordArray) {
      // remove punctuation so as to only count letters
      word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      totalLetters += word.length;
    }
    return totalLetters;
  }
  
  /*
  ** returns average word length to 
  ** two decimal places
  */
  const getAverageWordLength = (stringToTest) => {
    return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));
  }
  
  const printStringStats = (stringToTest) => {
    console.log({
      wordCount: getWordCount(stringToTest),
      letterCount: getLetterCount(stringToTest),
      averageWordLength: getAverageWordLength(stringToTest)
    })
  }