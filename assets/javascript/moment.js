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



mydatabase.ref().set({
  "Trains": 
  ["Motown", "Uptown", "Downtown", 
  "Central Expressway", "AngieBus", 
  "Belleville", "Bakerloo", "Piccadilly"],

  "Destinations": 
  ["Austin, TX", "Austin, TX", 
  "Austin, TX", "Austin, TX", 
  "Austin, TX", "Paris, France", 
  "London, England", "London, England"],

  "Firsttraintimes": 
  ["0500", '1000', '0700', '0830', 
  '1100', '0500', '0600', '0700'],

  "Frequency": 
  ['30', '20', '40', '15', 
  '30', '60', '45', '15']

});
    
// mydatabase.ref().on("value", funtion(snapshot){

// })