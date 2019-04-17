import {Rocker, Student} from './factoryMethod'

function main(): void {
  const rocker = new Rocker()
  const student = new Student()

  rocker.spendFreeTime()
  student.spendFreeTime()
}

main()
