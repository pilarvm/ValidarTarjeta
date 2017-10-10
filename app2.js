var isValidCard = function(number){
    var result='No es tarjeta valida';
    var perTwo=1;
    var sum=0;

    if(number.length==16){
        var array = number.split("");
        array.reverse();
        var newArray=[];
        
        for(i=0; i<=array.length; i++){
            if (i%2!=0){
              perTwo=array[i]*2;
              if(perTwo>9){
                var twoDigits = (perTwo).toString(); 
                perTwo = parseInt(twoDigits[0]) + parseInt(twoDigits[1]); 

              }
              newArray.push(perTwo);
              sum += perTwo;
            }
          
    }

if(sum % 10 === 0){
    result= 'tarjeta valida :)'    
    }
    }
console.log(newArray)
console.log(sum)
    return alert(result);
}



console.log(isValidCard(prompt()))
