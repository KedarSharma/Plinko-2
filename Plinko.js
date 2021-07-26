class Plinko {
    constructor(x,y){
        var options = {
            'isStatic' : true,
            'restitution' : 0.3,
            'friction' : 0
        };
        this.body = Bodies.circle(x,y,12.5,options);
        this.radius = 12.5;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        pop();
        fill("white");
        circle(pos.x,pos.y,this.radius*2);
    }
}