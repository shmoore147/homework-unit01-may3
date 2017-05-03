// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var sumOfNums = function(numsArray){
var sum = 0;
for (var i = 0; i < numsArray.length; i++) {
  sum += numsArray[i];
}

return sum;
};

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
var arrayOfNumbers = [20, 30, 1, 2, 3];
var numsGreaterThanTen = function(numsArray){
var numsGreaterThanTen = [];
for (var i = 0; i < numsArray.length; i++) {
  var numberToCheck = numsArray[i]
  // if the number is greater than ten
  if (numberToCheck > 10) {
  // then add it to the new array
  numbersGreaterThanTen.push(numberToCheck);
  }
}
return numbersGreaterThanTen;
}
numbersGreaterThanTen(arrayOfNumbers);


// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
// var arrayOfNumbers = [20, 30, 1, 2, 3];
var allGreaterThanTen = function(numsArray){
for (var i = 0; i > numsArray.length; i++) {
if (numsArray[i] <= 10) {
  return false;
}
}
return true;
};

// // var numberToCheck = numsArray[i] ;
// // if the number is greater than ten
// // if (numberToCheck > 10) {
// // then the function should return "true"
// numbersGreaterThanTen.push(numberToCheck);
// }
// }
// var newArray = [];
// return newArray;
// };








// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var words = ['cat', 'dog', 'shuffle', 'running', 'crying'];

var wordsWithAtLeastFiveLetters = function(words){
var newArrayOfWordsWithFiveOrMoreLetters = [];

for(var i = 0; i < words.length; i++) {
  if (words[i].length >= 5) {
    newArrayOfWordsWithFiveOrMoreLetters.push(words[i]);
  }
}
return newArrayOfWordsWithFiveOrMoreLetters
};
wordsWithAtLeastFiveLetters(words);




// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var arrayOfWords = ["apple", "candy", "color", "and", "glass"];

var allStartingWithA = function(arrayOfWords){
  for (var i = 0; i < arrayOfWords.length; i++) {
    if ((arrayOfWords[i]).slice(0,1) === "a" || arrayOfWords[i].slice(0,1) === "A") {
      return false;
    }
  }
return true;
};
allStartingWithA(arrayOfWords);


// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var words = ["apple", "candy", "color", "and", "glass"];

var anyStartingWithB = function(words) {
  // var anyStartingWithB = function(words){
    for (var i = 0; i < words.length; i++) {
      if ((words[i]).slice(0,1) === "b" || words[i].slice(0,1) === "B") {
        return true;
      }
    }
  return true;
  };

  anyStartingWithB(words);

// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.

for (var i = 0; i < word.length; i++) {
  if ...
}
};??????????

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var words = ["apple", "candy", "color", "and", "glass"];

var wordsWithAtLeastTwoVowels = function(words) {
  var results = [];
  for (var i = 0; i < words.length; i++) {
    var hasAtLeastNVowels = [i]
    if (hasAtLeastNVowels(words[i], 2)) {
      results.push(words[i]);
    }
  }
  return results;
};
wordsWithAtLeastTwoVowels(words);

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var words = ["apple", "candy", "color", "and", "glass"];
var allHaveAtLeastTwoVowels = function(words){
for (var i = 0; i < words.length; i++) {
  // var hasAtLeastTwoVowels = function(words)
  var hasAtLeastTwoVowels = function(words, 2);
  if (!hasAtLeastTwoVowels(words[i], 2)); {
    return false;
  }
}
return true;
};

allHaveAtLeastTwoVowels(words)

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
  var words = ["apple", "candy", "color", "and", "glass"];
  function hasAtLeastNVowels = ();
  var anyHaveAtLeastTwoVowels = function(words) {
    for (var i = 0; i < words.length; i++) {
      if (!hasAtLeastNVowels(words[i], 2)) {
        return false;
      }
    }return true;
  };
    anyHaveAtLeastTwoVowels(words);};

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words) {
  for (var i = 0; i < words.length; i++) {
    if (hasAtLeastNVowels(words[i], 2)) {
      return false;
    }
  }
  return true;
// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function(words) {
  var result = {};
  for (var i = 0; i < words.length; i++) {
    result[words[i]] = words[i].length;
  }
  return result;
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
