export class God {
  static create() {
    return [new Man, new Woman];
  }
}

export class Human {
  constructor(sex, name) {
    this.sex = sex;
    this.name = name;
  }
}

export class Man extends Human {
  constructor() {
    super('male', 'Adam');
  }
}

export class Woman extends Human {
  constructor() {
    super('female', 'Eve');
  }
}
