interface Team {
  attack(): void
}

class MarvelTeam implements Team {
  public weapon: Weapon

  constructor(weapon: Weapon) {
    this.weapon = weapon
  }

  attack() {
    console.log(`Marvel team attack with a weapon - ${this.weapon.name}, power - ${this.weapon.power}`)
  }
}

class DCTeam implements Team {
  public weapon: Weapon

  constructor(weapon: Weapon) {
    this.weapon = weapon
  }

  attack() {
    console.log(`DC team attack with a weapon - ${this.weapon.name}, power - ${this.weapon.power}`)
  }
}

interface Weapon {
  name: string
  power: number
}

class MarvelWeapon implements Weapon {
  name: string
  power: number

  constructor(name: string, power: number) {
    this.name = name
    this.power = power
  }
}

class DCWeapon implements Weapon {
  name: string
  power: number

  constructor(name: string, power: number) {
    this.name = name
    this.power = power
  }
}

interface SuperHeroesFactory {
  createWeapon(): Weapon
  createTeam(weapon: Weapon): Team
}


export class MarvelHeroesFactory implements SuperHeroesFactory {
  createWeapon(): Weapon {
    return new MarvelWeapon('hammer', 100)
  }

  createTeam(weapon: Weapon): Team {
    return new MarvelTeam(weapon)
  }
}


export class DCHeroesFactory implements SuperHeroesFactory {
  createWeapon(): Weapon {
    return new DCWeapon('trident', 100)
  }

  createTeam(weapon: Weapon): Team {
    return new DCTeam(weapon)
  }
}

export class Film {
  private factory: SuperHeroesFactory

  constructor(factory: SuperHeroesFactory) {
    this.factory = factory
  }

  start() {
    const weapon = this.factory.createWeapon()
    const team = this.factory.createTeam(weapon)

    team.attack()
  }
}
