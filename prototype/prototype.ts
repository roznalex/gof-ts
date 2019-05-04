interface IFigurePrototype {
  clone(): IFigurePrototype
}

class Rhomb implements IFigurePrototype {
  clone(): Rhomb {
    return new Rhomb()
  }
}

class Cube implements IFigurePrototype {
  clone(): Cube {
    return new Cube()
  }
}

interface IFigureFactory {
  createFigure(type: string): IFigurePrototype
}

export class RectangleFactory implements IFigureFactory {
  private figures: { [type: string]: IFigurePrototype } = {}

  constructor() {
    this.figures['Cube'] = new Cube()
    this.figures['Rhomb'] = new Rhomb()
  }

  createFigure(type: string): IFigurePrototype {
    const figure = this.figures[type]

    return figure ? figure.clone() : null
  }
}
