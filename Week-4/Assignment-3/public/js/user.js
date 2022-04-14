const signINLink = document.getElementById("signINLink");
const signUPLink = document.getElementById("signUPLink");
const signUPDiv = document.getElementById("signUPDiv");
const signINDiv = document.getElementById("signINDiv");

signINLink.addEventListener("click", (e)=>{
    e.preventDefault();
    signUPDiv.classList.add("hide");
    signINDiv.classList.remove("hide");
})

signUPLink.addEventListener("click", (e)=>{
    e.preventDefault();
    signINDiv.classList.add("hide");
    signUPDiv.classList.remove("hide");
})

