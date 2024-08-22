function setup() {
    createCanvas(450, 450);
    background("rgb(223,160,223)")
  }
  
  function draw() {
    stroke("#48274E");
    fill("#9C27B0");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
  }