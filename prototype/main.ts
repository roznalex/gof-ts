import {RectangleFactory} from './prototype'

function main(): void {
  const rectangleFactory = new RectangleFactory()
  const prototypes = ['Rhomb', 'Cube'].map((type) => rectangleFactory.createFigure(type))

  console.log(prototypes)
}

main()
