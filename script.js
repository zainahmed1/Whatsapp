
document.addEventListener("DOMContentLoaded", function(event) {

    function ground() {
  
      var tl = new TimelineMax({
        repeat: -1
      });
  
      tl.to("#ground", 20, {
          backgroundPosition: "1301px 0px",
          force3D:true,
          rotation:0.01,
          z:0.01,
          autoRound:false,
          ease: Linear.easeNone
        });
  
      return tl;
    }
  
    function clouds() {
  
      var tl = new TimelineMax({
        repeat: -1,
      });
  
      tl.to("#clouds", 52, {
        backgroundPosition: "-2247px bottom",
        force3D:true,
        rotation:0.01,
        z:0.01,
        //autoRound:false,
        ease: Linear.easeNone
      });
      
      return tl;
    }
  
    var masterTL = new TimelineMax({
        repeat: -1.
    })
    
  window.onload = function() {
    
    masterTL
    .add(ground(),0)
    .add(clouds(),0)
    .timeScale(0.7)
    .progress(1).progress(0)
    .play();
  
  };
    
  });


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
            <button>${messages.numbUnread}</button>
            <p>${messages.time}</p>
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
   