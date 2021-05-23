let slots = [];
let player = 1;

function setup() {
  createCanvas(300, 300);
  let dx = 0;
  let dy = 0;
  for(let index = 0; index < 9; index++) {
    slots.push(new Slot(dx, dy));
    dx+=100;
    if(dx >= 300){
      dx = 0;
      dy+=100;
    }
  }
}

function draw() {
  background(220);
  for(let index = 0; index < 9; index++) {
    slots[index].show();
  }
}


  function mousePressed() {
    for(let index = 0; index < 9; index++) {
      if(slots[index].validateClick(mouseX, mouseY)){
        slots[index].setValue(player);
        if(player === 1){
          player = 2;
        }else{
          player = 1;
        }
      }
    }
  }
