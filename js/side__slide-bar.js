var menu_button = document.querySelector(".menu_button");
var side_menu = document.querySelector(".side_menu");
var menu_detect = false;
menu_button.addEventListener("click", onclick_H);
function onclick_H() {
  if (menu_detect == false) {
    side_menu.style.display = "block";
    menu_detect = true;
  } else if (menu_detect == true) {
    side_menu.style.display = "none";
    menu_detect = false;
  }
}
