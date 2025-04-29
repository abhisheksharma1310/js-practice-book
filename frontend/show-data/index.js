const url = "https://jsonplaceholder.typicode.com/users";
let data = [];

const fetchData = async () => {
  try {
    const reponse = await fetch(url);
    data = await reponse.json();
    data.length > 0 ? displayData() : console.log("No data found");
    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData();

function displayData() {
  const table = document.createElement("table");
  table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
        </tr>
        ${data
          ?.map((user) => {
            return `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                </tr>`;
          })
          .join("")}`;
  document.body.appendChild(table);
}
