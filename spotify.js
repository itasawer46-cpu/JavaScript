console.log("Hello World");
let currentsong = new Audio();
let playbtn = document.querySelector(".play-btn");
let play = document.querySelector("#play");
let songinfo = document.querySelector(".song-info");
let songs = [];
let currfolder;
let index;
 
// Jab bhi naya folder banayein, bas yahan ek choti si line barha dein!
let myAlbums = [
    { folder: "cs", title: "Happy Hits", desc: "Hits to boost your mood and fill you" },
    { folder: "ncs", title: "Hello Husnain Ali", desc: "songs for you" },
    {folder:"SadSongs",title:"Sad Melodies",desc: "Heartbreaking tunes for late nights"}
    // Naya album lagana ho to yahan comma (,) laga kar likhein:
    // { folder: "sad", title: "Sad Melodies", desc: "Heartbreaking songs" }
];

function formatToMinutesSeconds(totalSeconds) {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedMinutes}:${paddedSeconds}`;
}

// Gane load karne ka dynamic function jo info.json se data uthayega
async function getsongs(folder) {
    currfolder = folder;
    
    try {
        let a = await fetch(`${folder}/info.json`);
        let response = await a.json();
        songs = response.songs; 
        console.log("Songs loaded successfully from:", folder, songs);
    } catch (e) {
        console.log("Error loading songs from JSON:", e);
        songs = []; 
    }
    
    // UI par gano ki list update karna
    let songUL = document.querySelector(".song-list");
    songUL.innerHTML = "";
    
    for (const song of songs) {
        let decodedSong = decodeURIComponent(song);
        let li = document.createElement("li");
        songUL.appendChild(li);
        li.innerHTML = `<li>
            <div class="play-section">
                <i class="fa-solid fa-music"></i>
                <div class="music-info">
                    <div>${decodedSong}</div>
                    <div>Husnain Ali</div>
                </div>
                <p>Play Now</p>
                <img src="play1.svg" alt="play-btn" width="25">
            </div>
        </li>`;
    }

    // Har gaane par click listener lagana (Sahi text extract karne ke liye)
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", () => {
            let musicInfoDiv = e.querySelector(".music-info div");
            if (musicInfoDiv) {
                let info = musicInfoDiv.innerHTML.trim();
                playMusic(encodeURIComponent(info));
                songinfo.innerHTML = info;
            }
        });
    });
}

function playMusic(song) {
    currentsong.src = `${currfolder}/` + song;
    currentsong.play();
    play.src = "pause.svg";
}

// Sabhi albums ko myAlbums list se dynamic render karne ka function
async function displayAlbums() {
    let cardcontainer = document.querySelector(".card-container");
    if (!cardcontainer) return;

    // Purana saara static HTML saaf kiya
    cardcontainer.innerHTML = "";

    // Loop khud-ba-khud saare cards screen par bana dega
    for (let album of myAlbums) {
        cardcontainer.innerHTML = cardcontainer.innerHTML + `
            <div class="cards" data-folder="${album.folder}">
                <img src="songs/${album.folder}/cover.jpg" alt="image" class="spotify-image">
                <h4>${album.title}</h4>
                <p>${album.desc}</p>
                <svg width="50" height="50" viewBox="0 0 100 100" class="play-icon">
                    <circle cx="50" cy="50" r="45" fill="#28a745" />
                    <polygon points="40,30 70,50 40,70" fill="black" />
                </svg>
            </div>`;
    }

    // Cards par click handle karne ka core logic
    Array.from(document.getElementsByClassName("cards")).forEach((e) => {
        e.addEventListener("click", async (it) => {
            let folderName = it.currentTarget.dataset.folder;
            console.log("Switching album to: songs/" + folderName);
            await getsongs(`songs/${folderName}`);
            
            // Mobile standard view ke liye: card click par side panel samne aa jaye
            document.querySelector(".left").style.left = "0";
        });
    });
}

async function main() {
    // Hamburger Menu ke event listeners
    document.querySelector("#hamburg").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });
    document.querySelector("#cross").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    });
    
    // Pehli baar website khulne par cs folder default load hoga
    await getsongs("songs/cs");
    
    // Albums ko screen par render karein
    displayAlbums();
    
    // Play/Pause button controller
    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "pause.svg";
        } else {
            currentsong.pause();
            play.src = "play1.svg";
        }
    });
    
    // Seekbar aur time update logic
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".song-time").innerHTML = `${formatToMinutesSeconds(currentsong.currentTime)} / ${formatToMinutesSeconds(currentsong.duration)}`;
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
    });
    
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percen = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percen + "%";
        currentsong.currentTime = (currentsong.duration * percen) / 100;
    });

    // Previous button logic
    document.querySelector("#previous").addEventListener("click", () => {
        let currentSongName = currentsong.src.split("/").slice(-1)[0];
        index = songs.indexOf(decodeURIComponent(currentSongName));
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1]);
            songinfo.innerHTML = decodeURIComponent(songs[index - 1]);
        }
    });
    
    // Next button logic
    document.querySelector("#next").addEventListener("click", () => {
        let currentSongName = currentsong.src.split("/").slice(-1)[0];
        index = songs.indexOf(decodeURIComponent(currentSongName));
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1]);
            songinfo.innerHTML = decodeURIComponent(songs[index + 1]);
        } else {
            playMusic(songs[0]);
            songinfo.innerHTML = decodeURIComponent(songs[0]);
        }
    });

    // Volume range slider control
    document.querySelector("#range").addEventListener("input", (e) => {
        let volumn = e.target.value;
        document.querySelector("#para").innerHTML = `${volumn} / 100`;
        currentsong.volume = parseInt(e.target.value) / 100;
    });
}

main();