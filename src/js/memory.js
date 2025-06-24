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
const menuClose = select('.menu-close');
const menuToggle = select('.burger-menu');
const linkWrapper = select('.link-wrapper');
/*----------------------------------------------------------->
	Listeners 
<-----------------------------------------------------------*/
listen('click', menuToggle, ()=>{
  linkWrapper.classList.toggle('visible');
});
listen('click', menuClose, ()=>{
  linkWrapper.classList.toggle('visible');
});


