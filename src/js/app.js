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
const jordanArticle = select('.jordan');
const jordanButton = select('.jordan-btn');
const hopeArticle = select('.hope');
const hopeButton = select('.hope-btn');
const connorArticle = select('.connor');
const connorButton = select('.connor-btn');
const natalieArticle = select('.natalie');
const natalieButton = select('.natalie-btn');
const shaneArticle = select('.shane');
const shaneButton = select('.shane-btn');
const cactusArticle = select('.cactus');
const cactusButton = select('.cactus-btn');
const gilmourArticle = select('.gilmour');
const gilmourButton = select('.gilmour-btn');
const stephButton = select('.steph-btn');
const stephArticle = select('.steph');
const alisonButton = select('.alison-btn');
const alisonArticle = select('.alison');
const juliaButton = select('.julia-btn');
const juliaArticle = select('.julia');
const heatherButton = select('.heather-btn');
const heatherArticle = select('.heather');
const bernardButton = select('.bernard-btn');
const bernardArticle = select('.bernard');
const davepButton = select('.davep-btn');
const davepArticle = select('.davep');
const rickButton = select('.rick-btn');
const rickArticle = select('.rick');
const chantalButton = select('.chantal-btn');
const chantalArticle = select('.chantal');
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

listen('click', jordanButton, () => {
  if(!jordanArticle.classList.contains('collapse')) {
    jordanArticle.classList.add('collapse');
  } else {
    jordanArticle.classList.remove('collapse');
    jordanArticle.scrollIntoView({ behavior: "smooth" });
  }
});
listen('click', hopeButton, () => {
  if(!hopeArticle.classList.contains('collapse')) {
    hopeArticle.classList.add('collapse');
  } else {
    hopeArticle.classList.remove('collapse');
  }
});
listen('click', natalieButton, () => {
  if(!natalieArticle.classList.contains('collapse')) {
    natalieArticle.classList.add('collapse');
  } else {
    natalieArticle.classList.remove('collapse');
  }
});
listen('click', connorButton, () => {
  if(!connorArticle.classList.contains('collapse')) {
    connorArticle.classList.add('collapse');
  } else {
    connorArticle.classList.remove('collapse');
  }
});
listen('click', shaneButton, () => {
  if(!shaneArticle.classList.contains('collapse')) {
    shaneArticle.classList.add('collapse');
  } else {
    shaneArticle.classList.remove('collapse');
  }
});
listen('click', cactusButton, () => {
  const isCollapsed = cactusArticle.classList.contains('collapse');
  
  if (isCollapsed) {
    cactusArticle.classList.remove('collapse');
    
    // Wait for the transition to finish before scrolling
    setTimeout(() => {
      cactusArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500); // match your CSS transition duration (0.5s)
    
  } else {
    cactusArticle.classList.add('collapse');
  }
});
listen('click', gilmourButton, () => {
  if(!gilmourArticle.classList.contains('collapse')) {
    gilmourArticle.classList.add('collapse');
  } else {
    gilmourArticle.classList.remove('collapse');
  }
});
listen('click', stephButton, () => {
  if(!stephArticle.classList.contains('collapse')) {
    stephArticle.classList.add('collapse');
  } else {
    stephArticle.classList.remove('collapse');
  }
});
listen('click', alisonButton, () => {
  if(!alisonArticle.classList.contains('collapse')) {
    alisonArticle.classList.add('collapse');
  } else {
    alisonArticle.classList.remove('collapse');
  }
});
listen('click', juliaButton, () => {
  if(!juliaArticle.classList.contains('collapse')) {
    juliaArticle.classList.add('collapse');
  } else {
    juliaArticle.classList.remove('collapse');
  }
});
listen('click', heatherButton, () => {
  if(!heatherArticle.classList.contains('collapse')) {
    heatherArticle.classList.add('collapse');
  } else {
    heatherArticle.classList.remove('collapse');
  }
});
listen('click', bernardButton, () => {
  if(!bernardArticle.classList.contains('collapse')) {
    bernardArticle.classList.add('collapse');
  } else {
    bernardArticle.classList.remove('collapse');
  }
});
listen('click', davepButton, () => {
  if(!davepArticle.classList.contains('collapse')) {
    davepArticle.classList.add('collapse');
  } else {
    davepArticle.classList.remove('collapse');
  }
});
listen('click', rickButton, () => {
  if(!rickArticle.classList.contains('collapse')) {
    rickArticle.classList.add('collapse');
  } else {
    rickArticle.classList.remove('collapse');
  }
});
// listen('click', chantalButton, () => {
//   if(!chantalArticle.classList.contains('collapse')) {
//     chantalArticle.classList.add('collapse');
//   } else {
//     chantalArticle.classList.remove('collapse');
//   }
// });
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

