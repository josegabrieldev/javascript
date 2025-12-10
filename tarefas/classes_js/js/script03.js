class Timer {
  constructor(duration = null, callback = null) {
    this.duration = duration;
    this.callback = callback;
    this.startTime = null;
    this.elapsed = 0;
    this.running = false;
    this.intervalId = null;
  }

  start() {
    if (this.running) return;
    this.startTime = Date.now() - this.elapsed;
    this.running = true;

    this.intervalId = setInterval(() => {
      this.elapsed = Date.now() - this.startTime;
      if (this.duration && this.elapsed >= this.duration) {
        this.stop();
        if (this.callback) {
          this.callback();
        }
      }
    }, 50);
  }
  stop() {
    clearInterval(this.intervalId);
    this.running = false;
  }
  reset() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.elapsed = 0;
    this.startTime = null;
    this.running = false;
    this.intervalId = null;
  }
  getElapsed() {
    if (this.running) {
      return Date.now() - this.startTime;
    }
    return this.elapsed;
  }
}
let timer = new Timer(null, () => {
  console.log("⏰ Callback executado!");
});

const span = document.getElementById("time");

setInterval(() => {
  span.textContent = timer.getElapsed() + " ms";
}, 50);
document.getElementById("start").onclick = () => timer.start();
document.getElementById("stop").onclick = () => timer.stop();
document.getElementById("reset").onclick = () => timer.reset();
