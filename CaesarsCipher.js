function rot13(str) { // LBH QVQ VG!
  let strArr = str.split("");
  let asciiTable = [''];
  let asciiResult=[];
  let strResult=[];
  let a = '';
  let b = '';
  let c= 0;
  for(let i=0;i<strArr.length;i++){
    a = strArr[i];
    b = a.charCodeAt(0);
    asciiTable.push(b);
  }
  asciiTable.shift();
  for (let j=0; j<asciiTable.length;j++){
    c = asciiTable[j];
    if (c >= 65 && c <= 77 ){
      asciiResult.push(c+13);
    } else if(c >= 78 && c <= 90){
      asciiResult.push(c-13);
    } else if(c === 32){
      asciiResult.push(32);
    } else{
      asciiResult.push(c);
    }
  }//Good till here
  for(let i=0; i<asciiResult.length;i++){
    strResult.push(String.fromCharCode(asciiResult[i]));
  }
  let result = strResult.join('');
  //console.log(asciiTable);  
  //console.log(asciiResult);
  //console.log(strResult);
  //console.log(result);
  return result
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
