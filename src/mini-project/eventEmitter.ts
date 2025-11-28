class Events {
  map: Map<string, Function>;

  constructor() {
    this.map = new Map();
  }

  on(event: string, handler: Function) {
    if (this.map.has(event)) {
      return "event already exist";
    }
    this.map.set(event, handler);
  }
  emit(event: string, data?: any) {
    let func = this.map.get(event);
    if (!func) {
      console.log("no emitter found");
    }

    if (typeof func === "function") {
      return func(data);
    }
  }
  off(event: string, callback?: Function) {
    if (this.map.has(event)) {
      this.map.delete(event);
    }
  }
  listenerCount() {
    return Array.from(this.map.keys()).length;
  }
}

// interface eventInterface {
//   map: Map<string, Function>;
//   on(event: string, handler: Function): void;
//   emit(event: string, data?: any): any;
//   off(event: string, callback?: Function): void;
// }
//
// function Events(this: eventInterface) {
//   this.map = new Map();
//
//   this.on = function (event: string, handler: Function) {
//     if (this.map.has(event)) {
//       return "event already exist";
//     }
//     this.map.set(event, handler);
//   };
//   this.emit = function (event: string, data?: any) {
//     let func = this.map.get(event);
//     if (!func) {
//       console.log("no emmitter found");
//     }
//     if (typeof func === "function") {
//       return func(data);
//     }
//   };
//   this.off = function (event: string, callback?: Function) {
//     if (this.map.has(event)) {
//       this.map.delete(event);
//     }
//   };
// }

const event = new Events();

event.on("testing", () => {
  console.log("this is a testing event listener");
});
event.on("socket", () => {
  console.log(" on the sockets");
});

event.emit("testing");
//
// event.off("testing");
event.emit("testing");
console.log(event.listenerCount());
//

const newEvent = new Events();
newEvent.emit("testing");
