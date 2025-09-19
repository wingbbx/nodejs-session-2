const tbody = document.querySelector("tbody");
const btnCreate = document.querySelector(".create-user");

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetch("/api/v1/users");
  const users = await data.json();

  users.forEach((user) => {
    tbody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td class="text-end">
                    <button class="btn btn-sm btn-warning">Edit</button>
                    <button class="btn btn-sm btn-danger delete-user" data-id=${user.id}>Delete</button>
                </td>
            </tr>
        `;
  });

  document.querySelectorAll(".delete-user").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      const sure = confirm("delete user id = " + id);

      if (sure) {
        fetch("/api/v1/users/" + id, {
          method: "DELETE",
        });

        window.location.reload();
      }
    });
  });
});

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  fetch("/api/v1/users/", {
    method: "POST",
    headers: {
        "content-type" : "application/json"
    },
    body: JSON.stringify({
        name, email
    })
  });
});
