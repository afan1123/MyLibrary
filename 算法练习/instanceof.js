function instanceOf(left, right) {
  let leftVal = left.__proto__;
  while (true) {
    if (!leftVal) return false;
    if (leftVal === right) return true;
    leftVal = leftVal.__proto__;
  }
}
console.log(instanceOf('1', Object));
console.log('1' instanceof Object);
