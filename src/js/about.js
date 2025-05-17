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

const menuToggle = select('.burger-menu');
const menuDropDown = select('.link-wrapper');
/*----------------------------------------------------------->
	Listeners 
<-----------------------------------------------------------*/


listen('click', menuToggle, ()=>{
  menuDropDown.classList.toggle('visible');
});
