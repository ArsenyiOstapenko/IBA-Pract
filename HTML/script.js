let currentSlide = 1;
let currentPosition = 0;
let isActive = false; 

const sliderLine = document.getElementsByClassName('slider-line')[0];
const buttons =document.getElementsByClassName("button-dots")[0];
buttons.addEventListener("click", (e) => {
    if (!isActive) { 
        isActive = true;
    let steps = e.target.innerText - currentSlide;
    currentSlide = e.target.innerText;
    // if (e.target.innerText == currentSlide) { return; }
    let intervalId = setInterval(()=>{
        currentPosition += 12 * steps;
        sliderLine.style.transform = "translateX(-" +  currentPosition + "px)";
        if (currentPosition % (480 * (e.target.innerText - 1)) == 0 && currentPosition != 0 || currentPosition < 0) { 
            if (currentPosition < 0) { currentPosition = 0;}
            clearInterval(intervalId)
            isActive = false;
            console.log("loop finished")
        }
    }, 50) 
    }
});
setInterval(() => {
    if (!isActive) {
    isActive = true;
    let intervalId = setInterval(()=>{
        if (currentPosition % 480 == 0 && currentPosition != 0) { 
            clearInterval(intervalId)
            isActive = false;
        }
        sliderLine.style.transform = "translateX(-" +  currentPosition + "px)";
        currentPosition += 12;
    }, 50)
    currentSlide += 1;
    if (currentSlide == 6) { currentSlide = 1}
}
}, 3500)
 



