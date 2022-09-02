export class Character {
  constructor() {
    this.health = 100;
  }

  attack(cell) {
    if (this.health >= 1 && cell <=5 && cell > 0) {
      this.health -= Math.round((110 - (cell * 100) / 10) * (this.health / 100));
    } else {
      throw new Error();
    }
	return this.health;
  }
  
  stoned(cell) {
    if (this.health >= 1 && cell <=5 && cell > 0) {
      this.health -= Math.round((110 - (cell * 100) / 10) * (this.health / 100) - Math.log2(cell) * 5);
    } else {
      throw new Error();
    }
	return this.health;
  }
};

export class Magician extends Character {
  constructor(health) {
    super(name);
	this.type = "Magician";
  }
};

export class Daemon extends Character {
  constructor(health) {
    super(name);
	this.type = "Daemon";
  }
};
