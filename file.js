console.log("Hello world");

class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

class Rectangle{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  getArea(){
    console.log(this.x * this.y);
  }
}


const Pranab = new Person('Pranab', 12);

const rect = new Rectangle(10,20);
rect.getArea();

console.log(Pranab);
