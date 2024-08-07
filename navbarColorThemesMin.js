document.addEventListener("DOMContentLoaded",(function(){const e={default:{primary:"#6BE688",secondary:"#A1FCCF",tertiary:"#002814",fillGradient:{default:"defaultGradient",expanded:"expandedGradient"},strokeGradient:{default:"defaultStrokeGradient",expanded:"expandedStrokeGradient"}},"apex-collection":{primary:"#6BE688",secondary:"#A1FCCF",tertiary:"#002814",fillGradient:{default:"defaultGradient",expanded:"expandedGradient"},strokeGradient:{default:"defaultStrokeGradient",expanded:"expandedStrokeGradient"}},"ember-collection":{primary:"#D97848",secondary:"#FDFDCE",tertiary:"#3C3312",fillGradient:{default:"yellowDefaultGradient",expanded:"yellowExpandedGradient"},strokeGradient:{default:"yellowDefaultStrokeGradient",expanded:"yellowExpandedStrokeGradient"}},"nebula-collection":{primary:"#580DEB",secondary:"#877FCB",tertiary:"#1A0544",fillGradient:{default:"purpleDefaultGradient",expanded:"purpleExpandedGradient"},strokeGradient:{default:"purpleDefaultStrokeGradient",expanded:"purpleExpandedStrokeGradient"}},"frost-tech-quakeshift":{primary:"#6BE688",secondary:"#A1FCCF",tertiary:"#002814",fillGradient:{default:"defaultGradient",expanded:"expandedGradient"},strokeGradient:{default:"defaultStrokeGradient",expanded:"expandedStrokeGradient"}},"frost-tech-thermoflux":{primary:"#D97848",secondary:"#FDFDCE",tertiary:"#3C3312",fillGradient:{default:"yellowDefaultGradient",expanded:"yellowExpandedGradient"},strokeGradient:{default:"yellowDefaultStrokeGradient",expanded:"yellowExpandedStrokeGradient"}},"frost-tech-flexiweave":{primary:"#580DEB",secondary:"#877FCB",tertiary:"#1A0544",fillGradient:{default:"purpleDefaultGradient",expanded:"purpleExpandedGradient"},strokeGradient:{default:"purpleDefaultStrokeGradient",expanded:"purpleExpandedStrokeGradient"}}};function t(t){const n=e[t]||e.default,{primary:d,secondary:l,tertiary:o}=n;document.querySelectorAll(".global-navbar_diamond").forEach((e=>{e.style.backgroundColor=o,e.style.boxShadow=`0 0 10px 0 ${d}`})),document.querySelectorAll(".global-navbar_text-container h4").forEach((e=>e.style.color=l)),document.querySelectorAll(".navbar-back_arrow-icon path").forEach((e=>e.style.stroke=d)),document.querySelectorAll(".navbar-back_big-circle path").forEach((e=>e.style.stroke=l)),document.querySelectorAll(".navbar-back_small-circle path").forEach((e=>e.style.stroke=l)),document.querySelectorAll(".global-navbar_close-icon path").forEach((e=>e.style.fill=l)),a(!0),r(!0)}function a(t=!0){const a=n(),r=e[a]?.fillGradient[t?"expanded":"default"],d=gsap.timeline();return d.to(defaultFillPath,{morphSVG:t?expandedFillPath:defaultFillPath,duration:1,ease:"power4.inOut"},0).to(fillSvgElement,{attr:{viewBox:t?"0 0 640 64":"0 0 180 64"},duration:1,ease:"power4.inOut"},0).to(fillSvgElement,{width:t?640:180,duration:1,ease:"power4.inOut"},0).to(fillGElement,{fill:`url(#${r})`,duration:1,ease:"power4.inOut"},0),d}function r(t=!0){const a=n(),r=e[a]?.strokeGradient[t?"expanded":"default"],d=gsap.timeline();return d.to(defaultStrokePath,{morphSVG:t?expandedStrokePath:defaultStrokePath,duration:1,ease:"power4.inOut"},0).to(strokeSvgElement,{attr:{viewBox:t?"0 0 640 64":"0 0 180 64"},duration:1,ease:"power4.inOut"},0).to(strokeSvgElement,{width:t?640:180,duration:1,ease:"power4.inOut"},0).to(strokeGElement,{fill:`url(#${r})`,duration:1,ease:"power4.inOut"},0),d}function n(){const e=window.location.pathname;if(e.includes("collection")){if(e.includes("apex-collection"))return"apex-collection";if(e.includes("ember-collection"))return"ember-collection";if(e.includes("nebula-collection"))return"nebula-collection"}else if(e.includes("frost-tech"))return"frost-tech-quakeshift";return"default"}window.colorThemes=e,t(n()),document.querySelectorAll(".tech_description-header-wrap").forEach((e=>{e.addEventListener("click",(function(){t(`frost-tech-${this.closest(".tech_description-container").classList[1].split("-")[1]}`)}))})),window.animateFillSvg=a,window.animateStrokeSvg=r}));