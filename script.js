


let handleSucess = function (response) {
    console.log("SUCESS!!");
    console.log(response);
    for (let i = 0; i < response.data.length; i++) {
        let messages = response.data[i];
        document.querySelector("ul").innerHTML +=
        `<li>
        <div id="info">
            <div id="img">
                <img src = ${messages.profilePic} id="flower">
            </div>
            <div id="details">
                <h3>${messages.name}</h3>
                <p>${messages.number}</p>
                <p>${messages.firstLine}</p>            
              </div>  
            </div>
            <div id="time">
            <p>${messages.time}</p>
            <span id = "span">${messages.numbUnread}</span>
            </div>
        </li>`
        
    }
}

let handleError = function (error) {
    console.log("ERROR!!!!!!! :'-[ ");
    console.log(error);
}

let finishUp = function () {
    console.log("THE END!");
}




axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(handleSucess)
    .catch(handleError)
    .finally(finishUp)
   