const left = document.querySelector("#left"),  right = document.querySelector("#right"),  imgs = document.querySelectorAll(".carousel img"),  trigger = document.querySelector("#trigger"),  nav = document.querySelector(".nav"),  links = document.querySelectorAll(".nav > a");

var offset = 0, nav_is_opened = false;

links.forEach((link) =>{
link.onclick = () => {
nav.style.transform = "translateX(-100%)";
nav_is_opened = false;
}
});

trigger.addEventListener("click", () =>{
if(nav_is_opened){
nav.style.transform = "translateX(-100%)";
nav_is_opened = false;
}else{
nav.style.transform = "translateX(0%)";
nav_is_opened = true;
}
})

left.addEventListener("click", () =>{
if(offset == 0){
offset = -((290*imgs.length)-290);
} else {
offset+= 290;
}

imgs.forEach((img) =>{
img.style.transform = "translateX("+offset+"px)";
})
})

right.addEventListener("click", () =>{
if(offset == -((290*imgs.length)-290)){
offset = 0;
}else{
offset-= 290;
}

imgs.forEach((img) =>{
img.style.transform = "translateX("+offset+"px)";
})
})