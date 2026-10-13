function createStory(){


let sender =
document.getElementById("sender").value;


let receiver =
document.getElementById("receiver").value;


let story =
document.getElementById("story").value;



if(sender==="" || receiver===""){

alert("Please enter both names ❤️");

return;

}



let link = 
`index.html?from=${sender}&to=${receiver}&type=${story}`;



alert(
"Your story is ready ❤️\n\n"+link
);


window.location.href = link;


}