const userForm = document.getElementById("registration-form");

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Retrieve existing user details array from local storage
  let userDetailsArray =
    JSON.parse(localStorage.getItem("userDetailsArray")) || [];

  // Extract form data
  const formData = {
    username: document.getElementById("username").value, // Update to username
    phone: document.getElementById("phone").value,
    password: document.getElementById("password").value, // Add password if needed
  };

  // Push new user details to the array
  userDetailsArray.push(formData);

  // Store the updated array in local storage
  localStorage.setItem("userDetailsArray", JSON.stringify(userDetailsArray));

  // Redirect to the next page or display the user details
  window.location.href = "user-details.html";
});

// NEW

// Check if the user is logged in
// const username = sessionStorage.getItem('username');
// const password = sessionStorage.getItem('password');
// const registeredUsername = sessionStorage.getItem('registeredUsername');

// if (!username || !password) {
//   // Redirect to the login page if the user is not logged in
//   window.location.href = 'login.html';
// } else {
//   // User is logged in, proceed with the user detail form
//   const userForm = document.getElementById("user-form");

//   userForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     // Retrieve existing user details array from local storage
//     let userDetailsArray = JSON.parse(localStorage.getItem("userDetailsArray")) || [];

//     // Extract form data
//     const formData = {
//       registeredUsername: registeredUsername,
//       Username: document.getElementById("username").value,
//       Phone: document.getElementById("phone").value,

//     };

//     // Push new user details to the array
//     userDetailsArray.push(formData);

//     // Store the updated array in local storage
//     localStorage.setItem("userDetailsArray", JSON.stringify(userDetailsArray));

//     // Redirect to the user details page
//     window.location.href = "user-details.html";
//   });
// }
