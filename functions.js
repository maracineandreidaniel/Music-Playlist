let arrayToString=(arr)=>{
    let txt="";
    for(let i=0;i<arr.length;i++)
        txt+=arr[i];
    return txt;
};

let addRock=(arr,obj)=>{
        arr.push(` <section class="rockSong song">
        <p>${obj.name}</p>
        <p>${obj.artist}</p>
        <p>${obj.album}</p>
    </section>`);
};


let addPop=(arr,obj)=>{
    arr.push(` <section class="popSong song">
    <p>${obj.name}</p>
    <p>${obj.artist}</p>
    <p>${obj.album}</p>
</section>`);
};

let addRaggae=(arr,obj)=>{
    arr.push(` <section class="raggaeSong song">
    <p>${obj.name}</p>
    <p>${obj.artist}</p>
    <p>${obj.album}</p>
</section>`);
};

let findSong=(art,nam)=>{
    let cnt=0;
    

    for(let i=0;i<songs.length;i++)
        if(songs[i].name===nam && songs[i].artist===art)
            return songs[i];
            else{
                cnt++;
            }
        if(cnt===songs.length)
            return false;

};