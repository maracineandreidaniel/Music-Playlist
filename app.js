let buton=document.querySelector('.adauga');
let rockSongs=document.querySelector('.rock');
let popSongs=document.querySelector('.pop');
let raggaeSongs=document.querySelector('.raggae');
let rocks=[];
let raggs=[];
let pops=[];




buton.addEventListener('click', ()=>{
    let nm=prompt("introdu nume");
    let art=prompt("introdu artist");

    

    let song=findSong(art,nm);

    if(song===false){
        alert("cantecul nu a fost gasit");
    }
   

    if(song.genre==="rock"){
        addRock(rocks,song);
        rockSongs.innerHTML=arrayToString(rocks);
    }
    else if(song.genre==="raggae"){
        addRaggae(raggs,song);
        raggaeSongs.innerHTML=arrayToString(raggs);
    }
    else if(song.genre==="pop"){
        addPop(pops,song);
        popSongs.innerHTML=arrayToString(pops);
    }




});

