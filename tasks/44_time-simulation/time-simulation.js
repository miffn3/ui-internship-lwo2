export class SimTime {
  constructor() {
    this.simTime = 0;
    this.realTime = 0;
    this.speed = 1;
  }
  get() {
    return this.simTime;
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
  update(curTime) {
    this.simTime += (curTime - this.realTime) * this.speed;
    this.realTime = curTime;
  }
}
