function createCounter() {
  let counter = 0;
  function increase() {
    return ++counter;
  }
  return increase;
}
const counter = createCounter();
console.log(counter())
console.log(counter())
console.log(counter())

function createLogger(nameSpace) {
    function logger(message) {
        console.log(`[${nameSpace}] ${message}`);
    }
    return logger;
}

//==========App=====================
const infoLogger = createLogger('Info')

infoLogger('Begin send mail');
infoLogger('Send mail fail');
infoLogger('Send mail success');

function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };
  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };
  return storage;
}

const settings = createStorage("profile_setting");
settings.set("full_name", "Danh Han");
settings.set("age", 20);
settings.set("address", "QNG");
console.log(settings.get("full_name"));


