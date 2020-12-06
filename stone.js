class Stone{
    constructor(x, y,) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("images/stone.png");
        this.smokeImage = loadImage("images/smoke.png");
        this.trajectory =[];
        World.add(world, this.body);
      }
      display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        if(this.body.velocity.x > 10 && this.body.position.x > 200){
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);
        }
       
        for(var i=0; i<this.trajectory.length; i++){
          image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

      }
}