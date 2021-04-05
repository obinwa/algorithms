
let array = [1,7,1,1,1,1];
let [indexL,largest] = getlargestNumber(array);
let minJumps = Number.MAX_VALUE;

for(i = 0; i < 2 ** array.length; i++){

  let subSetBinaryArray = (i).toString(2).padStart(array.length,'0').split('');
  let index = indexL;
  let number = largest;

  for(j = 0; j < subSetBinaryArray.length; j++){
    if(number === largest && j > 0 && j < minJumps){
      minJumps = j;
    }
    
    if(subSetBinaryArray[j] === '1'){
      index = (index + number)% array.length;
      number = array[index];
    }
    else{
      index = Math.abs((index - number + array.length)%array.length);
      number = array[index];
    }
    console.log(`array is ${subSetBinaryArray} , number is ${number}, index is ${index}, minjumps = ${minJumps} , j = ${j}\n`);
  }
}

console.log(minJumps);

function getlargestNumber(arrayOfNumbers){
  let largest = arrayOfNumbers[0];
  let index = 0;
  for(i = 1; i < arrayOfNumbers.length; i++){
    if(arrayOfNumbers[i] > largest){
      index = i;
      largest = arrayOfNumbers[i];
    }
  }
  return [index,largest];
}