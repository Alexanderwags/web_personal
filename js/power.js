window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.add("naranja");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("naranja");
  }
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

 $(document).ready(function() {
            $("#php").css("width", "80%");
            $("#php").attr("aria-valuenow", "80%");
            $("#HTML").css("width", "70%");
            $("#HTML").attr("aria-valuenow", "70%");
            $("#HTML5").css("width", "85%");
            $("#HTML5").attr("aria-valuenow", "85%");
            $("#CSS").css("width", "75%");
            $("#CSS").attr("aria-valuenow", "75%");
            $("#JAVASCRIPT").css("width", "75%");
            $("#JAVASCRIPT").attr("aria-valuenow", "75%");
            $("#JAVA").css("width", "65%");
            $("#JAVA").attr("aria-valuenow", "65%");
            $("#LARAVEL").css("width", "85%");
            $("#LARAVEL").attr("aria-valuenow", "85%");
            $("#BOOSTRAP").css("width", "70%");
            $("#BOOSTRAP").attr("aria-valuenow", "70%");
            $("#ANGULAR").css("width", "30%");
            $("#ANGULAR").attr("aria-valuenow", "30%");
        });
