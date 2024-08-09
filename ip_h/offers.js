// const initSlider = () =>{
//     const imgs = document.querySelectorAll(".slider .imgs");
//     const slideBut = document.querySelectorAll(".slider .slide-but");
//     const maxScrollLeft = imgs.scrollwidth = imgs.clientwidth;
//     slideBut.forEach(button =>{
//         button.addEventListener("click", ()=>{
//             const direction = button.id === "prev" ? -1 : 1;
//             const scrollAmount = imgs.clientwidth * direction;
//             imgs.scrollBy({ left: scrollAmount, behavior: "smooth"});
//         });
//     });

//     const handlesidebuttons = () =>{
//         slideBut[0].style.display = imgs.scrollLeft <= 0 ?"none" : "block";
//         slideBut[1].style.display = imgs.scrollLeft >= maxscrollleft ?"none" : "block";
//     }
//     imgs.addEventListener("scroll", ()=>{
//         handleSlideButtons();
//     });
// }
// window.addEventListener("loaad", initSlider);

firstImg=document.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".slider  i")
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon=>{
    icon.addEventListener("click", ()=>{
        imgs.scrollLeft += icon.id =="left" ? -firstImgWidth : firstImgWidth;
    })
})