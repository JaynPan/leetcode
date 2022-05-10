/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
  const sortedWords = [];
  
  for (const value of s.split(" ")) {
      const position = value.slice(value.length - 1);
      const word = value.slice(0, value.length -1);
      
      // the position is 1-indexed, thus minus 1 to match zero-based index
      sortedWords[position - 1] = word;
  }

  return sortedWords.join(" ");
};