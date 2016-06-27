//EXCERCISE-1
//Q1
function sum(one,two) {
  var average = (one + two)/ 2;
  return average;
}
sum(2,4);

//Q2
function avg(one,two,three){
  var average = (one + two + three)/ 2;
  return average;
}
avg(2,4,8);

//Q3
function getLength(inQusetion){
  var word = inQusetion;
  return word.length;
}
getLength('lemonade');

//Q4
function greaterThan(one,two){
  if (one < two){
    return true;
  } else {
    return false;
  }
}
greaterThan(9,14);

//Q5
function greet(name){
  var greeting = 'Hello, ' + name;
  return greeting;
}
greet('Jonny');

//Q6
function madlib(wam,bam,fam,ham){
  var message = 'The ' + wam + ' jumped over the ' + bam + ' as the ' + fam + ' laughed at the ' + ham + '.';
  return message;
}
madlib('cow','moon','cat','spoon');

//EXCERCISE2
//Q1
function max(number1,number2){
  if(number1 > number2) {
    return number1;
  } else if (number1 < number2) {
    return number2;
  } else {
    return 'numbers are equal';
  }
}
max(4,8);

//Q2
function maxOfThree(number1,number2,number3){
  if(number1 > number2 && number1 > number3) {
    return number1;
  } else if (number1 < number2 && number2 > number3) {
    return number2;
  } else if (number1 < number3 && number2 < number3){
    return number3;
  } else {
    return 'two or three numbers are equal';
  }
}
maxOfThree(7,-2,17);

//Q3
function vowel(unknown){
  if (unknown === 'i' || unknown === 'e' || unknown === 'a' || unknown === 'o' || unknown === 'u') {
    return true;
  } else {
    return false;
  }
}

//Q4
function translate(word){

  var splitUp = word.split('');

  var newWord = '';
  for(var x = 0; x < splitUp.length; x++) {
    console.log('hi');
    if (splitUp[x] === 'i' || splitUp[x] === 'e' || splitUp[x] === 'a' || splitUp[x] === 'o' || splitUp[x] === 'u') {
      newWord += splitUp[x];
      console.log(newWord);
    } else {
      newWord += splitUp[x] + 'o' + splitUp[x];
      console.log(newWord);
    }
  }
  return newWord;
}

//Q5
function reverse(word){
  return word.split('').reverse().join('');
}
