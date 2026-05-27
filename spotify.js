console.log("Hello World");
let currentsong = new Audio();
let playbtn = document.querySelector(".play-btn");
let play = document.querySelector("#play");
let songinfo = document.querySelector(".song-info");
let songs = [];
let currfolder = "songs/cs";
let index;

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

// GitHub Pages ke liye hardcoded static data taake code crash na ho
const albumSongs = {
    "songs/cs": ["Supreme.mp3", "Taweer.mp3", "Wavy%20copy.mp3", "Wavy.mp3"],
    "songs/happy": ["Supreme.mp3", "Taweer.mp3"] // Agar koi doosra folder hai to uske gane yahan likhein
};

async function getsongs(folder) {
    currfolder = folder;
    
    // Agar hardcoded list maujood hai to wahan se uthaye, nahi to local backup chalaye
    if (albumSongs[folder]) {
        songs = albumSongs[folder];
    } else {
        try {
            let a = await fetch(`${folder}/`);
            let response = await a.text();
            let div = document.createElement("div");
            div.innerHTML = response;
            let href = div.getElementsByTagName("a");
            songs = [];
            for (let i = 0; i < href.length; i++) {
                const element = href[i];
                if (element.href.endsWith(".mp3")) {
                    songs.push(element.href.split(`${folder}/`)[1]);
                }
            }
        } catch (e) {
            // Fallback agar fetch fail ho jaye
            songs = ["Supreme.mp3", "Taweer.mp3", "Wavy%20copy.mp3", "Wavy.mp3"];
        }
    }
    
    let songUL = document.querySelector(".song-list");
    songUL.innerHTML = "";
    for (const song of songs) {
        // Name decode kiya taake %20 ki jagah space dikhe
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

    // Aapka original click logic
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", () => {
            let musicInfoDiv = e.querySelector(".music-info div");
            if (musicInfoDiv) {
                let info = musicInfoDiv.innerHTML;
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

async function displayAlbums() {
    let cardcontainer = document.querySelector(".card-container");
    if (!cardcontainer) return;

    // Direct HTML render taake GitHub fetch error se website crash na ho
    cardcontainer.innerHTML = `
        <div class="cards" data-folder="cs">
            <img src="songs/cs/cover.jpg" alt="image" class="spotify-image">
            <h4>Happy Hits</h4>
            <p>Hits to boost your mood and fill you</p>
            <svg width="50" height="50" viewBox="0 0 100 100" class="play-icon">
                <circle cx="50" cy="50" r="45" fill="#28a745" />
                <polygon points="40,30 70,50 40,70" fill="black" />
            </svg>
        </div>
    `;

    // Cards par click event setup
    Array.from(document.getElementsByClassName("cards")).forEach((e) => {
        e.addEventListener("click", async (it) => {
            let folderName = it.currentTarget.dataset.folder;
            songs = await getsongs(`songs/${folderName}`);
        });
    });
}

async function main() {
    // Hamburger elements
    document.querySelector("#hamburg").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });
    document.querySelector("#cross").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    });
    
    // Initial songs load
    await getsongs("songs/cs");

    displayAlbums();
    
    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "pause.svg";
        } else {
            currentsong.pause();
            play.src = "play1.svg";
        }
    });
    
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".song-time").innerHTML = `${formatToMinutesSeconds(currentsong.currentTime)} / ${formatToMinutesSeconds(currentsong.duration)}`;
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
    });
    
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percen = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percen + "%";
        currentsong.currentTime = (currentsong.duration * percen) / 100;
    });

    document.querySelector("#previous").addEventListener("click", () => {
        let currentSongName = currentsong.src.split("/").slice(-1)[0];
        index = songs.indexOf(decodeURIComponent(currentSongName));
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1]);
            songinfo.innerHTML = decodeURIComponent(songs[index - 1]);
        }
    });
    
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

    document.querySelector("#range").addEventListener("input", (e) => {
        let volumn = e.target.value;
        document.querySelector("#para").innerHTML = `${volumn} / 100`;
        currentsong.volume = parseInt(e.target.value) / 100;
    });
}

main();