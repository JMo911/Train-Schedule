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

$("#submit").on("click", function(event){
event.preventDefault();

var trainName=$("#trainInput1").val().trim();
var destination=$("#destination1").val().trim();
var firstTrainTime=moment().format($("#trainTime1").val().trim(), "HH:mm");
var frequency=$("#frequency1").val().trim();
var possibleTrainTimes = [];

// console.log(frequency);
// console.log(firstTrainTime);

  // var runsperhour = 60/frequency;
  // var runsperday = runsperhour*24;
  // var m = moment(firstTrainTime);
  // for (i = 0 ; i < runsperday ; i++) {
    
  //   console.log(m);
  //   console.log(frequency);
  //   var duration = moment.duration(frequency, "minutes");
  //   console.log(duration);

  //   // var times = moment(firstTrainTime).add((i*frequency), 'minutes');
  //   // console.log(m.add(i*frequency, 'minutes'));
  //   // console.log(i*frequency);
  //   // possibleTrainTimes.push(times);
  // }


var newTrain = {
  trainName: trainName,
  destination: destination,
  firstTrainTime: firstTrainTime,
  frequency: frequency,
  possibleTrainTimes: possibleTrainTimes
};

mydatabase.ref().push(newTrain);
// console.log(newTrain.trainName);
alert("Train added");

$("#trainInput1").val("");
$("#destination1").val("");
$("#trainTime1").val("");
$("#frequency1").val("");


})

mydatabase.ref().on("child_added", function(childSnapshot){
  // console.log(childSnapshot.val());

  var dataTrainName = childSnapshot.val().trainName;
  var dataTrainDestination = childSnapshot.val().destination;
  var dataFrequency = childSnapshot.val().frequency;
  //next arrival time -- look at array of arrival times, compare to present time
  //grab the next arrival time in the future
  var firstTrainTime = childSnapshot.val().firstTrainTime; 
  //format first train time with momentJS
  var firstTrainTimeFormatted = moment().format(firstTrainTime, "HH:mm");


  var timeDifference = moment().diff(moment(firstTrainTimeFormatted), "minutes");
  var remainingTime = timeDifference % childSnapshot.val().frequency;
  var minAway = childSnapshot.val().frequency - remainingTime;
  var nextArrival = moment().add(minAway, "minutes");


  //subtract next arrival time in the future from the present moment
  


  // console.log(firstTrainTimeFormatted);
  var diffbetweenpresentandfirsttrain = moment().diff(moment(firstTrainTimeFormatted, "HH:mm"), "minutes");
// console.log(diffbetweenpresentandfirsttrain);


  var newRow = $("<tr>").append(
    $("<td>").text(dataTrainName),
    $("<td>").text(dataTrainDestination),
    $("<td>").text(dataFrequency),
    //next arrival time
    // $("<td>").text(moment(nextArrival).format("HH:mm")),
    //min away
    // $("<td>").text(minAway)
  );

  $("#trainTable > tbody").append(newRow);


})