let friends = document.querySelector(".friendshipupdate");
let addbtn = document.querySelector(".addbtn");

let flag=0;
addbtn.addEventListener("click", function() {
   if(flag===0){
        friends.innerHTML ="Friends"
        friends.style.color ="green"
        addbtn.innerHTML='Remove Friend'
        addbtn.style.color ="black"
        addbtn.style.backgroundColor ="rgb(213, 210, 210)"
        flag=1
    }
    else{
        friends.innerHTML ="Stanger";
        friends.style.color ="red";
        addbtn.innerHTML='Add Friend'
        addbtn.style.color ="white"
        addbtn.style.backgroundColor ="rgb(11, 179, 117)"
        flag=0;
    }
    
    
});
