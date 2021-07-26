class Ball {
    constructor(x,y){
        var options = {
            'isStatic' : true,
            'restitution' : 0.6,
            'density' : 10
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.body);
		this.visibility = "true";
    }

    display(){
        if(this.body){
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            pop();
            fill("black");
            circle(pos.x,pos.y,this.radius*2);
        }
	}
}