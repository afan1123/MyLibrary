function Person(name, age) {
  this.name = name;
  this.age = age;
  this.gender = '男';

  // return {
  //   name: name,
  //   gender: '男'
  // }
  return 1;
}
function newObj() {
  // 创建空对象
  let obj = new Object();
  // 获取arguments的第一个参数
  Constructor = [].shift.call(arguments);
  //   将构造函数的原型赋给obj
  obj._proto_ = Constructor.prototype;
  //   使用apply将this指向为obj
  let ret = Constructor.apply(obj, arguments);
  return ret === 'object' ? ret : obj; //是对象返回对象，不是就返回圆心的值
}
var person = newObj(Person, '男', '22');
console.log(person.name);
