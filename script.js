async function getAllUsers() {
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const users = await data.json();

    const userContainer = document.querySelector(".user-container");

    users.forEach((user) => {
        userContainer.innerHTML += `
       
       <div class="user-list">
       <div class="details">
       <h1>Name: ${user.name}</h1>
       <h2>address-2: ${user.address - 2}</h2>
       <h2>address-3: ${user.address - 3}</h2>
       <h2>phone: ${user.phone}</h2>
       <h2>Type: ${user.brewery_type}</h2>
       </div>
       </div>
       `;
    })
    console.log(users);
}

getAllUsers();


// GET
// fetch('https://api.openbrewerydb.org/breweries')
//  .then(res=> res.json())
//  .then(data=> console.log(data))


// <h2>Country: ${user.country}</h2>
// <h2>City: ${user.city}</h2>
