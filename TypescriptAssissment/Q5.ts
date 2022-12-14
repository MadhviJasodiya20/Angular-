//  Q5) Create interface shape with shapename, and a method 
// printname method. Now implement the shape interface to 
// class Cone, Sphere, and Rectangle class. Now you have to 
// print the area of each shape using area method input will be 
// pass to constructor of each class.

interface shape{
    shapename:string;
    printname();
   }
 

class Cone implements shape{
    shapename: string="Cone";
    radius:number;
    slantHeight:number;

    constructor(radius:number,slantHeight:number) {

        this.radius=radius;
        this.slantHeight=slantHeight;
 }
  
     printname(){
             console.log(this.shapename);
              }
    AreaOfCone(){
            return 3.14*this.radius*(this.slantHeight+this.radius);
    
}
}

class Sphere implements shape{
    shapename: string="Sphere";
    radius:number;
    

    constructor(radius:number) {
        this.radius=radius;
        
}
 printname(){
    console.log(this.shapename);
        }
        AreaOfSphere(){
            return 4*this.radius*this.radius;
    }
    
}
class Rectangle implements shape{
    shapename: string="Rectangle"
    length:number;
    width:number;

    constructor(length:number,width:number) {
    
        this.length=length;
        this.width=width;


 }
 printname(){
    console.log(this.shapename);
        }
         AreaOfRectangle(){
            return this.length*this.width;
    }
}
let o1=new Cone(2,5);
let o2=new Sphere(6);
let o3=new Rectangle(2,6);
console.log(o1.AreaOfCone());
console.log(o2.AreaOfSphere());
console.log(o3.AreaOfRectangle());