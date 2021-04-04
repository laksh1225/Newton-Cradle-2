class Bob {
    constructor(x,y,r){
        var options = {
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1.2,
            'frictionAir' : 0
        }
        this.body = Bodies.rectangle(this.x,this.y,(this.r)/2,options);
        World.add(world , this.body);

    }

    display(){
    var pos = this.body.position;
    
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill(255);
    ellipse(0, 0, this.r, this.r);
    pop();
    }

    };