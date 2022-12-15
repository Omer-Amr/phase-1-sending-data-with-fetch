// Add your code here
function submitData(name, email){
    const configUser = {
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name : name,
            email : email
        })
    }

   return fetch("http://localhost:3000/users", configUser)
    .then((res) => res.json())
    .then((obj) => {
        let idParagraph = document.createElement('p')
        idParagraph.innerHTML = obj.id
        document.querySelector("body").appendChild(idParagraph)
    })
    .catch(function(err){
        let errParagraph = document.createElement('p');
        errParagraph.textContent = err.message;
        document.querySelector("body").appendChild(errParagraph)
    })
   
}
