let typingEffect = new Typed("#text",{
    strings:["Web Developer","Software Engineer","Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
});

let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
    banner.classList.toggle("night");
})



