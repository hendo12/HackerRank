vowelLoop();


function vowelsAndConsonants(s) {

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsArray = [];
  let consonantsArray = [];

  for(let i = 0; i < s.length; i++){
    if (vowels.indexOf(s[i]) > -1) {
      vowelsArray.push(s[i]);
    } else {
      consonantsArray.push(s[i]);
    }
  }
  
  for (let i = 0; i < vowelsArray.length; i++) {
    console.log(vowelsArray[i]);
  }
  for (let i = 0; i < consonantsArray.length; i++) {
    console.log(consonantsArray[i]);
  }
}
 

