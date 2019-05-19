import {Red, Green, Rectangle, Circle, Shape} from './bridge'

const red = new Red()
const green = new Green()
const redRec = new Rectangle(red)
const greenRec = new Rectangle(green)
const redCircle = new Circle(red)
const greenCircle = new Circle(green);

[redRec, greenRec, redCircle, greenCircle].map((shape: Shape) => shape.draw())
