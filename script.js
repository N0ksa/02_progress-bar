const next = document.getElementById("next");
const previous = document.getElementById("previous");
const progressLine = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
let progressStage = 1;


const buttonClickSound = new Audio("./media/interface-click.wav");


next.addEventListener("click", () =>{
    progressStage++;
    buttonClickSound.play();
    if (progressStage <= circles.length){
        progressLine.style.width = ((progressStage - 1) / (circles.length - 1)) * 100 + "%";
    } else{
        progressStage--;
     
        
    }
    

    update();



});

previous.addEventListener("click", () => {
    progressStage--;
    buttonClickSound.play();
    if (progressStage > 0){
        next.disabled = false;
        progressLine.style.width = ((progressStage - 1) / 3) * 100 + "%";
    } else{
        progressStage++;
        
    }

    update();
} );



function update(){
    circles.forEach((circle, index) => {
        if(index == progressStage - 1){
            circle.classList.add("active");
        } else{
            circle.classList.remove("active");
        }
    })


    if (progressStage > 1 && progressStage < 4){
        next.disabled = false;
        previous.disabled = false;
    } else if (progressStage == 1){
        previous.disabled = true;
    } else if (progressStage == 4){
        next.disabled = true;
    }
}



