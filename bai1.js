function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
    return longestWord;
  } 
  var word = findLongestWord(["nguyen","quang","anh", "le", "mindx", "loan",]);
  console.log(word);

 
  