const sex = {
  male: 'male',
  female: 'female',
};

export class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}

export class Human {
  constructor(sex, name) {
    this.sex = sex;
    this.name = name;
  }
}

export class Man extends Human {
  constructor(name) {
    super(sex.male, name);
  }
}

export class Woman extends Human {
  constructor(name) {
    super(sex.female, name);
  }
}
