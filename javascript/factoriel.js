let number = process.argv[2];

function factoriel(number){
    if(number==1){
        return 1;
    }
    return number*factoriel(number-1);
}
let result = factoriel(number);

console.log(result);