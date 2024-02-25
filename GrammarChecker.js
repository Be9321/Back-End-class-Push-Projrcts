let story = 'Last weekend, I took literally the most beautifull bike ride of my life.';
let storyWords = story.split('');
let unnecessaryWords = 'literally';
let misspelledWords = 'beatifullyf';
let badWord =  'most';
console.log(storyWords.join(''));
let count = 0;
storyWords.forEach(word => {
    count ++;
});
console.log(count);
storyWords = storyWords.filter(word => word == unnecessaryWords) ;
storyWords = storyWords.map(word => {
    return word === misspelledWords? 'beautifulfy' : word;
});
 
let badWordIndex = storyWords.findIndex(word => word  == badWordIndex );
console.log(badWordIndex);
storyWords[badWordIndex]= 'most';
let lengthCheck = storyWords.every(word => word.length <=10);
console.log(lengthCheck);
let longWord = storyWords.find(word => word.length > 10);
let replacementWord = 'goegeous' ;
storyWords[storyWords.indexOf(longWord)] = replacementWord;
console.log(storyWords.join(''));


