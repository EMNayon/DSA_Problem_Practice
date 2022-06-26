let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    
    console.log(userObj.hasOwnProperty(''));
    console.log('Alan' in userObj)
    console.log(userObj in userObj);

    if(!(userObj.hasOwnProperty(userObj))) return false

    
else if ('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj) return true 
    // else if('Alan' in userObj) return true 
    // else if('Jeff' in userObj) return true 
    // else if('Sarah' in userObj) return true
    // else if('Ryan' in userObj) return true 
    else return false
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));