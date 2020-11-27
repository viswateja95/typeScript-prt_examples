export class Point{
   
    constructor(private x:number,private y: number){
        this.x = x;
        this.y = y;
    }

    draw(){

        console.log('x:'+ this.x +',y:' + this.y);
    }
    getDistance(another: Point){
        //....
    }
    
}
