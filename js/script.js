const params =
new URLSearchParams(window.location.search);


let sender = params.get("from");
let receiver = params.get("to");
let type = params.get("type") || "proposal";

if (sender && receiver) {
    document.getElementById("name-display").style.display = "block";
    document.getElementById("name-inputs").style.display = "none";
    document.getElementById("sender").innerHTML = sender;
    document.getElementById("receiver").innerHTML = receiver;
} else {
    document.getElementById("name-display").style.display = "none";
    document.getElementById("name-inputs").style.display = "flex";
}


function startJourney(){

    if (!sender || !receiver) {
        sender = document.getElementById("input-sender").value;
        receiver = document.getElementById("input-receiver").value;
        
        if(!sender || !receiver){
            alert("Please enter both names ❤️");
            return;
        }
    }


document.body.style.opacity="0";


setTimeout(()=>{
    window.location.href = `pages/8billion.html?from=${encodeURIComponent(sender)}&to=${encodeURIComponent(receiver)}`;
},1000);

}