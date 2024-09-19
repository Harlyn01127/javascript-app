let loginForm = document.getElementById("userForm");

loginForm.addEventListener("sumbit", (e) =>{
e.preventDefault;

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let email = document.getElementById("email").value;
let hobbies = document.getElementById("hobbies").value;

const user = {
    name: name,
    age: age,
    email: email,
    hobbies: hobbies,
  };

  const jsonOutput = JSON.stringify(user);
  console.log(user);
  console.log(JSON);
  document.getElementById("jsonOutput").textContent = jsonOutput;
  document.getElementById("userForm").reset();

});
