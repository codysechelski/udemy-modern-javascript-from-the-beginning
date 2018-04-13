class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    /**
     * Filter out from the list whatever matches the callback function. If there
     * is no match, then the callback gets to stay in the list. The filter
     * returns a new list and reassigns the list of observers.
     */
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed to ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
}


const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurrentMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});


const getCurrentMilliseconds = function () {
  document.querySelector('.output').innerHTML += `Current Milliseconds: ${new Date().getMilliseconds()}<br>`;
}

const getCurrentSeconds = function () {
  document.querySelector('.output').innerHTML += `Current Seconds: ${new Date().getSeconds()}<br>`;
}