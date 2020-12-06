class Grape {
    constructor(x, y,r){
        var options = {
            'restitution':0,
            'friction':1.0,
            isStatic : true
        }
        this.x = x
        this.y=y
        this.r=r
        this.image = loadImage("images/grape.png");
        this.body = Bodies.circle(this.x, this.y,this.r , options);
        
        this.Visiblity = 255;
        World.add(world, this.body);
      
    }
  
   display(){
     //console.log(this.body.speed);
     /*if(this.body.speed < 3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 5, 5);
       pop();
     }*/
     var mangoPos=this.body.position;
      push()
       translate(mangoPos.x, mangoPos.y); 
       // rectMode(CENTER);
        rotate(this.body.angle)
         fill(255,0,255) 
         imageMode(CENTER); 
         ellipseMode(CENTER);
          image(this.image, 0,0,this.r*2, this.r*2) 
          pop()
    }
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  
  
  
  };