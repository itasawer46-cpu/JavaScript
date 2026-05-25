console.log("Hello World");
let currentsong = new Audio();
let playbtn = document.querySelector(".play-btn");
let play = document.querySelector("#play");
let songinfo = document.querySelector(".song-info");
let songs;
let currfolder;
let index       
function formatToMinutesSeconds(totalSeconds) {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
        return "isvalid input";
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedMinutes}:${paddedSeconds}`;
}

async function getsongs(folder) {
    currfolder = folder;
    let a = await fetch(`http://127.0.0.1:5500/${folder}/`);
    // console.log(a);
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let href = div.getElementsByTagName("a");
    // console.log(href);
    songs = [];
    for (let i = 0; i < href.length; i++) {
        const element = href[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }
        let songUL = document.querySelector(".song-list");
        songUL.innerHTML = "";
    for (song of songs) {
        let li = document.createElement("li");
        songUL.appendChild(li);
        li.innerHTML = li.innerHTML + `<li>
                         <div class="play-section">
                    <i class="fa-solid fa-music"></i>
                    <div class="music-info">
                        <div>${song}</div>
                        <div>Husnain Ali</div>
                    </div>
                    <p>Play Now</p>
                    <img src="play1.svg" alt="play-btn" width="25">
                </div>
                    </li>`;
    }

    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
        playbtn, e.addEventListener("click", () => {
            let info = e.getElementsByTagName("div")[2].innerHTML;
            playMusic(e.getElementsByTagName("div")[2].innerHTML);
            console.log(info);
            songinfo.innerHTML = info;
        })

    })
    
}
function playMusic(song) {
    // let audio = new Audio("/songs/"+song);
    currentsong.src = `/${currfolder}/` + song;
    currentsong.play();
    play.src = "pause.svg"
    // let j =document.querySelector(".song-list").getElementsByTagName("div")[1].firstElementChild.innerHTML;
    // console.log(j) ;
}

async function displayAlbums() {
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
let cardcontainer = document.querySelector(".card-container");
console.log(cardcontainer);


   let array =  Array.from(anchors)
   for (let index = 0; index < array.length; index++) {
    const e = array[index];
    
if(e.href.includes("/songs")){
    // console.log(e.href.split("/").slice(-1)[0]);
    let folder = e.href.split("/").slice(-1)[0];
    console.log(folder);
   let a = await fetch(`http://127.0.0.1:5500/songs/${folder}/info.json`);
// console.log(a);
    let response = await a.json();
    console.log(response);
    cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div class="cards" data-folder="ncs">
                        <img src="/songs/${folder}/cover.jpg" alt="image"
                            class="spotify-image">
                        <h4>${response.title}</h4>
                        <p>${response.description}</p>
                        <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                            class="play-icon">
                            <circle cx="50" cy="50" r="45" fill="#28a745" />
                            <polygon points="40,30 70,50 40,70" fill="black" />
                        </svg>
                    </div>`
}
    }
    // console.log(anchors);
    
}

async function main() {
    songs = await getsongs("songs/cs");
    console.log(songs);

 displayAlbums();

    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "pause.svg"
        }
        else {
            currentsong.pause();
            play.src = "play1.svg";
        }
    })
    currentsong.addEventListener("timeupdate", () => {
        // console.log(currentsong.currentTime, currentsong.duration);S
        document.querySelector(".song-time").innerHTML = `${formatToMinutesSeconds(currentsong.currentTime)} / ${formatToMinutesSeconds(currentsong.duration)}`;
        document.querySelector(".circle").style.left = currentsong.currentTime / currentsong.duration * 100 + "%";
    })
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percen = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percen + "%";
        currentsong.currentTime = ((currentsong.duration) * percen) / 100;
    })
// currentsong = new Audio();
// currentsong.src = songs[0];
    document.querySelector("#hamburg").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
        // document.querySelector(".right").style.filter = "invert(1) brightness(0.5)";
    })
    document.querySelector("#cross").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    })

    document.querySelector("#previous").addEventListener("click", () => {
        
        console.log(currentsong.src);
         index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
        // console.log(song, index);
        if ((index - 1) >= 0) {
            playMusic(songs[index + 1]);
            songinfo.innerHTML = currentsong.src;
        }

    })
    document.querySelector("#next").addEventListener("click", () => {

        index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
        // console.log(song, index);
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1]);
            songinfo.innerHTML = currentsong.src.split("/").slice(-1)[0];
        }
        else{
            playMusic(songs[0]);
        }
    })

    document.querySelector("#range").addEventListener("input",(e)=>{
        let volumn = e.target.value;
        document.querySelector("#para").innerHTML = `${volumn} / 100`;
        currentsong.volume = parseInt(e.target.value)/100;
    })


Array.from(document.getElementsByClassName("cards")).forEach((e)=>{
    e.addEventListener("click",async (it)=>{
     songs = await getsongs(`songs/${it.currentTarget.dataset.folder}`);
    // let item = it.dataset.folder;
    console.log(it.currentTarget);
    })
})

    // var audio = new Audio("/songs/"+songs[0]);
    // audio.play();

    // audio.addEventListener("loadeddata",()=>{
    //     let duration = audio.duration;
    // // let playbar = document.querySelector(".song-time");
    // //     let div = document.createElement("div");
    // //     playbar.appendChild(div);
    // //     div.innerHTML = duration;
    //     console.log(duration)
    // })
}
main();
// document.querySelector("#play-btn").addEventListener("click",()=>{
//     main();
//     // document.querySelector("#play-btn").style.invert(1);
// })
// main();