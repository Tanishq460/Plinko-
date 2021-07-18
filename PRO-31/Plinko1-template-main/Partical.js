class Particle{
	constructor(x,y,r)
	{
	var options={
		restitution: 0.3,
		friction:5,
		density:1
	}
		this.x=x;
		this.y=y;
        this.r=r
        this.body = Bodies.circle(x,y,this.r,options);
       // this.color = color(random(0,225), random(0,225), random(0,225))
        World.add(world,this.body);
}
display(){
    this.color = color(random(0,225), random(0,225), random(0,225))
}
}