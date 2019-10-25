function telephoneCheck(str) {
  let regFirst = /^(1\s?)/; //return "00 555-5555"
  let regSecond = /^(1\s?)?(\(\d{3}\)|d{3})/ //returns "00 555-5555"
  let regThird = /^(1\s?)?(\(\d{3}\)|d{3})[\s\-]?\d{3}/ //returns "00-5555"
  let regFourth = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/ //returns "00"
  return !!str.match(regFourth);
  
  // Good luck!
  //console.log(newStr);
}

telephoneCheck("555-555-5555");
