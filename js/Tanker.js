class Tanker {
  constructor() {

    this.image = loadImage("./assets/tank.jpg");
    
    }

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

      image(this.image, 0, 0, 500, 500);
      //rect(200,200,500,500)
    }
}
