//pollyfills

function myArray() {
  Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false,
  });
}

myArray.prototype.myPush = function (elem) {
  this[this.length] = elem;
  this.length++;
};

myArray.prototype.myPop = function () {
  this.length--;
  let elem = this[this.length];
  delete this[this.length];
  return elem;
};

myArray.prototype.map = function (cb) {
  let arr = new myArray();
  for (i in this) {
    if (this.hasOwnProperty(i)) {
      arr.myPush(cb(this[i], i));
    }
  }

  return arr;
};

myArray.prototype.filter = function (cb) {
  let arr = new myArray();
  for (i in this) {
    if (this.hasOwnProperty(i)) {
      if (cb(this[i], i)) {
        arr.myPush(this[i]);
      }
    }
  }
  return arr;
};

myArray.prototype.reduce = function (cb, prev) {
  for (i in this) {
    if (this.hasOwnProperty(i)) {
      prev = cb(prev, this[i]);
    }
  }
  return prev;
};

let arr = new myArray();
arr.myPush(5);
arr.myPush(2);
arr.myPush(3);

let sum = [5, 2, 3].reduce((a, b) => a - b, 1);

console.log(s);

// let res = arr.map((e,i)=>i*2)
// let res = arr.filter((e)=>e%2==0)
// console.log(res)
