// TODO: add your solutions here!

function concatenate(firstWord, secondWord){
   return firstWord + secondWord 
}


function repeatPhrase(phrase, n) {
	for(var i = 0; i < n; i++) {
		console.log(phrase);
	}
}

function numberPower(number, power){
    var result = 1;
 for (i = 1; i <= power; i++){
result *= number;
 } 
 return result;  
}

function areaOfCircle(radius){
    return Math.PI * radius * radius;
}

function pythagoreanTheorem(a, b){
    return((a * a) + (b * b))
}


function IsEvenlyDivisible(x, y){
    if (x % y === 0){
        return true;
    } else {
        return false;
    }
}


function countVowel(word){
    var count = word.match(/[aeiou]/gi);
    return count === null ? 0 : count.length; 
}

function isContainWdi(arr){
  for (i = 0; i < arr.length; i++){
      if (arr[i] === "wdi"){
          return true;
      } 
  } 
  return false; 
}



function longestWord(sentence){
    var words = sentence.split(" ");
    var maxLength = 0;
    var longWord;
    for (var i = 0; i < words.length; i++){
        var length = words[i].length;
        if (maxLength < length){
            maxLength = length;
            longWord = words[i];
        }
    }
    return longWord
}

function traingle(number){
  for (var i = 1; i <= number; i++){
     var star = "";
     for (var j = 0; j < i; j++){
         star += "* ";
}

console.log(star)
  }  
}

function pyramid(number){
  for (var i = 1; i <= number; i++){
     var star = "";
     for (var j = number - i; j > 0; j--){
         star += " ";
}
for (var k = 0; k < i; k++){
    star += "* "
}

console.log(star)
  }  
}
