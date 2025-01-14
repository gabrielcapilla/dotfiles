class Clock {
  constructor(options) {
    this.el = document.getElementById("clock");
    this.delimiter = options.delimiter;
    this.twentyFourHourClock = options.twentyFourHourClock;
    this.setTime = this.setTime.bind(this);

    if (options.toggleHelp) {
      this.el.addEventListener("click", options.toggleHelp);
    }

    this.start();
  }

  setTime() {
    const date = new Date();
    let hours = this.pad(date.getHours());
    let amPm = "";

    if (!this.twentyFourHourClock) {
      hours = date.getHours();
      if (hours > 12) hours -= 12;
      else if (hours === 0) hours = 12;

      amPm = `<span class="am-pm">${
        date.getHours() >= 12 ? "PM" : "AM"
      }</span>`;
    }

    const minutes = this.pad(date.getMinutes());
    this.el.innerHTML = `${hours}${this.delimiter}${minutes}${amPm}`;
    this.el.setAttribute("datetime", date.toTimeString());
  }

  start() {
    this.setTime();
    this.intervalId = setInterval(this.setTime, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  pad(num) {
    return num.toString().padStart(2, "0");
  }
}
