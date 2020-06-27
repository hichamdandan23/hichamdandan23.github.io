  /* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

  function myFunctionTest2(expected, found) {
    if(JSON.stringify(expected)==JSON.stringify(found)) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

  function myFunctionTestAssert(expected, found)
  {
    const errorMsg = "TEST FAILED.  Expected " + expected + " found " + found;
        console.assert(expected === found, {errorMsg: errorMsg});
  }

  function myFunctionTestAssert2(expected, found)
  {
    const errorMsg = "TEST FAILED.  Expected " + expected + " found " + found;
        console.assert(JSON.stringify(expected)==JSON.stringify(found), {errorMsg: errorMsg});
  }
  
  /* max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  /* Test using console.assert() when the assertion is true*/
  console.log("Expected output of max(20,10) is 20  "); myFunctionTestAssert(20, max(20, 10));
  /* Test using console.assert() when the assertion is false*/
  console.log("Expected output of max(20,10) is 15  "); myFunctionTestAssert(20, max(15, 10));
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }
  
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
  /* Test using console.assert() when the assertion is false*/
  myFunctionTestAssert(4, maxOfThree(55, 4, 44));
 
  
  function isVowel(character)
  {
    let vowels = ['a', 'e', 'u', 'i', 'o', 'y'];

    for(vowel in vowels)
    {
        if(character === vowels[vowel]) return true;
    }
        
    return false;
  }

  console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
  console.log("Expected output of isVowel('h') is false  " + myFunctionTest(false, isVowel('h')));

   /* Test using console.assert() when the assertion is false*/
    myFunctionTestAssert(true, isVowel('h'));

  const a = [1,3,5,3,3]; 

  function sum(numbers)
  {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    return sum;
  }

  console.log("Expected output sum(numbers) is 15  " + myFunctionTest(15, sum(a)));
  /* Test using console.assert() when the assertion is false*/
   myFunctionTestAssert(14, sum(a));

  function multiply(numbers)
  {
    let total = 1;
    for(let i = 0; i < numbers.length; i++)
    total *= numbers[i];
    return total;
  }

  console.log("Expected output multipy(numbers) is 135 " + myFunctionTest(135, multiply(a)));
  /* Test using console.assert() when the assertion is false*/
  myFunctionTestAssert(130, multiply(a));

  function reverse(str){
    if (str === "")
        return "";
    return reverse(str.substr(1)) + str.charAt(0);
  }

  console.log("Expected output reverse('hicham') is mahcih " + myFunctionTest("mahcih", reverse("hicham")));
  /* Test using console.assert() when the assertion is false*/
  myFunctionTestAssert("mahich", reverse("hicham"));

  function findLongestWord(words)
  {
    let longWord = "";
    for(let i = 0; i < words.length; i++)
    {
        if(words[i].length > longWord.length) longWord = words[i];
    }
    return longWord.length;
  }

  let words = ["hicham", "dandan", "Mohammed", "Yassin", "Adam"];

  console.log("Expected output findLongestWord(words) is 8 " + myFunctionTest(8, findLongestWord(words)));
  /* Test using console.assert() when the assertion is false*/
  myFunctionTestAssert(9, findLongestWord(words));

  function filterLongWords(words, i)
  {
      let longWords = [];
      let index = 0;
    for(let j = 0; j < words.length; j++)
    {
        if(words[j].length > i) 
        {
            longWords[index++] = words[j];
        }
    }
    return longWords;
  }

  console.log("Expected output filterLongWords(words, 6) is Mohammed " + myFunctionTest2(["Mohammed"], filterLongWords(words, 6)));
  myFunctionTestAssert2(["Mohammed"], filterLongWords(words, 4));

const multipyElementBy10 = a.map(function(elem, i, array) {
  return elem * 10;
});

console.log("Expected output multipyElementBy10 is 10,30,50,30,30 " + myFunctionTest2([10,30,50,30,30], multipyElementBy10));
myFunctionTestAssert2([10,30,50,30], multipyElementBy10);

const allElementEquals3 = a.filter(function(elem, i, array){
  return elem === 3;
});

console.log("Expected output allElementEquals3 is 3,3,3 " + myFunctionTest2([3,3,3], allElementEquals3));
myFunctionTestAssert2([3,3,3,3,3], allElementEquals3);

const productAllElements = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});

console.log("Expected output productAllElements is 135 " + myFunctionTest(135, productAllElements));
myFunctionTestAssert2(130, productAllElements);