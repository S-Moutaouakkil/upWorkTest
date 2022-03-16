function getLongestWord(sentence){
	sentence.replace("[,.]")
	let words = sentence.split(" ");
  let indexLongest = 0, lenLongest=0, numberVoyelLongest=0;
  words.forEach(handleWord);

  function handleWord(value, index, arr){
  	let numberVoyel=0,len =0,word="";
    for (i=0;i<value.length;i++){
    	if(value[i].search(/[a-z]/i)>-1){
      	len++;
        word+=value[i];
      	if(value[i].search(/[aeiouy]/i)>-1)numberVoyel++;
      }
    }
    if(len>lenLongest || (len==lenLongest && numberVoyel>numberVoyelLongest)){
    	lenLongest=len;
    	numberVoyelLongest = numberVoyel;
      indexLongest=index;
      arr[index]=word;
    }
  }
  return words[indexLongest];
}

text = "some text"
console.log(getLongestWord(text))