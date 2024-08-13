gsap.registerPlugin(MorphSVGPlugin),gsap.registerPlugin(ScrollTrigger);const menuContainer=document.querySelector(".global-navbar-link.is-menu"),arrowIcon=document.querySelector(".navbar-back_arrow-icon"),arrowIconPath=document.querySelector(".navbar-back_arrow-icon svg path"),bigCircle=document.querySelector(".navbar-back_big-circle"),smallCircle=document.querySelector(".navbar-back_small-circle"),backButton=document.querySelector(".global-navbar_back-button"),backLink=document.querySelector(".global-navbar_back-link"),linkContainers=document.querySelectorAll(".global-navbar-link"),navbar=document.querySelector(".global-navbar"),navbarContainer=document.querySelector(".global-navbar_navbar-container"),iconContainer=document.querySelector(".global-navbar-link.is-icon"),closeIcon=document.querySelector(".global-navbar_close-icon"),closeIconPath=document.querySelector(".global-navbar_close-icon path"),fillSvgElement=document.querySelector(".global-navbar_background-fill svg"),fillGElement=fillSvgElement.querySelector("g"),defaultFillPath=document.querySelector("#defaultFillPath"),expandedFillPath=document.querySelector("#expandedFillPath"),strokeSvgElement=document.querySelector(".global-navbar_background-stroke svg"),strokeGElement=fillSvgElement.querySelector("g"),defaultStrokePath=document.querySelector("#defaultStrokePath"),expandedStrokePath=document.querySelector("#expandedStrokePath"),strokePath=document.querySelector(".global-navbar_background-stroke"),diamondElement=document.querySelector(".global-navbar_diamond");let menuOpenTimeline,heroAnimationTimerId,navbarTimeline,loadingButtonClicked=!1,heroAnimationCompleted=!1,pageLoadAnimationComplete=!1;const textSplits=new Map,colorThemes={default:{textColor:"#A1FCCF",diamondColor:"#002814",diamondStroke:"#6BE688",diamondShadow:"#6BE688",strokeGradient:"defaultStrokeGradient",fillGradient:"defaultGradient",circleColor:"#002814",circleStroke:"#A1FCCF",arrowColor:"#6BE688",closeIcon:"#A1FCCF"},yellow:{textColor:"#FDFDCE",diamondColor:"#3C3312",diamondStroke:"#FDFDCE",diamondShadow:"#FDFDCE",strokeGradient:"yellowDefaultStrokeGradient",fillGradient:"yellowDefaultGradient",circleColor:"#3C3312",circleStroke:"#FDFDCE",arrowColor:"#FDFDCE",closeIcon:"#FDFDCE"},purple:{textColor:"#877FCB",diamondColor:"#1A0544",diamondStroke:"#877FCB",diamondShadow:"#877FCB",strokeGradient:"purpleDefaultStrokeGradient",fillGradient:"purpleDefaultGradient",circleColor:"#1A0544",circleStroke:"#877FCB",arrowColor:"#877FCB",closeIcon:"#877FCB"},quakeshift:{textColor:"#A1FCCF",diamondColor:"#002814",diamondStroke:"#6BE688",diamondShadow:"#6BE688",strokeGradient:"defaultStrokeGradient",fillGradient:"defaultGradient",circleColor:"#002814",circleStroke:"#A1FCCF",arrowColor:"#6BE688",closeIcon:"#A1FCCF"},thermoflux:{textColor:"#FDFDCE",diamondColor:"#3C3312",diamondStroke:"#FDFDCE",diamondShadow:"#FDFDCE",strokeGradient:"yellowDefaultStrokeGradient",fillGradient:"yellowDefaultGradient",circleColor:"#3C3312",circleStroke:"#FDFDCE",arrowColor:"#FDFDCE",closeIcon:"#FDFDCE"},flexiweave:{textColor:"#877FCB",diamondColor:"#1A0544",diamondStroke:"#877FCB",diamondShadow:"#877FCB",strokeGradient:"purpleDefaultStrokeGradient",fillGradient:"purpleDefaultGradient",circleColor:"#1A0544",circleStroke:"#877FCB",arrowColor:"#877FCB",closeIcon:"#877FCB"}};function setColorTheme(e){const t=colorThemes[e]||colorThemes.default;document.querySelectorAll(".s-s5.is-navbar").forEach((e=>{e.style.color=t.textColor})),diamondElement&&(diamondElement.style.backgroundColor=t.diamondColor,diamondElement.style.borderColor=t.diamondStroke,diamondElement.style.boxShadow="none"),updateSvgColors(t),updateHoverEffects(t)}function updateSvgColors(e){const t=document.querySelector("#defaultStrokePath");t&&(t.style.stroke=`url(#${e.strokeGradient})`);const o=document.querySelector("#defaultFillPath");o&&(o.style.fill=`url(#${e.fillGradient})`);const a=document.querySelector(".navbar-back_arrow-icon path");a&&(a.style.stroke=e.arrowColor),closeIconPath&&(closeIconPath.style.fill=e.closeIcon);const n=document.querySelectorAll(".navbar-back_big-circle path"),r=document.querySelectorAll(".navbar-back_small-circle path"),i=document.querySelector(".navbar-back_bg");n.forEach((t=>{t.style.stroke=e.circleStroke})),r.forEach((t=>{t.style.stroke=e.circleStroke})),i&&(i.style.backgroundColor=e.circleColor)}function updateNavbarColor(){const e=window.location.pathname;e.includes("apex-collection")?setColorTheme("default"):e.includes("ember-collection")?setColorTheme("yellow"):e.includes("nebula-collection")?setColorTheme("purple"):setColorTheme("default")}function setupCollectionHeadingHoverEffects(){console.log("Setting up collection heading hover effects");const e=document.querySelector(".collections-main_heading.is-apex"),t=document.querySelector(".collections-main_heading.is-ember"),o=document.querySelector(".collections-main_heading.is-nebula");console.log("Headings found:",{apexHeading:e,emberHeading:t,nebulaHeading:o}),e||t||o?(e&&(e.addEventListener("mouseenter",(()=>{console.log("Apex heading mouseenter"),setColorTheme("default")})),e.addEventListener("mouseleave",(()=>{console.log("Apex heading mouseleave"),setColorTheme("default")}))),t&&(t.addEventListener("mouseenter",(()=>{console.log("Ember heading mouseenter"),setColorTheme("yellow")})),t.addEventListener("mouseleave",(()=>{console.log("Ember heading mouseleave"),setColorTheme("default")}))),o&&(o.addEventListener("mouseenter",(()=>{console.log("Nebula heading mouseenter"),setColorTheme("purple")})),o.addEventListener("mouseleave",(()=>{console.log("Nebula heading mouseleave"),setColorTheme("default")})))):console.log("No collection headings found")}function updateHoverEffects(e){function t(e,t,o){const a=e.getAttribute(`data-${t}-handler`);a&&e.removeEventListener(t,window[a]);const n=`${t}Handler${Date.now()}`;window[n]=o,e.setAttribute(`data-${t}-handler`,n),e.addEventListener(t,o)}diamondElement&&(t(diamondElement,"mouseenter",(function(){gsap.to(diamondElement,{boxShadow:`0 0 10px 0 ${e.diamondStroke}`,opacity:1,rotation:225,duration:.5,ease:"power4.inOut"}),gsap.to(strokePath,{opacity:.5,duration:.5,ease:"power4.out"})})),t(diamondElement,"mouseleave",(function(){gsap.to(diamondElement,{boxShadow:"none",opacity:.5,rotation:45,duration:.3,ease:"power4.inOut"}),gsap.to(strokePath,{opacity:.1,duration:.5,ease:"power4.out"})}))),backButton&&(t(backButton,"mouseenter",(function(){gsap.to(bigCircle,{scale:1.2,opacity:1,duration:.5,ease:"power4.inOut",fill:e.circleStroke}),gsap.to(smallCircle,{scale:.9,opacity:1,duration:.5,ease:"power4.inOut"}),gsap.to(arrowIconPath,{attr:{"stroke-width":2},opacity:1,duration:.5,ease:"power4.inOut"}),gsap.to(strokePath,{opacity:.5,duration:.5,ease:"power4.inOut"})})),t(backButton,"mouseleave",(function(){gsap.to(bigCircle,{scale:1,opacity:.5,duration:.3,ease:"power4.inOut",fill:e.circleStroke}),gsap.to(smallCircle,{scale:1,opacity:.5,duration:.5,ease:"power4.inOut"}),gsap.to(arrowIconPath,{attr:{"stroke-width":1},opacity:1,duration:.5,ease:"power4.inOut"}),gsap.to(strokePath,{opacity:.1,duration:.5,ease:"power4.inOut"})}))),linkContainers.forEach((o=>{t(o,"mouseenter",(function(){gsap.to(o,{color:e.textColor,duration:.5,ease:"power4.inOut"}),gsap.to(strokePath,{opacity:.3,duration:.5,ease:"power4.inOut"})})),t(o,"mouseleave",(function(){gsap.to(o,{color:e.textColor,duration:.3,ease:"power4.inOut"}),gsap.to(strokePath,{opacity:.1,duration:.5,ease:"power4.inOut"})}))}))}function isMobile(){return window.innerWidth<=479}function updateNavbarDisplay(){const e="index.html"===window.location.pathname||"/"===window.location.pathname,t=window.location.pathname.includes("/collections/"),o=window.location.pathname.includes("/frost-tech/");isMobile()?e?gsap.set(navbar,{display:"none"}):(t||o)&&gsap.set(navbar,{display:"flex"}):gsap.set(navbar,{display:"flex"}),diamondElement&&(diamondElement.style.display=e?"block":"none"),backLink&&(backLink.style.display=e?"none":"block")}function handleNavigation(){console.log("Handling navigation");const e="index.html"===window.location.pathname||"/"===window.location.pathname||""===window.location.pathname;if(setInitialNavbarState(),e)loadingButtonClicked=!1,heroAnimationCompleted=!1,document.referrer.includes(window.location.origin)?(console.log("Returning to homepage from internal link"),playNavbarIntro()):checkNavbarIntroConditions(),setupCollectionHeadingHoverEffects();else{const e=window.location.pathname.includes("collection"),t=window.location.pathname.includes("frost-tech");startNavbarAnimationForNonHomepage(e?4e3:t?3e3:0)}navbar&&(navbar.style.display="flex",gsap.to(navbar,{opacity:1,duration:.5,ease:"power4.out"})),updateNavbarDisplay(),updateNavbarColor()}function setInitialNavbarState(){gsap.set([strokePath,fillSvgElement,diamondElement,backLink,menuContainer],{opacity:0}),gsap.set(strokePath,{y:"100%"}),gsap.set(navbarContainer,{opacity:0,visibility:"hidden"}),gsap.set(navbarContainer,{width:"114px"})}function createNavbarTimeline(){return console.log("Creating navbar timeline"),gsap.set([strokePath,fillSvgElement,diamondElement,backLink,menuContainer],{opacity:0}),gsap.set(strokePath,{y:"100%"}),navbarTimeline||(navbarTimeline=gsap.timeline({paused:!0}).to(strokePath,{opacity:.3,y:"0%",duration:.5,ease:"power4.out"}).to(fillSvgElement,{opacity:1,duration:.5,ease:"power4.out"}).to([diamondElement,backLink],{opacity:1,duration:.5,ease:"power4.out"}).to(menuContainer,{opacity:1,duration:.5,ease:"power4.out"})),console.log("Navbar timeline created"),navbarTimeline}function playNavbarIntro(){console.log("Playing navbar intro animation"),setInitialNavbarState(),navbarTimeline||(navbarTimeline=createNavbarTimeline()),gsap.set(navbarContainer,{visibility:"visible",opacity:0}),gsap.to(navbarContainer,{opacity:1,duration:.5,onComplete:()=>{navbarTimeline.play(),updateNavbarColor()}})}function playNavbarExit(e){console.log("Starting navbar exit animation"),navbarTimeline||(console.log("Creating new navbar timeline"),navbarTimeline=createNavbarTimeline());const t=setTimeout((()=>{console.log("Failsafe: Navbar exit animation timed out"),e&&(console.log("Calling onComplete callback (from failsafe)"),e())}),2e3);navbarTimeline.reverse().eventCallback("onReverseComplete",(()=>{console.log("Navbar exit animation completed"),clearTimeout(t),e&&(console.log("Calling onComplete callback"),e())})),navbarTimeline.reverse(0)}function handlePageTransition(e,t){playNavbarExit((()=>{window.location.href=e}))}function startNavbarAnimationForNonHomepage(e=0){setTimeout((()=>{console.log("Starting navbar animation for non-homepage"),pageLoadAnimationComplete=!0,checkNavbarIntroConditions()}),e)}function checkNavbarIntroConditions(){const e="index.html"===window.location.pathname||"/"===window.location.pathname;console.log("Checking navbar intro conditions:",{loadingButtonClicked:loadingButtonClicked,heroAnimationCompleted:heroAnimationCompleted,isHomepage:e}),e?(document.referrer.includes(window.location.origin)||loadingButtonClicked&&heroAnimationCompleted)&&playNavbarIntro():pageLoadAnimationComplete&&playNavbarIntro()}function startHeroAnimationTimer(){console.log("Starting hero animation timer"),clearTimeout(heroAnimationTimerId),heroAnimationTimerId=setTimeout((()=>{console.log("Hero animation completed"),heroAnimationCompleted=!0,checkNavbarIntroConditions()}),5e3)}function setInitialTextState(){document.querySelectorAll(".is-original-text").forEach((e=>{gsap.set(e,{y:"0%"})})),document.querySelectorAll(".is-animated-text").forEach((e=>{gsap.set(e,{y:"0%"})}))}function animateFillSvg(e=!0){const t=gsap.timeline();return t.to(defaultFillPath,{morphSVG:e?expandedFillPath:defaultFillPath,duration:1,ease:"power4.inOut"},0).to(fillSvgElement,{attr:{viewBox:e?"0 0 640 64":"0 0 180 64"},duration:1,ease:"power4.inOut"},0).to(fillSvgElement,{width:e?640:180,duration:1,ease:"power4.inOut"},0).to(fillGElement,{attr:{filter:e?"url(#expandedBackgroundFilter)":"url(#defaultBackgroundFilter)"},duration:1,ease:"power4.inOut"},0),t}function animateStrokeSvg(e=!0){const t=gsap.timeline();return t.to(defaultStrokePath,{morphSVG:e?expandedStrokePath:defaultStrokePath,duration:1,ease:"power4.inOut"},0).to(strokeSvgElement,{attr:{viewBox:e?"0 0 640 64":"0 0 180 64"},duration:1,ease:"power4.inOut"},0).to(strokeSvgElement,{width:e?640:180,duration:1,ease:"power4.inOut"},0),t}function setupTextHoverAnimations(){linkContainers.forEach((e=>{const t=e.querySelector(".is-original-text"),o=e.querySelector(".is-animated-text"),a=textSplits.get(e);a&&(e.removeEventListener("mouseenter",a.enterHandler),e.removeEventListener("mouseleave",a.leaveHandler));const n={original:new SplitType(t,{types:"chars"}),animated:new SplitType(o,{types:"chars"})};gsap.set(n.original.chars,{y:"0%"}),gsap.set(n.animated.chars,{y:"0%"});const r=()=>{gsap.to(n.original.chars,{y:"-100%",stagger:.02,duration:.3,ease:"power2.inOut"}),gsap.to(n.animated.chars,{y:"-100%",stagger:.02,duration:.3,ease:"power2.inOut"})},i=()=>{gsap.to(n.original.chars,{y:"0%",stagger:.02,duration:.3,ease:"power2.inOut"}),gsap.to(n.animated.chars,{y:"0%",stagger:.02,duration:.3,ease:"power2.inOut"})};e.addEventListener("mouseenter",r),e.addEventListener("mouseleave",i),textSplits.set(e,{splits:n,enterHandler:r,leaveHandler:i})}))}function setupNavbarScrollTrigger(){const e=document.querySelector(".section.is-footer"),t="index.html"===window.location.pathname||"/"===window.location.pathname;function o(){e&&navbar&&t&&(window.innerWidth>991?ScrollTrigger.create({trigger:e,start:"top 80%",end:"bottom bottom",onEnter:()=>{gsap.to(navbar,{opacity:0,duration:.5,ease:"power4.out",onComplete:()=>{navbar.style.display="none"}})},onLeaveBack:()=>{navbar.style.display="flex",gsap.to(navbar,{opacity:1,duration:.5,ease:"power4.out"})}}):(ScrollTrigger.getAll().forEach((t=>{t.vars.trigger===e&&t.kill()})),navbar.style.display="flex",gsap.to(navbar,{opacity:1,duration:.5,ease:"power4.out"})))}o(),window.addEventListener("resize",o)}function setupEventListeners(){window.addEventListener("resize",updateNavbarDisplay),document.querySelectorAll('a[href^="/"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href");parseFloat(this.getAttribute("data-intro-duration")||"0");playNavbarExit((()=>{history.pushState(null,"",t),loadContent(t)}))}))})),backLink&&backLink.addEventListener("click",(function(e){console.log("Back link clicked"),e.preventDefault(),playNavbarExit((()=>{console.log("Inside onComplete callback"),document.referrer&&document.referrer.includes(window.location.origin)?(console.log("Going back in history"),window.history.back()):(console.log("Redirecting to homepage"),loadContent("/"))}))}));const e=document.querySelector(".loading_button-container");if(e&&e.addEventListener("click",(function(){console.log("Loading button clicked"),loadingButtonClicked=!0,startHeroAnimationTimer()})),gsap.set(expandedFillPath,{opacity:0}),menuContainer.addEventListener("click",(function(){console.log("Menu text click");const e=menuContainer.querySelector(".is-original-text"),t=new SplitType(e,{types:"chars"}),o=menuContainer.querySelector(".is-animated-text"),a=new SplitType(o,{types:"chars"}),n=document.querySelectorAll(".global-navbar-link .is-original-text"),r=document.querySelectorAll(".global-navbar-link .is-animated-text");Array.from(n).map((e=>new SplitType(e,{types:"chars"}))),Array.from(r).map((e=>new SplitType(e,{types:"chars"})));menuOpenTimeline=gsap.timeline().to(t.chars,{y:"100%",stagger:.1,duration:.5,ease:"power4.out"}).to(a.chars,{y:"100%",stagger:.1,duration:.5,ease:"power4.out"},0).add((()=>{gsap.set(menuContainer,{display:"none"}),gsap.set(iconContainer,{display:"block",opacity:0}),linkContainers.forEach((e=>{e!==menuContainer&&gsap.set(e,{display:"block",opacity:0})}))}),"-=0.5").to(navbarContainer,{width:"577px",duration:1,ease:"power4.inOut"},0).add(animateFillSvg(!0).play,0).add(animateStrokeSvg(!0).play,0).to([iconContainer,linkContainers],{opacity:1,duration:.5,ease:"power4.inOut"},0).add((()=>{linkContainers.forEach((t=>{t.querySelector(".is-original-text"),t.querySelector(".is-animated-text");const a=new SplitType(e,{types:"chars"});new SplitType(o,{types:"chars"});t!==menuContainer&&(gsap.set(a.chars,{y:"100%"}),gsap.to(a.chars,{y:"0%",stagger:.1,duration:.5,ease:"power4.out"}))})),setupTextHoverAnimations(),gsap.fromTo(closeIcon,{scale:1.1},{scale:1,duration:.5,ease:"power4.out"})}),"-=0.5").add((()=>{gsap.set(t.chars,{y:"0%"}),gsap.set(a.chars,{y:"0%"})}),0)})),console.log("Close Icon before adding event listener:",closeIcon),closeIcon.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),console.log("Close icon clicked");const t=document.querySelectorAll(".global-navbar_text-container .is-original-text"),o=document.querySelectorAll(".global-navbar_text-container .is-animated-text"),a=textSplits.get(menuContainer)?.splits||{original:new SplitType(menuContainer.querySelector(".is-original-text"),{types:"chars"}),animated:new SplitType(menuContainer.querySelector(".is-animated-text"),{types:"chars"})};gsap.timeline().to(t,{y:"0%",duration:.5,ease:"power4.out"}).to(o,{y:"0%",duration:.5,ease:"power4.out"},0).add((()=>{gsap.set(iconContainer,{display:"none"}),gsap.set(menuContainer,{display:"block"}),linkContainers.forEach((e=>{e!==menuContainer&&gsap.set(e,{display:"none"})}))}),"-=0.5").to(navbarContainer,{width:"114px",duration:1,ease:"power4.inOut"},0).add(animateFillSvg(!1).play,0).add(animateStrokeSvg(!1).play,0).to(menuContainer,{opacity:1,duration:.5,ease:"power4.inOut"},0).add((()=>{gsap.set(a.original.chars,{y:"0%"}),gsap.set(a.animated.chars,{y:"0%"})})).add((()=>{setupTextHoverAnimations()}),0),updateNavbarDisplay()})),window.addEventListener("popstate",(function(e){console.log("popstate event triggered"),loadContent(window.location.pathname)})),"index.html"===window.location.pathname||"/"===window.location.pathname){const e=document.querySelector(".loading_button-container");e&&e.addEventListener("click",(function(){console.log("Loading button clicked"),loadingButtonClicked=!0,startHeroAnimationTimer()}))}}function loadContent(e){fetch(e).then((e=>{if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);e.text()})).then((e=>{const t=(new DOMParser).parseFromString(e,"text/html");document.body.innerHTML=t.body.innerHTML,handleNavigation(),setupEventListeners(),setupCollectionHeadingHoverEffects()})).catch((e=>console.error("Error:",e)))}document.addEventListener("DOMContentLoaded",(function(){console.log("Elements:",{menuContainer:menuContainer,arrowIcon:arrowIcon,bigCircle:bigCircle,smallCircle:smallCircle,strokePath:strokePath,backButton:backButton,linkContainers:linkContainers,fillSvgElement:fillSvgElement,fillGElement:fillGElement,defaultFillPath:defaultFillPath,expandedFillPath:expandedFillPath,strokeSvgElement:strokeSvgElement,strokeGElement:strokeGElement,defaultStrokePath:defaultStrokePath,expandedStrokePath:expandedStrokePath,strokePath:strokePath,iconContainer:iconContainer,closeIcon:closeIcon}),defaultStrokePath&&expandedStrokePath?(setupEventListeners(),setupTextHoverAnimations(),updateNavbarColor(),handleNavigation(),setInitialTextState(),updateNavbarDisplay(),setupNavbarScrollTrigger(),setupCollectionHeadingHoverEffects()):console.error("SVG paths not found or incorrectly referenced.")}));
