export function SimTime() {
  this.simTime = 0;
  this.realTime = 0;
  this.speed = 1;
  this.setSpeed = (newSpeed) => {
    this.speed = newSpeed;
  };
  this.get = () => {
    return this.simTime;
  };
  this.update = (curTime) => {
    this.simTime += (curTime - this.realTime) * this.speed;
    this.realTime = curTime;
  };
}
