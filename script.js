let menu = document.querySelector(".menu");
let menuList = document.querySelector(".mobile-menu");

let menuDisplay = false;

function toggleMenu() {
	if (menuDisplay == false) {
		menuList.style.display = "flex";
		menuDisplay = true;
	} else {
		menuList.style.display = "none";
		menuDisplay = false;
	}
}

menu.addEventListener("click", toggleMenu);
