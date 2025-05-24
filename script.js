const Videos = {
  happy: [
    "https://www.youtube.com/embed/ZbZSe6N_BXs?autoplay=1",   // Happy
    "https://www.youtube.com/embed/OPf0YbXqDm0?autoplay=1"    // Uptown Funk
  ],
  sad: [
    "https://www.youtube.com/embed/hLQl3WQQoQ0?autoplay=1",   // Someone Like You
    "https://www.youtube.com/embed/kXYiU_JCYtU?autoplay=1"    // Numb
  ],
  calm: [
    "https://www.youtube.com/embed/ejvpVhvKesM",   // 3 Daqat
    "https://www.youtube.com/embed/Dy3BHI-niZg",    // kan we kan
    "https://www.youtube.com/embed/nvr4lPoKqzI"     // kifak enta
  ],
  energetic: [
    "https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1",   // Gangnam Style
    "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"    // Rick Astley
  ]
};

const container = document.getElementById('mood-videos-container');
const iframe = document.getElementById('yt-player');

function createButtons() {
  container.innerHTML = ''; // clear existing buttons

  for (const mood in Videos) {
    // Create a heading for the mood
    const moodHeading = document.createElement('h3');
    moodHeading.textContent = mood.charAt(0).toUpperCase() + mood.slice(1);
    container.appendChild(moodHeading);

    // Create buttons for each video in this mood
    Videos[mood].forEach((videoUrl, index) => {
      const btn = document.createElement('button');
      btn.textContent = `Play video ${index + 1}`;
      btn.style.margin = "5px";

      btn.addEventListener('click', () => {
        iframe.src = videoUrl;
      });

      container.appendChild(btn);
    });
  }
}

createButtons();
