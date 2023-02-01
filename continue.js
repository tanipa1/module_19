var numbers = [8, 7, 6, 5, 4, 3, 2, 1, 0, 51, 55, 60];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}