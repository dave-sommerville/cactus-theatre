'use strict';
/*----------------------------------------------------------->
	Utility Functions
<------------------------------------------------------------*/

function select(selector, scope = document) {
  return scope.querySelector(selector);
}
function selectAll(selector, scope = document) {
  return scope.querySelectorAll(selector);
}
function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

/*----------------------------------------------------------->
	Selectors 
<------------------------------------------------------------*/

const navBar = select(".nav-wrapper");
const heroBanner = select(".hero-banner");
const headerSwitch = heroBanner.offsetHeight;
const linkWrapper = select('.link-wrapper');
const navTitle = select('h3');
const container = select(".scroll-container");
const menuToggle = select('.burger-menu');
/*----------------------------------------------------------->
	Listeners 
<-----------------------------------------------------------*/
const scrollWrapper = select('.scroll-wrapper');

listen('scroll', scrollWrapper, () => {
  const { scrollTop, scrollHeight, clientHeight } = scrollWrapper;

  const isAtBottom = scrollTop + clientHeight >= scrollHeight - 100;

  if (isAtBottom) {
    navBar.classList.add('visible');
  } else {
    navBar.classList.remove('visible');
  }
});

listen('click', menuToggle, ()=>{
  linkWrapper.classList.toggle('visible');
});

// listen("scroll", window, () => {
// 	const trigger = window.scrollY;

// 	if (trigger >= (headerSwitch - 15)) {
// 		navBar.classList.add("visible");
// 	} else {
// 		navBar.classList.remove("visible");
// 	}
// });

// listen('click', burgerMenu, () => {
// 	linkWrapper.classList.toggle("visible");
//   navTitle.classList.toggle("visible");
// });

