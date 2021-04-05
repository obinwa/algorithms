
let list = ["Onyeagba", "Chidiebere", "Joshua"];

for(i = 0 ; i <  2 ** list.length ; i++){
  let subSetBinaryArray = (i).toString(2).padStart(list.length,'0').split('');
  let subSet = [];
  for(j = 0; j < subSetBinaryArray.length; j++){
    if(subSetBinaryArray[j] === '1'){
      subSet = subSet.concat([list[j]])
    }
  }
  console.log(subSet);
}


