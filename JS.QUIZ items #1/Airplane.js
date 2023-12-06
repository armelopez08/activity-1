class Airplane {
    constructor(flightNumber, destination, departureTime) {
      this.flightNumber = flightNumber;
      this.destination = destination;
      this.departureTime = departureTime;
      this.status = 'On time';
    }
  
    checkStatus() {
      return this.status;
    }
  
    delay(minutes) {
      if (this.status === 'On time') {
        this.status = 'Delayed';
        this.departureTime.setMinutes(this.departureTime.getMinutes() + minutes);
        console.log(`Flight ${this.flightNumber} to ${this.destination} is now delayed by ${minutes} minutes.`);
      } else {
        console.log(`Flight ${this.flightNumber} to ${this.destination} is already delayed.`);
      }
    }
  
    displayInfo() {
      console.log(`Flight ${this.flightNumber} to ${this.destination} - Departure Time: ${this.departureTime.toLocaleTimeString()}, Status: ${this.status}`);
    }
  }
  const airplane = new Airplane('59821905', 'Old Airport Sasa', new Date('2023-12-06T11:11:11'));
  airplane.displayInfo();
  console.log(`Flight status: ${airplane.checkStatus()}`);
  airplane.delay(60);
  airplane.displayInfo();
  console.log(`Flight status: ${airplane.checkStatus()}`); 
  


  class Airplane {
    constructor(flightNumber, destination, departureTime) {
      this.flightNumber = flightNumber;
      this.destination = destination;
      this.departureTime = departureTime;
      this.status = 'On time';
    }
  
    checkStatus() {
      return this.status;
    }
  
    delay(minutes) {
      if (this.status === 'On time') {
        this.status = 'Delayed';
        this.departureTime.setMinutes(this.departureTime.getMinutes() + minutes);
        console.log(`Flight ${this.flightNumber} to ${this.destination} is now delayed by ${minutes} minutes.`);
      } else {
        console.log(`Flight ${this.flightNumber} to ${this.destination} is already delayed.`);
      }
    }
  
    displayInfo() {
      console.log(`Flight ${this.flightNumber} to ${this.destination} - Departure Time: ${this.departureTime.toLocaleTimeString()}, Status: ${this.status}`);
    }
  }
  
  // Example usage:
  const airplane = new Airplane('AC123', 'New York', new Date('2023-12-06T12:00:00'));
  airplane.displayInfo();
  
  // Checking status
  console.log(`Flight status: ${airplane.checkStatus()}`); // Should be 'On time'
  
  // Delaying the flight
  airplane.delay(15);
  airplane.displayInfo();
  
  // Checking status after delay
  console.log(`Flight status: ${airplane.checkStatus()}`); // Should be 'Delayed'
  