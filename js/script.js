function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$("#icon").click(function(){
  $("#navlogo").toggle();
});


$("#footer-nav-trigger").click(function(){
  $("#footer-nav-content").toggle();
});
