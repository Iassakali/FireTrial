let arrayNumbers = process.argv.slice(2).map(el=>{return el=parseInt(el)});

function arraySort(array){

for(i = array.length-1; i>=1;i--){
    let position = i;
    let max = array[i];
    for(j = i-1;j>=0;j--){
       if(array[j]>max){
           position = j;
            max = array[j];
       }
       array[position]=array[i];
       array[i]=max;
    }
}
return array;
}
console.log(arraySort(arrayNumbers));