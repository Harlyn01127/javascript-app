let loginForm = document.getElementById("userForm");

loginForm.addEventListener("sumbit", function(event){
event.preventDefault();

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let email = document.getElementById("email").value;
let hobbies = document.getElementById("hobbies").value;

const user = {
    name: name,
    age: age,
    email: email,
    hobbies: hobbies
  };

  const myJSON = JSON.stringify(user, null, 2);
  document.getElementById("jsonOutput").innerHTML = user;
  console.log("myJSON");
});
