const fs = require("fs");
const sudoku = fs.readFileSync("./" +process.argv[2],"utf8").split('\n')//.filter(el => el != ""||el!='1').map(el=>el.split(''));


let amountOfUnderscores = 0;
let verticalLineAdress = [];
let verticalLine = []

for(let i = 0;  i < sudoku.length;i++){
   
    //counts the amount of underscores("_") per horizontal line
    for(let j = 0; j < sudoku[i].length ; j++){
        if(sudoku[i][j]=="_"){
            amountOfUnderscores+=1;

        }
    } 
    
    //saves horizontal line adress with underscores
    if(amountOfUnderscores>1){
        amountOfUnderscores = 0;

        while(sudoku[i].includes("_")){
        verticalLineAdress.push(sudoku[i].indexOf("_"));
        sudoku[i] = sudoku[i].replace("_","x")
        }
        continue;
    }
    
    //resolves the horizontalLine with 1 underscore
    else{
       //find correspond number
       amountOfUnderscores = 0;
       for(let k = 1; k <= sudoku[i].length-2; k++){
           if(sudoku[i].includes(k)){
               continue;
           }
           else{
              sudoku[i] = sudoku[i].replace("_",k);
              break;
           }
       }
    }

}

for(let j = 0; j < verticalLineAdress.length; j++){
    for(let i = 0; i < sudoku.length; i++){
        verticalLine += sudoku[i][verticalLineAdress[j]];
    } 
    for(let k = 1; k <= verticalLine.length-2; k++){
        if(verticalLine.includes(k)){
            continue;
        }
        else{
            verticalLine = verticalLine.replace("x",k);
            break;
        }
    } 
    for(let i = 0; i < sudoku.length; i++){
        sudoku[i] = sudoku[i].replace(sudoku[i][verticalLineAdress[j]],verticalLine[i]);
    } 
     verticalLine = [];
}



console.log(sudoku);