const moods = {
  happy: {
    label: "Happy",
    accent: "#c8ff56",
    songs: [
      { title: "Happy", artist: "Pharrell Williams", id: "ZbZSe6N_BXs" },
      { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", id: "OPf0YbXqDm0" },
      { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", id: "ru0K8uYEZWw" },
      { title: "Blinding Lights", artist: "The Weeknd", id: "4NRXx6U8ABQ" },
      { title: "Akhastmak Ah", artist: "Nancy Ajram", id: "qLwpSPtLFSo" }
    ]
  },
  sad: {
    label: "Sad",
    accent: "#8c91df",
    songs: [
      { title: "Someone Like You", artist: "Adele", id: "hLQl3WQQoQ0" },
      { title: "Numb", artist: "Linkin Park", id: "kXYiU_JCYtU" },
      { title: "The Night We Met", artist: "Lord Huron", id: "KtlgYxa6BMU" },
      { title: "Let Her Go", artist: "Passenger", id: "RBumgq5yVrA" },
      { title: "Wala Ala Balo", artist: "Amr Diab", id: "qdm3Cd1j3XA" }
    ]
  },
  calm: {
    label: "Calm",
    accent: "#66bd9b",
    songs: [
      { title: "3 Daqat", artist: "Abu Ftayyim", id: "ejvpVhvKesM" },
      { title: "Kan We Kan", artist: "Assala", id: "Dy3BHI-niZg" },
      { title: "Kifak Enta", artist: "Fairuz", id: "nvr4lPoKqzI" },
      { title: "Sunset Lover", artist: "Petit Biscuit", id: "krGgGVBGNSk" },
      { title: "Clair de Lune", artist: "Debussy Piano Cover", id: "CvFH_6DNRCY" }
    ]
  },
  energetic: {
    label: "Energetic",
    accent: "#df7e72",
    songs: [
      { title: "Gangnam Style", artist: "PSY", id: "9bZkp7q19f0" },
      { title: "POWER", artist: "Kanye West", id: "L53gjP-TtGE" },
      { title: "Bleed It Out", artist: "Linkin Park", id: "sLfbRKcnAJ4" },
      { title: "El Bakht", artist: "Wegz", id: "1h5h-lMWCJQ" },
      { title: "Eye of the Tiger", artist: "Survivor", id: "btPJPFnesV4" }
    ]
  }
};

let currentMood = null;
let currentIndex = -1;

const player = document.getElementById("player");
const ytPlayer = document.getElementById("yt-player");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const moodBadge = document.getElementById("mood-badge");
const cards = [...document.querySelectorAll(".mood-card")];

function playRandom(mood, forceNew = false) {
  const data = moods[mood];
  let index;

  do {
    index = Math.floor(Math.random() * data.songs.length);
  } while (data.songs.length > 1 && forceNew && index === currentIndex);

  currentIndex = index;
  const song = data.songs[index];

  ytPlayer.src = `https://www.youtube.com/embed/${song.id}?autoplay=1&rel=0`;
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  moodBadge.textContent = data.label;
  document.documentElement.style.setProperty("--accent", data.accent);

  player.hidden = false;
  requestAnimationFrame(() => {
    player.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const mood = card.dataset.mood;

    cards.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    card.classList.add("active");
    card.setAttribute("aria-pressed", "true");
    currentMood = mood;
    currentIndex = -1;
    playRandom(mood);
  });
});

document.getElementById("btn-next").addEventListener("click", () => {
  if (currentMood) playRandom(currentMood, true);
});

document.getElementById("btn-change").addEventListener("click", () => {
  ytPlayer.src = "";
  player.hidden = true;
  currentMood = null;
  currentIndex = -1;

  cards.forEach((card) => {
    card.classList.remove("active");
    card.setAttribute("aria-pressed", "false");
  });

  document.querySelector(".hero").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();
