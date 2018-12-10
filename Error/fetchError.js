btn = document.querySelector(`button`);

btn.addEventListener(`click`, function(){
    let url = `https://api.github.com/users/lwenzel90`;
    fetch(url)
    .then(function(res){
        if(!res.ok){
            console.log(`error with res status`);
            throw Error(404);
        }
        return res.json();
    }) 
    .then(function(data){
        console.log(`Request came back fine!`);
        for(let i in data){
            console.log(i);
        }
        console.log(data.repos_url);
    })
    .catch(function(error){
        console.log(error);
        alert('invalid url');
    })
});