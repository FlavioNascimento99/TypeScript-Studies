class Animal {
     name: string;
   
     constructor(name: string) {
       this.name = name;
     }
   
     makeSound() {
       console.log("O animal faz um som.");
     }
   }
   
   class Dog extends Animal {
     makeSound() {
       console.log("O cachorro faz 'au au'.");
     }
   }
   
   class Cat extends Animal {
     makeSound() {
       console.log("O gato faz 'miau'.");
     }
   }
   
   function animalMakesSound(animal: Animal) {
     animal.makeSound();
   }
   
   const dog = new Dog("Rex");
   const cat = new Cat("Mia");
   
   animalMakesSound(dog);
   animalMakesSound(cat);   