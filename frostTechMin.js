const techParagraphs=document.querySelectorAll(".paragraph.is-terminal.is-tech"),terminalIcons=document.querySelectorAll(".terminal-icon"),techBorderDivs=document.querySelectorAll(".tech_border-div"),techHeaders=document.querySelectorAll(".h-h5.is-tech"),quakeshiftHeading=document.querySelector(".h-h6.is-tech.is-active.is-quakeshift"),quakeshiftNumber=document.querySelector(".s-s4.is-tech.is-quakeshift"),quakeshiftParagraph=document.querySelector(".paragraph.p-p2.is-tech.is-quakeshift"),thermofluxHeading=document.querySelector(".h-h6.is-tech.is-active.is-thermoflux"),thermofluxNumber=document.querySelector(".s-s4.is-tech.is-thermoflux"),thermofluxParagraph=document.querySelector(".paragraph.p-p2.is-tech.is-thermoflux"),flexiweaveHeading=document.querySelector(".h-h6.is-tech.is-active.is-flexiweave"),flexiweaveNumber=document.querySelector(".s-s4.is-tech.is-flexiweave"),flexiweaveParagraph=document.querySelector(".paragraph.p-p2.is-tech.is-flexiweave"),counterFirstDigit=document.querySelector(".h-h3.is-tech-counter.is-first-digit"),counterSecondDigit=document.querySelector(".h-h3.is-tech-counter.is-second-digit.is-quakeshift"),quakeshiftImageWrap=document.querySelector(".tech_image-wrap.is-quakeshift"),quakeshiftImage=document.querySelector(".img.is-tech-image.is-quakeshift"),thermofluxImage=document.querySelector(".img.is-tech-image.is-thermoflux"),flexiweaveImage=document.querySelector(".img.is-tech-image.is-flexiweave"),quakeshiftDescriptionContainer=document.querySelector(".tech_description-container.is-quakeshift"),tl=gsap.timeline({defaults:{ease:"power4.out"}});gsap.set([techParagraphs,terminalIcons,techBorderDivs,techHeaders,quakeshiftHeading,quakeshiftNumber,quakeshiftParagraph],{opacity:0,visibility:"hidden"}),tl.to(terminalIcons,{autoAlpha:1,opacity:.5,rotate:"45deg",x:"0%",duration:.5}).to(techParagraphs,{autoAlpha:1,y:"0%",stagger:.2,duration:.5},"-=0.5").to(techBorderDivs,{autoAlpha:1,opacity:1,scale:1,duration:.5},"-=0.5").to(techHeaders,{autoAlpha:1,y:"0%",stagger:.2,duration:.5},"-=0.5").to(quakeshiftHeading,{autoAlpha:1,y:"0%",duration:.5}).to(quakeshiftNumber,{autoAlpha:1,x:"0%",duration:.5},"<").to(quakeshiftParagraph,{autoAlpha:1,y:"0%",duration:.5},"<").add("quakeshiftActive").to(thermofluxHeading,{autoAlpha:1,y:"0%",duration:.5},">").to(thermofluxNumber,{autoAlpha:1,x:"0%",duration:.5},"<").to(flexiweaveHeading,{autoAlpha:1,y:"0%",duration:.5},">-0.3").to(flexiweaveNumber,{autoAlpha:1,x:"0%",duration:.5},"<").to([counterFirstDigit,counterSecondDigit],{autoAlpha:1,y:"0%",stagger:.2,duration:.5}).to(quakeshiftImage,{autoAlpha:1,scale:1,opacity:1,duration:1,onStart:()=>{quakeshiftImage.classList.add("is-active"),quakeshiftImageWrap.classList.add("is-active"),quakeshiftDescriptionContainer.classList.add("is-active")}},">-0.5"),tl.add((()=>{document.querySelector(".global-terminal.is-tech.is-quakeshift").classList.add("is-active")}),"quakeshiftActive");
