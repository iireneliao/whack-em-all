/* global fill, rect, Matter, push, translate, rotate, pop, rectMode, CENTER, world, imageMode, image
pig
*/

class Box {
  constructor(x, y, w, h) {
    const options = {
      restitution: 0.5
    };
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    imageMode(CENTER);
    image(pig, 0, 0, this.w, this.h);
    pop();
  }
}
