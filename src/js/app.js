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
const menuClose = select('.menu-close');
const castButton = select('.cast-btn');
const castDisplay = select('.cast');
const crewDisplay = select('.crew');
const crewButton = select('.crew-btn');
const hopeArticle = select('.hope');
const hopeButton = select('.hope-btn');
const stephButton = select('.steph-btn');
const stephArticle = select('.steph');
const daveButton = select('.dave-btn');
const daveArticle = select('.dave');
const eveButton = select('.eve-btn');
const eveArticle = select('.eve');
const davesButton = select('.daves-btn');
const davesArticle = select('.daves');

/*----------------------------------------------------------->
	Listeners 
<-----------------------------------------------------------*/
let castIsOpen = false;
let crewIsOpen = false;

listen('click', menuToggle, ()=>{
  linkWrapper.classList.toggle('visible');
});
listen('click', menuClose, ()=>{
  linkWrapper.classList.toggle('visible');
});
listen('click', castButton, () => {
  if(!castDisplay.classList.contains('collapse')) {
    castDisplay.classList.add('collapse');
    castIsOpen = false;
  } else {
    castDisplay.classList.remove('collapse');
    castIsOpen = true;
    if(crewIsOpen) {
      crewDisplay.classList.add('collapse');
    }
    castDisplay.scrollIntoView({ behavior: "smooth" });
  }
});

listen('click', crewButton, () => {
  if(!crewDisplay.classList.contains('collapse')) {
    crewDisplay.classList.add('collapse');
    crewIsOpen = false;
  } else {
    crewDisplay.classList.remove('collapse');
    crewIsOpen = true;
    if(castIsOpen) {
      castDisplay.classList.add('collapse');
    }
    crewDisplay.scrollIntoView({ behavior: "smooth" });
  }
});

// Cast
listen('click', eveButton, () => {
  if(!eveArticle.classList.contains('collapse')) {
    eveArticle.classList.add('collapse');
  } else {
    eveArticle.classList.remove('collapse');
  }
});
// Bottom of Cast
listen('click', daveButton, () => {
  const isCollapsed = daveArticle.classList.contains('collapse');
  
  if (isCollapsed) {
    daveArticle.classList.remove('collapse');
    
    // Wait for the transition to finish before scrolling
    setTimeout(() => {
      daveArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500); // match your CSS transition duration (0.5s)
    
  } else {
    daveArticle.classList.add('collapse');
  }
});
// Crew
listen('click', hopeButton, () => {
  const isCollapsed = hopeArticle.classList.contains('collapse');
  if (isCollapsed) {
    hopeArticle.classList.remove('collapse');
    // Wait for the transition to finish before scrolling
    setTimeout(() => {
      hopeArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500); // match your CSS transition duration (0.5s)
  } else {
    hopeArticle.classList.add('collapse');
  }
});

// Bottom of crew
listen('click', stephButton, () => {
  const isCollapsed = stephArticle.classList.contains('collapse');
  if (isCollapsed) {
    stephArticle.classList.remove('collapse');
    // Wait for the transition to finish before scrolling
    setTimeout(() => {
      stephArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500); // match your CSS transition duration (0.5s)
  } else {
    stephArticle.classList.add('collapse');
  }
});

listen('click', davesButton, () => {
  const isCollapsed = davesArticle.classList.contains('collapse');
  
  if (isCollapsed) {
    davesArticle.classList.remove('collapse');
    
    // Wait for the transition to finish before scrolling
    setTimeout(() => {
      davesArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500); // match your CSS transition duration (0.5s)
    
  } else {
    davesArticle.classList.add('collapse');
  }
});