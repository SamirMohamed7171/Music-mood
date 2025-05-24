const Videos = {
  happy: [
    "https://www.youtube.com/embed/ZbZSe6N_BXs?autoplay=1",   // Pharrell Williams - Happy
    "https://www.youtube.com/embed/OPf0YbXqDm0?autoplay=1"    // Mark Ronson - Uptown Funk
  ],
  sad: [
    "https://www.youtube.com/embed/hLQl3WQQoQ0?autoplay=1",   // Adele - Someone Like You
    "https://www.youtube.com/embed/kXYiU_JCYtU?autoplay=1"    // Linkin Park - Numb
  ],
  calm: [
    "https://www.youtube.com/embed/2OEL4P1Rz04?autoplay=1",   // Peaceful piano music
    "https://www.youtube.com/embed/qFZKK7K52uQ?autoplay=1"    // Lo-fi chill music
  ],
  energetic: [
    "https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1",   // PSY - Gangnam Style
    "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"    // Rick Astley - Never Gonna Give You Up
  ]
};

let Welcome = document.getElementById("welcome");
let askname = prompt("Welcome to the Mood Video Player! Do you want to enter your name?  (Yes/No)");

if (askname && askname.toLowerCase() === "yes") {
    let Name = prompt("Please enter your name:");
    Welcome.innerHTML = `Welcome to music player, ${Name}!`;
} else {
    Welcome.innerHTML = "Welcome to music player";
}


const counter = {
  happy: 0,
  sad: 0,
  calm: 0,
  energetic: 0
};

function playMoodVideo(mood) {
  const videos1 = Videos[mood];
  let index = counter[mood];
  const iframe = document.getElementById("yt-player");

  iframe.src = videos1[index];
  counter[mood] = (index + 1) % videos1.length;
}