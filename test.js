class Computer{
  constructor(ram, cpu, storage)
  {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;

  }

  getRam()
  {
    return this.ram;
  }

  getCpu()
  {
    return this.cpu;
  }

  getStorage()
  {
    return this.storage;
  }

  
  runProgram(program){
    console.log(`running ${program}`)
  }

}

class Laptop extends Computer{
  constructor(ram, cpu, storage, battery)
  {
    super(ram, cpu, storage);
    this.battery = battery;
  }

  carryAround(){
    console.log(`carrying laptop:  cpu" + ${this.cpu} +" ram: " + ${this.ram} + " storage: " + ${this.storage} + " battery: " + ${this.battery}`);
  }
}