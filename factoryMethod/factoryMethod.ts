interface Hobby {
  makeAction(): number
}

class Reading implements Hobby {
  makeAction(): number {
    const energy = 10

    console.log('Reading...')

    return energy
  }
}

class GuitarPlaying implements Hobby {
  makeAction(): number {
    const energy = 20

    console.log('Playing a guitar...')

    return energy
  }
}

abstract class Person {
  energy: number

  constructor(energy: number = 100) {
    this.energy = energy
  }

  abstract createHobby(): Hobby

  spendFreeTime(): void | never {
    const hobby = this.createHobby()
    const wastedEnergy = hobby.makeAction()

    if (wastedEnergy > this.energy) {
      throw new Error('You do not have enough energy')
    }

    this.energy -= wastedEnergy

    console.log(`${this.energy} energy left`)
  }
}

export class Rocker extends Person {
  createHobby(): Hobby {
    return new GuitarPlaying()
  }
}

export class Student extends Person {
  createHobby(): Hobby {
    return new Reading()
  }
}

