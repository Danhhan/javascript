const app = (function () {
  const cars = [];
  return {
    get(index) {
      return cars[index];
    },
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index) {
      cars.slice(index, 1);
    },
  };
})();
