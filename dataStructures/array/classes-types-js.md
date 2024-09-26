### Reference type

```js
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};
```

### Context vs Scope
```js
const object4 = {
  fn: function() {
    console.log(this)
  }
}
```

### Instantiation

```js
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type){
    super(name, type);
  }
  play(){
    console,log(`WEEE I'm a ${this.type}`)
  }
}

const wiza1 = new Wizard('Shelly', 'Healer');
const wiza1 = new Wizard('Shawn', 'Dark Magic');

```