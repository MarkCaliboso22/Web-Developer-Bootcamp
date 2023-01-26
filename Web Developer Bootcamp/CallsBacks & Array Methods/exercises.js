//Exercise 1: Filter Exercise
function validUserNames(usernames) {
    return usernames.filter(function(username){
        return username.length < 10;
    })
  }

 //Exerience 2: Some/Every Exercise
 function allEvens(nums){
    const isAllEven = nums.every(num => num % 2 === 0)
    return isAllEven
}

//