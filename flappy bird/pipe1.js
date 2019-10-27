class Pipe1 {
  constructor() {
  this.spacing = 100; //space between top and bottom
  this.top = random(height/2);
  this.bottom = height - (this.top + this.spacing);
  this.x = width; //where the pipes start coming from
  this.w = 40; //width of pipe
  this.speed = 3;
  this.highlight = false;
  }

  hits(bird1) {
    if(bird1.y < this.top || bird1.y > height - this.bottom) {
      if(bird1.x > this.x && bird1.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  show() {
    fill(255);
    if(this.highlight) {
      fill(255,0,0)
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    if(this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }

}
