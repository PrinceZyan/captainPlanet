// JavaScript function that wraps everything
$(document).ready(function() {

  var captainPlanet = $(".captain-planet");

  // Gets Link for Theme Song
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "./assets/captain-planet.wav");

  // Theme Button
  $(".theme-button").on("click", function() {
    audioElement.play();
  });
  $(".pause-button").on("click", function() {
    audioElement.pause();
  });

  // Size Buttons
  $(".normal-button").on("click", function() {
    captainPlanet.animate({ height: "300px" });
  });
  $(".grow-button").on("click", function() {
    captainPlanet.animate({ height: "500px" });
  });
  $(".shrink-button").on("click", function() {
    captainPlanet.animate({ height: "100px" });
  });

  // Visibility Buttons
  $(".vis-button").on("click", function() {
    captainPlanet.animate({ opacity: "1" });
  });
  $(".invis-button").on("click", function() {
    captainPlanet.animate({ opacity: "0.05" });
  });

  // Stretch Buttons
  $(".stretch-btn").on("click", function() {
    captainPlanet.animate({ height: "1000px", width: "200px" });
  });
  $(".unstretch-btn").on("click", function() {
    captainPlanet.animate({ height: "300px", width: "450px" });
  });

  // Move Buttons
  $(".up-button").on("click", function() {
    captainPlanet.animate({ top: "-=200px" }, "normal");
  });
  $(".down-button").on("click", function() {
    captainPlanet.animate({ top: "+=200px" }, "normal");
  });
  $(".left-button").on("click", function() {
    captainPlanet.animate({ left: "-=200px" }, "normal");
  });
  $(".right-button").on("click", function() {
    captainPlanet.animate({ left: "+=200px" }, "normal");
  });
  $(".back-button").on("click", function() {
    captainPlanet.animate({ top: "50px", left: "80px" }, "fast");
  });
  //  ╰(*°▽°*)╯  count how much function are there and right how many are  here fuction = 16  an think of what each function does :)   ╰(*°▽°*)╯
  
  // Keyboard move controls
  $(document).keyup(function(e) {
    switch (e.which) {

    // Move Buttons (Keyboard Down)
    case 40:
      captainPlanet.animate({ top: "+=200px" }, "normal");
      break;

      // Move Buttons (Keyboard Right)
    case 39:
      captainPlanet.animate({ left: "+=200px" }, "normal");
      break;

      // Move Buttons (Keyboard Up)
    case 38:
      captainPlanet.animate({ top: "-=200px" }, "normal");
      break;

      // Move Buttons (Keyboard Left)
    case 37:
      captainPlanet.animate({ left: "-=200px" }, "normal");
      break;

    default:
      break;
    }
  });
});

// homework is to make sure the java script work and bonus is to make the theme song





