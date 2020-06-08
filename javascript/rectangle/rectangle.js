// call rectangles
const fs = require("fs");
const r1 = fs.readFileSync("./" +process.argv[2],"utf8").split('\n').filter(el => el != "").map(el=>el.split(''));
const r2 = fs.readFileSync("./" +process.argv[3],"utf8").split('\n').filter(el => el != "").map(el=>el.split(''));

//rectangle 1 in number fomrat
let toFindRectangle = []
for(let i = 0; i < r1.length;i++){
    for(let j = 0; j < r1.length; j++){
        toFindRectangle+=r1[i][j];
    }
}

//compare function
const sameArray = function(array1,array2){
   for(let i = 0; i < array1.length;i++){
       for(let j = 0; j < array2.length;j++){
           if(array2[i][j]!=array1[i][j]){
               return false;
           }
       }
   }
   return true;
}

//Begin
let startPosition = [0,0];
let selectedRectangle = [];
let numberOfRectangles = (r2.length-r1.length+1)*(r2[0].length-r1[0].length+1);
let counter = 0;
do{
for(let i=startPosition[0];i < r1.length+startPosition[0];i++){
    for(let j=startPosition[1];j < r1.length+startPosition[1];j++){
    selectedRectangle+=r2[i][j];
    }
}

if(sameArray(selectedRectangle,toFindRectangle)){
    console.log("The rectangel is found in position: "+startPosition)
    break;
}
else{
    selectedRectangle="";
    startPosition[1]++;

    if(startPosition[1] == r2[0].length-r1[0].length+1){
        startPosition[0] += 1;
        startPosition[1] = 0;
        if(startPosition[0] == r2.length-r1.length+1){
            console.log("Rectangle is not found")
        } 
    }
    counter++;
}
}while(counter!=numberOfRectangles);

//Eind

