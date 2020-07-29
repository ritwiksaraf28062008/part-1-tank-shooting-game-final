class Cannon {
  constructor() {

    this.image = loadImage("./assets/canonBall.png");
    
    }

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

      image(this.image, 460, 10, 50, 50);
      //rect(200,200,500,500)
    }
}
