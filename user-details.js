document.addEventListener("DOMContentLoaded", function () {
  const userDetailsArray =
    JSON.parse(localStorage.getItem("userDetailsArray")) || [];

  const userDetailsTableBody = document.getElementById(
    "user-details-table-body"
  );

  userDetailsArray.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.phone}</td>
      <td><button onclick="deleteUser('${user.username}')">Delete</button></td>
    `;
    userDetailsTableBody.appendChild(row);
  });
});

function deleteUser(username) {
  let userDetailsArray =
    JSON.parse(localStorage.getItem("userDetailsArray")) || [];
  userDetailsArray = userDetailsArray.filter(
    (user) => user.username !== username
  );
  localStorage.setItem("userDetailsArray", JSON.stringify(userDetailsArray));
  location.reload();
}
