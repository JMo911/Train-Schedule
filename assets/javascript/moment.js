// <!-- The core Firebase JS SDK is always required and must be listed first -->
/* <script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"> */

// </script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCUCo7xCZxqgQykWxlqzkvnIX_K1X3WtFk",
    authDomain: "the-mo-tenn-express.firebaseapp.com",
    databaseURL: "https://the-mo-tenn-express.firebaseio.com",
    projectId: "the-mo-tenn-express",
    storageBucket: "",
    messagingSenderId: "802940247853",
    appId: "1:802940247853:web:51710a4c6bd4afe3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var mydatabase = firebase.database();


// database.ref().on("value", function(snapshot){
//     console.log(snapshot.val());
// });

var trains = {
  "Motown": {
    "data-name": "motown",
    "data-destination": "Austin, TX",
    "data-firsttraintime": "0500",
    "data-frequency": "30"
  },
  "Uptown": {
    "data-name": "uptown",
    "data-destination": "Austin, TX",
    "data-firsttraintime": "1000",
    "data-frequency": "20"
  },
  "Downtown": {
    "data-name": "downtown",
    "data-destination": "Austin, TX",
    "data-firsttraintime": "0700",
    "data-frequency": "40"
  },
  "Central Expressway": {
    "data-name": "centralexpressway",
    "data-destination": "Austin, TX",
    "data-firsttraintime": "0830",
    "data-frequency": "15"
  },
  "AngieBus": {
    "data-name": "angiebus",
    "data-destination": "Vienna, Austria",
    "data-firsttraintime": "1100",
    "data-frequency": "30"
  },
  "Belleville": {
    "data-name": "belleville",
    "data-destination": "Paris, France",
    "data-firsttraintime": "0500",
    "data-frequency": "60"
  },
  "Bakerloo": {
    "data-name": "bakerloo",
    "data-destination": "Austin, TX",
    "data-firsttraintime": "0600",
    "data-frequency": "45"
  },
  "Piccadilly": {
    "data-name": "piccadilly",
    "data-destination": "Austin, TX",
    "data-firsttraintime": "0700",
    "data-frequency": "15"
  },




}


    
