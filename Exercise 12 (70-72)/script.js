console.log("this is the new exercise");





function getRandomColor(){
    return '#' + Math.floor(Math.random()* 2569)
};


function the(){
    let boxes = document.querySelectorAll(".box")
    boxes.forEach(function(box){
        let backgroundColor =getRandomColor();
    let color = getRandomColor()
    box.style.backgroundColor = getRandomColor()
    box.style.color = getRandomColor()
    })

}
the()
setInterval(the,10)