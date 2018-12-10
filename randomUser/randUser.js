let url = `https://randomuser.me/api`;
let fullName = document.getElementById("fullname");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let city = document.getElementById("city");
let avatar = document.getElementById("avatar");
let btn = document.getElementById("btn");

btn.addEventListener(`click`, function(){
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);

});

function updateProfile(data){
    data = data.results[0];
    fullName.innerText = `${data.name.first} ${data.name.last}`;
    username.innerText = data.login.username;
    email.innerText = data.email;
    city.innerText = data.location.city;
    avatar.setAttribute("src", data.picture.large);
}

function parseJSON(res){
    return res.json();
}

function handleErrors(res){
    if(!res.ok){
        throw Error("Error with initial fetch");
    }
    console.log("fetching user");
    return res;
}

function printError(error) {
    console.log(error);
}