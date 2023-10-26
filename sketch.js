function setup() {

    createCanvas(600, 600);
    
    background("yellow");
    
    }
    
    function draw() {
    
    stroke("black");
    
    fill("pink");
    
    if(mouseIsPressed){
    
    rect(mouseX, mouseY, 50, 65);
    
    }
    
    }
    
    