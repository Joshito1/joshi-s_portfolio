/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("dropdown-info").classList.toggle("show");
}

// Scroll back to top Func
// Get the button:
let mybutton = document.getElementById("top_button");
// When the user clicks on the button, scroll to the top of the document
function scroll_top() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Start of tutorial overlay box functions */
// Click question mark and shows overlay 1 box
function tutorial_box_appear() {
  document.getElementById("box_1").style.display = "block";
}
// Overlay 1 Box functions / Click yes then continues to next box and hides first box
// click "Not now" and hides First box
// "Not now" button, hides overlay 1
function cancel_tutorial() {
  document.getElementById("box_1").style.display = "none";
}
// "Next" button, hides current overlay 1 when click "Next"
function hide_current1() {
  document.getElementById("box_1").style.display = "none";
}
// Part of "Next" button, shows overlay 2.
function next_box2() {
  document.getElementById("box_2").style.display = "block";
}

// overlay 2 Box functions / click next then continues and hides second box
// "Previous button" shows overlay 1
function previous_tutorial_1() {
  document.getElementById("box_1").style.display = "block";
}
// "Next" button, hides current overlay 2 when click "Next"
function hide_current2() {
  document.getElementById("box_2").style.display = "none";
}
// Part of "Next" button, shows overlay 3.
function next_box3() {
  document.getElementById("box_3").style.display = "block";
}

// Box 3 functions / click next then continues and hides third box
// "Previous button" shows overlay 2
function previous_tutorial_2() {
  document.getElementById("box_2").style.display = "block";
}
// "Next" button, hides current overlay 3 when click "Next"
function hide_current3() {
  document.getElementById("box_3").style.display = "none";
}
// Part of "Next" button, shows overlay 4.
function next_box4() {
  document.getElementById("box_4").style.display = "block";
}

// Box 4 functions / click next then continues and hides fourth box
// "Previous button" shows overlay 3
function previous_tutorial_3() {
  document.getElementById("box_3").style.display = "block";
}
// "Next" button, hides current overlay 4 when click "Next"
function hide_current4() {
  document.getElementById("box_4").style.display = "none";
}

// Part of "Next" button, shows overlay 5.
function next_box5() {
  document.getElementById("box_5").style.display = "block";
}

// Box 5 functions / click next then continues and hides fifth box
// "Previous button" shows overlay 4
function previous_tutorial_4() {
  document.getElementById("box_4").style.display = "block";
}
// "Next" button, hides current overlay 5 when click "Next"
function hide_current5() {
  document.getElementById("box_5").style.display = "none";
}
/* End of tutorial overlay box functions */
