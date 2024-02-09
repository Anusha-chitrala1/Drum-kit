var numberofDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHtml=this.innerHtml;

        makesound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
    TrackEvent.addEventListener("timeupdate",songTimeUpdate)
});

function makeSound(key){

    switch(key){

         case "A":
         var Kamariya =new Audio("Kaun Tujy Music Ringtone.mp3");
         Kamariya.play();
         break;

         case "S":
         var Kaun =new Audio("Leja Re Music Ringtone.mp3");
         Kaun.play();
         break;

         case "C":
         var leja =new Audio("Vaaste Song Music Ringtone.mp3");
         leja.play();
         break;

         case "N":
         var Galliyan =new Audio("Galliyan Song Music Ringtone.mp3");
         Galliyan.play();
         break;

         case "H":
         var Sanam =new Audio("Sanam Re Music Ringtone.mp3");
         Sanam.play();
         break;

         case "A":
         var Saiyaara =new Audio("Saiyaara Music Ringtone.mp3");
         Saiyaara.play();
         break;

         case "U":
         var Maari=new Audio("Maari 2 Music Ringtone.mp3");
         Maari.play();
         break;

         default:console.log(key);

    }
}

function buttonAnimation(currentkey){
     
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){

        activeButton.classList.remove("pressed");
    },100);
}

//update current song time
 
function songTimeUpdate(){

    if(track.duration){
    let curmins = math.floor(track.currentTime /60)
    let cursecs = math.floor(track.currentTime-Currentmins*60);

    let durmins = math.floor(track.duration /60)
    let dursecs = math.floor(track.duration-durmins*60);

    
    if(dursecs<10){
        dursecs = "0" + dursecs;
    }

        if(durmins<10){
            durmins = "0" + durmins;
        }
            if(cursecs<10){
                cursecs = "0" + cursecs;
            }
         if(curmins<10){
            curmins = "0" +curmins;
         }
  trackCurrentTime.innerHtml=curmins + ":" + cursecs;
  trackduration.innerHtml=durmins + ":" + dursecs;
    }else{
        trackCurrentTime.innerHtml ="00" + ":" + "00";
        trackduration.innerHtml="00" + ":" + "00";

    }

}