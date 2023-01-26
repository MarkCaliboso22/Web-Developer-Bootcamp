// Exercise 1: Heart Function 
function printHeart(){
    console.log("<3");
}

printHeart()

//Exercise 2: Rant 
function rant(message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}


//Exercise 3: Multiple Args
function isSnakeEyes(roll1, roll2){
    if(roll1 == 1 && roll2 == 1){
        console.log("Snake Eyes!");
    }else{
        console.log("Not Snake Eyes!");
    }
}

//Exercise 4: Return Practice
function multiply(x, y){
    return x*y;
}

//Exercise 5: isShortsWeather Function
function isShortsWeather(temp){
    if (temp >= 75) {
        return true;
    }
    return false;
}

//Exercise 6: Last Element Exercise
function lastElement(array){
    if(array.length === 0){
        return null
    }   
    return array[array.length - 1];
}

//Exercise 7: Capitalise 
function capitalize(str){
    let capStr = str.charAt(0);
    str = str.slice(1);
    let result = capStr.toUpperCase() + str;
    return result;
}

//Exercise 8: Sum Array
function sumArray(numArray){
    let total = 0;
    for(i=0; i<numArray.length; i++){
        total = total+numArray[i];
    }
    return total;
}
//Exercise 9: Days of the Week
function returnDay(day){
    if(day<1 || day>7){
        return null;
    }
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    return week[day - 1];
}