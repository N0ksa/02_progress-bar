const next = document.getElementById("next");
const previous = document.getElementById("previous");
const progressLine = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
let progressStage = 1;


next.addEventListener("click", () =>{
    progressStage++;
    if (progressStage <= 4){
        progressLine.style.width = ((progressStage - 1) / 3) * 100 + "%";
    } else{
        progressStage--;
    }
    

    update();



});

previous.addEventListener("click", () => {
    progressStage--;
    if (progressStage > 0){
        progressLine.style.width = ((progressStage - 1) / 3) * 100 + "%";
        console.log(progressStage);
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
}



