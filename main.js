console.log("connected! ! !");
console.log("Adding COMMENT Features!");

function fetchData(){
    fetch('https://reqres.in/api/users')
    .then(response=>{
        if(!response.ok){
            throw Error("Error1");
        }
        return datadata = response.json();
    })
    .then(data=>{
        console.log(data.data);
        const html = data.data.map(user=>{
            return `
            <div class="user">
            <p><img src="${user.avatar}" alt="${user.first_name} ${user.last_name} Photo"></p>
            <p>Name: ${user.first_name} ${user.last_name}</p>
            <p>Email: ${user.email}</p>
            </div>
            `;
        })
        .join("");
        // console.log(html);
        document
        .querySelector('#app')
        .insertAdjacentHTML("afterbegin",html);
    })
    .catch(error =>{
        console.log(error);
    });
}

fetchData();