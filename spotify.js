Console.log("Hello World");
let currentsong = new Audio();
let playbtn = document.querySelector(".play-btn");
let play = document.querySelector("#play");
let songinfo = document.querySelector(".song-info");
let songs;
let currfolder;
let index;

function formatToMinutesSeconds(totalSeconds) {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
        return "00:00"; // Invalid input ki jagah default time return kiya taake playbar kharab na ho
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedMinutes}:${paddedSeconds}`;
}

async function getsongs(folder) {
    currfolder = folder;
    // GitHub Pages aur local dono ke liye relative fetch path
    let a = await fetch(`${folder}/`);
    let response = await a.text();
    
    let div = document.createElement("div");
    div.innerHTML = response;
    let href = div.getElementsByTagName("a");
    
    songs = [];
    for (let i = 0; i < href.length; i++) {
        const element = href[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }
    
    let songUL = document.querySelector(".song-list");
    songUL.innerHTML = "";
    
    for (let song of songs) {
        let li = document.createElement("li");
        // Gaane ka naam dikhane ke liye clean HTML structure
        li.innerHTML = `<div class="play-section">
                    <i class="fa-solid fa-music"></i>
                    <div class="music-info">
                        <div>${decodeURIComponent(song)}</div>
                        <div>Husnain Ali</div>
                    </div>
                    <p>Play Now</p>
                    <img src="play1.svg" alt="play-btn" width="25">
                </div>`;
        songUL.appendChild(li);
    }

    // Har gaane par click event setup karna
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", () => {
            let info = e.querySelector(".music-info div").innerHTML;
            playMusic(info);
            songinfo.innerHTML = info;
        })
    })
    return songs;
}

function playMusic(song) {
    currentsong.src = `${currfolder}/` + song;
    currentsong.play();
    play.src = "pause.svg";
}

async function displayAlbums() {
    // Relative path lagaya taake GitHub aur Local dono par chala sakein
    let a = await fetch("songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let cardcontainer = document.querySelector(".card-container");

    let array = Array.from(anchors);
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        
        // Local server aur GitHub dono ke links handle karne ke liye check
        if (e.href.includes("/songs/")) {
            let folder = e.href.split("/").slice(-2, -1)[0]; 
            if(!folder || folder === "songs") {
                folder = e.href.split("/").slice(-1)[0];
            }
            
            try {
                let a = await fetch(`songs/${folder}/info.json`);
                let response = await a.json();
                
                cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div class="cards" data-folder="${folder}">
                                    <img src="songs/${folder}/cover.jpg" alt="image" class="spotify-image">
                                    <h4>${response.title}</h4>
                                    <p>${response.description}</p>
                                    <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="play-icon">
                                        <circle cx="50" cy="50" r="45" fill="#28a745" />
                                        <polygon points="40,30 70,50 40,70" fill="black" />
                                    </svg>
                                </div>`
            } catch (err) {
                console.log("Album info error: ", err);
            }
        }
    }

    // Albums ke cards par click karne se uski library load karna
    Array.from(document.getElementsByClassName("cards")).forEach((e) => {
        e.addEventListener("click", async (it) => {
            songs = await getsongs(`songs/${it.currentTarget.dataset.folder}`);
        })
    })
}

async function main() {
    // Hamburger aur Cross functionality sabse pehle taake mobile par click ho ske
    document.querySelector("#hamburg").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    })
    document.querySelector("#cross").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    })

    // Sahi Folder Name call kiya
    songs = await getsongs("songs/cs");
    
    // Albums dynamic render karein
    await displayAlbums();

    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "pause.svg";
        } else {
            currentsong.pause();
            play.src = "play1.svg";
        }
    })

    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".song-time").innerHTML = `${formatToMinutesSeconds(currentsong.currentTime)} / ${formatToMinutesSeconds(currentsong.duration)}`;
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
    })

    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percen = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percen + "%";
        currentsong.currentTime = ((currentsong.duration) * percen) / 100;
    })

    document.querySelector("#previous").addEventListener("click", () => {
        let currentSongName = currentsong.src.split("/").slice(-1)[0];
        index = songs.indexOf(currentSongName);
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1]);
            songinfo.innerHTML = decodeURIComponent(songs[index - 1]);
        }
    })

    document.querySelector("#next").addEventListener("click", () => {
        let currentSongName = currentsong.src.split("/").slice(-1)[0];
        index = songs.indexOf(currentSongName);
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1]);
            songinfo.innerHTML = decodeURIComponent(songs[index + 1]);
        } else {
            playMusic(songs[0]);
            songinfo.innerHTML = decodeURIComponent(songs[0]);
        }
    })

    document.querySelector("#range").addEventListener("input", (e) => {
        let volume = e.target.value;
        document.querySelector("#para").innerHTML = `${volume} / 100`;
        currentsong.volume = parseInt(e.target.value) / 100;
    })
}

main();