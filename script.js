//python -m http.server

/*function sleep(name) {
  console.log(name + " sleeps for 8 hours")
}*/

/*function eat(name, food) {
  console.log(name + " eats " + food);
  if (food == favoriteFood) {
    console.log("YUM!!! " + name + " wants more " + food);
  } else  {
    sleep(name);
  }
}
*/


function run() {
  var zoebot = new Zookeeper("Zoebot");
  zoebot.feedAnimals([Tiger,Bear,Unicorn, Giraffe, Bee], "pasta");
}

class Animal {

  constructor(name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
  }

  sleep() {
    console.log(this.name + " sleeps for 8 hours")

  }

  eat(food) {
    console.log(this.name + " eats " + food);
    if (food == this.favoriteFood) {
      console.log("YUM!!! " + this.name + " wants more " + food);
    } else {
      this.sleep();
    }
  }
}

class Tiger extends Animal {

  constructor(name) {
    super(name, "meat");
  }
}

class Bear extends Animal {

  constructor(name) {
    super(name,"fish");
  }

  sleep() {
    console.log(this.name + " hibernates for 4 months");
  }

}

class Unicorn extends Animal {
  constructor(name) {
    super(name,"marshmallows");
  }

  sleep() {
    console.log(this.name + " sleeps in a cloud.")
  }
}

class Giraffe extends Animal {

  constructor(name) {
    super(name,"leaves");
    }
  eat(food) {
    if (food !== this.favoriteFood) {
      console.log("YUCK!!! " + this.name + " will not eat " + food);
    } else {
      super.eat('leaves');
    }
  }

}

class Bee extends Animal {
  constructor(name) {
    super(name,"pollen");
  }

  eat(food) {
    if (food == this.favoriteFood) {
      console.log("YUM!!! " + this.name + " wants more pollen")
      this.sleep();
    } else {
      console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
  }


  sleep() {
    console.log(this.name + " never sleeps")
  }
}

class Zookeeper {
  constructor(name){
    this.name = name; 
  }

feedAnimals(animals, food){
console.log( this.name + " is feeding " + food + " to " + animals.length + " animals" );
for(let i =0; i<animals.length; i++){
  animals[i].eat(food);
}
}
}

run();
