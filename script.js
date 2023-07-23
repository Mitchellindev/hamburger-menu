let menu = document.querySelector(".menu");
let menuList = document.querySelector(".mobile-menu");

let menuDisplay = false;

function toggleMenu() {
	if (menuDisplay == false) {
		menuList.style.right = "0";
		menuDisplay = true;
	} else {
		menuList.style.right = "-50%";
		menuDisplay = false;
	}
}

menu.addEventListener("click", toggleMenu);
