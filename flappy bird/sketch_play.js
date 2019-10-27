var bird1;
var pipes1 = [];

function setup() {
  // createCanvas(400, 600);
  var cnv = createCanvas(1000, 400);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y+20);
  bird1 = new Bird1();
  pipes1.push(new Pipe1());
}

function draw() {
  background(0);

  for(var i = 0; i < pipes1.length; i++) {
    pipes1[i].show();
    pipes1[i].update();

    if(pipes1[i].hits(bird1)) {
      console.log("hit!");
      pipes1 = [];
      textSize(100);
      text("game over!", 300, 200);
      console.log("score" + bird1.score);
    }
    // else {
    //   bird1.score++;
    // }

    // if(pipes1[i].offscreen()) {
    //   pipes1.splice(i,1);
    // }
  }


  bird1.update();
  bird1.show();

  if(frameCount % 100 == 0) {
      pipes1.push(new Pipe1());
  }

}

function keyPressed() {
  if(key == ' ') {
    // console.log("SPACE");
  }
  bird1.up();
}
