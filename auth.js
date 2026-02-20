//auth.js : Authentication module
// REF: class lecture material
//REF: Node.js modules , https://nodejs.org/api/modules.html
//REF: https://www.w3schools.com/js/js_modules.asp

// REF: https://www.w3schools.com/js/js_arrays.asp
//REF: https://www.w3schools.com/js/js_array_methods.asp
//create an array to store user data 
const users = [
    // Adding user verification, setting username as user email and password verification.
    //Username and password are defined as two objects within the array.
    {username: "user@123.com", password: "pass"}
];


// Function which creates new user.
//REF: https://www.w3schools.com/js/js_functions.asp
//REF: https://www.w3schools.com/jsref/jsref_push.asp
   function createUser(username, password) {
//Checking if current user exists using array.find
const currentUser = users.find(user => user.username === username);

// if current user does not exsit, add the new user to the array.
   if (!currentUser)  {
    users.push({username, password});
    console.log("new user created !", username);
    console.log("current users",  users);
    return true;
   }
   else {
    //if user already exists output to console
    console.log("User already exists", username);
    return false;
   }
      // users.push({username, password});
      // console.log(users);
}



function authenticateUser(username, password){
//find the user by user name(email) in the array
const user = users.find(user => user.username ===username);
//Return true if user name and password matches, otherwise return false
if(!user || user.password !== password ){
    return false;
}
return true;


}
//export module to be used by index.js 
module.exports = { createUser, authenticateUser };