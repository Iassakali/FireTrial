let txt = process.argv[2];

let result = "";
let decider = 2;
let decider2 = 1;
for(let i = 0; i < txt.length; i++){
   if(txt[i] == " "){
       decider+=1;
       decider%2?decider2=0:decider2=1;
    }
    if(i%2==decider2){
        result+=txt[i].toUpperCase();
    }
    else{
        result+=txt[i].toLowerCase();
    }
}
console.log(result)