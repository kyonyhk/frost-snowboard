document.addEventListener("DOMContentLoaded",(function(){let e="quakeshift";document.querySelectorAll(".tech_description-header-wrap").forEach((t=>{t.addEventListener("click",(function(){!function(t){const i={quakeshift:document.querySelector(".h-h3.is-tech-counter.is-second-digit.is-quakeshift"),thermoflux:document.querySelector(".h-h3.is-tech-counter.is-second-digit.is-thermoflux"),flexiweave:document.querySelector(".h-h3.is-tech-counter.is-second-digit.is-flexiweave")},s=["quakeshift","thermoflux","flexiweave"],o=s.indexOf(e),n=s.indexOf(t);gsap.set(i.quakeshift,{y:100*(0-o)+"%"}),gsap.set(i.thermoflux,{y:100*(1-o)+"%"}),gsap.set(i.flexiweave,{y:100*(2-o)+"%"}),gsap.to(i.quakeshift,{y:100*(0-n)+"%",duration:.5,ease:"power4.inOut"}),gsap.to(i.thermoflux,{y:100*(1-n)+"%",duration:.5,ease:"power4.inOut"}),gsap.to(i.flexiweave,{y:100*(2-n)+"%",duration:.5,ease:"power4.inOut"}),e=t}(this.closest(".tech_description-container").classList[1].split("-")[1])}))}))}));