//--------------Change welcome message------------------
const welcomeBlock = document.querySelector('#welcomeMsg');

welcomeBlock.addEventListener('click', () => {
    welcomeBlock.textContent  = "Have a Good Time!";
})


//--------------Show and hide second content box section------------------

const HSBtn = document.querySelector('.HSBtn');
const SecondBox = document.querySelector('.Second_Area');

HSBtn.addEventListener('click', () => {
    if (HSBtn.textContent === "Show"){
        SecondBox.classList.remove("Hide_Content");
        HSBtn.textContent = "Hide";
    } else{
        SecondBox.classList.add("Hide_Content");
        HSBtn.textContent = "Show";
    }
})
