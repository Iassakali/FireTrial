let word = process.argv[2];

const fs = require("fs");
const wordsInRepo =  fs.readFileSync("./" +process.argv[3],"utf8").split('\n').filter(el => el != "");

let anagramme = "";
let amountSameLetters = 0;

for(let i = 0; i < wordsInRepo.length; i++){
    if(wordsInRepo[i] == word){continue;}
    for(let j = 0; j < word.length;j++){
        if(word.includes(wordsInRepo[i][j])){
            amountSameLetters+=1;
        }
        else{
            amountSameLetters=0;}

    }
    if(amountSameLetters == wordsInRepo[i].length){
        anagramme = wordsInRepo[i];
        break;
    }
}

console.log([word,anagramme])