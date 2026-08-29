const roles=["Perception Engineer","Sensor Fusion Engineer","Computer Vision Engineer"];
const el=document.getElementById("typed");
let r=0,i=0,deleting=false;
function type(){
 const word=roles[r];
 el.textContent=deleting?word.slice(0,i--):word.slice(0,i++);
 let delay=deleting?45:80;
 if(!deleting && i>word.length){delay=1500;deleting=true}
 else if(deleting && i<0){deleting=false;r=(r+1)%roles.length;i=0;delay=300}
 setTimeout(type,delay);
}
type();

const hero = document.getElementById("home");
const sections = document.querySelectorAll("section[id]");
const viewLinks = document.querySelectorAll('a[href^="#"]');
const footer = document.querySelector("footer");
const mobileNav = document.getElementById("mobile-nav");

function showView(viewId) {
	const isHome = viewId === "home";

	hero.hidden = !isHome;
	footer.classList.toggle("footer-hidden", isHome);
	if (mobileNav) {
		mobileNav.value = viewId;
	}
	sections.forEach((section) => {
		section.classList.toggle("page-hidden", section.id !== viewId);
	});
}

viewLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		const viewId = link.getAttribute("href").slice(1) || "home";

		if (viewId === "home" || document.getElementById(viewId)) {
			event.preventDefault();
			showView(viewId);
			history.replaceState(null, "", `#${viewId}`);
		}
	});
});

mobileNav.addEventListener("change", () => {
	showView(mobileNav.value);
	history.replaceState(null, "", `#${mobileNav.value}`);
});

showView(window.location.hash.slice(1) || "home");
