class TrafficLight {
    constructor(color, duration) {
      this.color = color;
      this.duration = duration;
    }
  
    changeColor(newColor) {
      this.color = newColor;
    }
  
    isRed() {
      return this.color === 'Red';
    }
  
    isGreen() {
      return this.color === 'Green';
    }
  
    displayInfo() {
      console.log(`Traffic Light - Color: ${this.color}, Duration: ${this.duration} seconds`);
    }
  }
  
  const trafficLight = new TrafficLight('Red', 1000);
  trafficLight.displayInfo();
  
  console.log(`Is it red? ${trafficLight.isRed()}`); 
  console.log(`Is it green? ${trafficLight.isGreen()}`);
  
  
  trafficLight.changeColor('Green');
  trafficLight.displayInfo();
  
  
  console.log(`Is it red? ${trafficLight.isRed()}`); 
  console.log(`Is it green? ${trafficLight.isGreen()}`);
  