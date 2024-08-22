/* Assignment #1 : Create a Circle Class */

class Circle{
     constructor(radius) {
          this.radius = radius;
     }

     area() {
          return this.radius * this.radius * Math.PI;
     }
}

let circle = new Circle(2);
let area = circle.area();
// console.log(area);

/* Assignment #2 - Create a base shape class */

class Shape{
     constructor(color) {
          this.color = color;
      }
  
      paint() {
                 console.log(`Painting with color ${this.color}`);
      }
  
      area() {
          throw new Error('The area method must be implemented in the subclass');
      }
  
      getDescription(){
          return `A shape with color ${this.color}`;
      }
}

class Rectangle extends Shape {
     constructor(width, height, color) {
         super(color);  // Call the parent class constructor to set the color
         this.width = width;
         this.height = height;
     }
 
     area() {
         return this.width * this.height;
     }
 
     getDescription() {
         return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
     }
}
 
class Circle2 extends Shape {
     constructor(radius, color) {
         super(color);  // Call the parent class constructor to set the color
         this.radius = radius;
     }
 
     area() {
         return Math.PI * this.radius * this.radius;
     }
 
     getDescription() {
         return `A circle with radius ${this.radius} and color ${this.color}`;
     }
}
 

const circle2 = new Circle2(20);
console.log(circle2.area());



