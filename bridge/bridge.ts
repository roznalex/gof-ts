export abstract class Shape {
  public color: Color

  constructor(color: Color) {
    this.color = color
  }

  abstract draw(): void
}

class Color {
  hex: string
}

export class Red extends Color {
  constructor() {
    super()
    this.hex = '#ff0000'
  }
}

export class Green extends Color {
  constructor() {
    super()
    this.hex = '#00ff00'
  }
}

export class Rectangle extends Shape {
  constructor(color: Color) {
    super(color)
  }

  draw() {
    console.log(`Drawing ${this.color} rectangle`)
  }
}

export class Circle extends Shape {
  constructor(color: Color) {
    super(color)
  }

  draw() {
    console.log(`Drawing ${this.color} circle`)
  }
}
