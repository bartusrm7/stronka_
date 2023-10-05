const photos = document.querySelector(".team-section");
const back = document.getElementById("back");
const next = document.getElementById("next");

next.addEventListener("click", () => {
	photos.scrollLeft += 350;
});
back.addEventListener("click", () => {
	photos.scrollLeft -= 350;
});

// function gallery(){
// 	if(photos.style.display)
// }

// document.addEventListener('DOMContentLoaded', function () {
// 	const nav = document.querySelector('.navbar')
// 	const allNavItems = document.querySelectorAll('.nav-link')
// 	const navList = document.querySelector('.navbar-collapse')

// 	function addShadow() {
// 		if (window.scrollY >= 100) {
// 			nav.classList.add('shadow-bg')
// 		} else {
// 			nav.classList.remove('shadow-bg')
// 		}
// 	}

// 	allNavItems.forEach(item =>
// 		item.addEventListener('click', () => {
// 			navList.classList.remove('show')
// 		})
// 	)

// 	window.addEventListener('scroll', addShadow)
// })

// const photos = document.querySelector("team-section");
// const backArrow = document.getElementById("back");
// const nextArrow = document.getElementById("next");

// function gallery(){
//     if (photos. )
// }

// poprawić !!!!!!!!!!!!!!!!

// let arrow = document.querySelector("button");
// let pricesss = document.querySelectorAll("prices");

// arrow.addEventListener("click", () => {
// 	if (pricesss.style.display === "none") {
// 		pricesss.style.display = "block";
// 	} else {
// 		pricesss.style.display = "none";
// 	}
// });

// poprawić !!!!!!!!!!!!!!!!

// const navBars = document.querySelector("navbar");
// const openMenu = document.querySelector("open-menu");
// const closeMenu = document.querySelector("close-menu");

// function show() {
// 	navBars.style.display = "flex";
// 	navBars.style.top = "0";
// }

// function close() {
// 	navBars.style.top = "-100%";
// }
// openMenu.addEventListener("click", show);
// closeMenu.addEventListener("click", close);
