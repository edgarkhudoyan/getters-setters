// Write an object with field name.
const obj = {
  _name: [],

  get name() {
    return obj._name;
  },

  set name(value) {
    const newArr = value.split(', ');
    for (let value of newArr) {
      obj._name.push([value, value.length]);
    }
  },
};

console.log(obj.name);

obj.name = 'Hovhannes, Sona';

console.log(obj.name);
