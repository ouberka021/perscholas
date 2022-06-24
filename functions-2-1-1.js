/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/
function maxOfTwoNumbers(firstNum, secondNum){
  
  if (firstNum > secondNum) {
     console.log(firstNum + " is larger than " + secondNum);
  } else {
      console.log(firstNum + " is less than " + secondNum);
  }
  return;

}

// Lets set two numbers
maxOfTwoNumbers(142,234);


//maxOfThree();

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
function maxOfThree(num1, num2, num3)
{
    var max = Math.max(num1, num2, num3);
    return max;
}

console.log(maxOfThree(30,40,35));


/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
function isCharacterAVowel(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

// See if "A" is a vowel
var char = "A";

if (isCharacterAVowel(char)) {
	console.log(char + " is a vowel");
} else {
	console.log(char + " is not a vowel");
}
//isCharacterAVowel = () => {
  // ADD YOUR CODE HERE
//};

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

//sumArray = () => {
  // ADD YOUR CODE HERE
  function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  console.log(sum([1,2,3,4]));
  function multiply(numbers) {
    var total = 1;
    for (var i = 0; i < numbers.length; i++) {
      total = (total * numbers[i]);
    }
    return total;
  }
  
  console.log(multiply([1,2,3,4]));


/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

//reverseString = () => {
  // ADD YOUR CODE HERE
//};
function reverseString(word) {
	var text = '';
	
	for (var i = word.length - 1; i >= 0; i--) {
	  text += word[i];
	  continue
	}
	return text.toLowerCase();
  }
  console.log(reverseString("Taieb"));

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = () => {
  // ADD YOUR CODE HERE
};

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (array, i) => {
  // ADD YOUR CODE HERE
let b[]
for(a of array){
  if(a.length > i){
    b.push(a)
  }
}
return b
};
console.log(filterLongWords(['apple', 'orange', 'cat', 'pear','dog'], 4))