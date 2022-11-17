const user = {};

function setterGenerator(property) {
  Object.defineProperty(user, property, {
    value: "",
    writable: true,
    enumerable: true,
    configurable: true,
  });
  return function (newValue) {
    user.name= newValue;
  };
}

const nameSetter = setterGenerator("name");
nameSetter("jack");
console.log(user);



