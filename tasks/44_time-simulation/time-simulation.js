export function SimTime() {
  this.simTime = 0;
  this.realTime = 0;
  this.speed = 1;
}

SimTime.prototype.get = function() {
  return this.simTime;
};

SimTime.prototype.update = function(curTime) {
  this.simTime += (curTime - this.realTime) * this.speed;
  this.realTime = curTime;
};

SimTime.prototype.setSpeed = function(newSpeed) {
  this.speed = newSpeed;
};
