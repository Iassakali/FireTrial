let number = process.argv[2];
var answer = "";
for(let i = 1; i <= number;i++){
   /*for(let space = 1; space < number-i;space++){
       answer+=" ";
   }
      for(let star = 0; star <= i;star++){
       answer+="#"
   }
   answer+="\n"*/
   answer+=" ".repeat(number-i); 
   answer+="#".repeat(i);
   answer+="\n";
}
console.log(answer);
