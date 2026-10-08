/* =====================================================================
   Astro-Fest Quiz - SHARED SETTINGS (edit this one file only)
   Keep config.js in the same folder as host.html, player.html and bigscreen.html
   ===================================================================== */
const FIREBASE_CONFIG = {
  apiKey:        "AIzaSyD49w3b7AQbdM1VU8g4mEB6YpHNNGGQ5s4",
  authDomain:    "astro-fest-quiz-d2531.firebaseapp.com",
  databaseURL:   "https://astro-fest-quiz-d2531-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:     "astro-fest-quiz-d2531",
  appId:         "1:582846223639:web:89d51e025087fd98661352"
};
const BUZZ_SECONDS = 20;           // time to buzz after a question appears
const ANSWER_SECONDS = 15;         // time to answer once it is your turn
const POINTS = 5;                  // points for a correct answer
const BUZZ_KEY_LABEL = "SPACE";    // shown on player screens
