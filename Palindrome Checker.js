function palindrome(str) {
  // Good luck!
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let strArr = str.split("");
  let newStrArr = [];
  for(let i=0;i<=strArr.length;i++){
      newStrArr[i]=strArr[strArr.length -i];
  }
  newStrArr = newStrArr.filter((obj) => obj );
  let newStr = newStrArr.join('');

  if(newStr === str){
    return true;
  }else{
    return false;
  }
}



palindrome("eye");
