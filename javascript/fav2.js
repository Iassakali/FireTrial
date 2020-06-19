let number = process.argv[2].toString();
let result = factoriel(number);
console.log(result)

function factoriel(number){
    if(number === "0"){
        return "1";
    }
    return calculString(number,factoriel(parseInt(number -1).toString()));
}


function calculString(number1,number2){
    //first number longer or even than seconde number
    if(number1.length < number2.length){
        let temp = number1;
        number1 = number2;
        number2 = temp;
    }
    
    //set in array
    if(number1.length>1){
        number1 = number1.split(""); 
    } 
    if(number2.length>1){
        number2 = number2.split("");   
    }
     
    //make sumfield
    let sumField = [];
    let dizaine = 0;
    let unité;
    //first loop select below number
    for(let i = 0; i < number2.length; i++){
        sumField.push([]);
        if(i > 0){
            for(let nulToPlace = i ; nulToPlace > 0; nulToPlace--){
                sumField[i].unshift("0")
            }
        }

        for(let j = 0; j < number1.length; j++){
            
            let multiplication = number1[number1.length -1 -j] * number2[number2.length -1 -i];
            if(dizaine != 0){
                multiplication += dizaine;
                dizaine = 0;
            }

            
            unité = multiplication % 10;
            dizaine = Math.floor(multiplication / 10);
            sumField[i].unshift(unité.toString());
            if(j == number1.length - 1 && dizaine !=0){
                sumField[i].unshift(dizaine.toString())
            }
            
        }
        dizaine = 0;
    }

    
    //egaliser les grides
    let maxLengthGrid = 0;
    for(let i = 0; i < sumField.length ; i++){
        if(sumField[i].length > maxLengthGrid){
            maxLengthGrid = sumField[i].length;
        }
    }

    for(let i = 0; i < sumField.length ; i++){
        while(sumField[i].length < maxLengthGrid){
            sumField[i].unshift("0");
        }
    }
    
    //faire la somme
    dizaine = 0;
    unité = 0;
    let resultfield = [];
    let sum = 0;

    for(let i = maxLengthGrid-1; i >= 0; i--){
        for(let j = sumField.length -1 ; j >= 0; j--){
            sum += parseInt(sumField[j][i]);
        }

       sum+=dizaine;
        
        unité = sum % 10;
        dizaine = Math.floor(sum / 10);
        resultfield.unshift(unité.toString());
        if(i == 0 && dizaine !=0){
            resultfield.unshift(dizaine.toString());
            dizaine = 0;
        }
        sum = 0;
    }
  
    return resultfield.join("")
}