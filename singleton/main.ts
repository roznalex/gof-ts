import {Logger} from './singleton'

function main(): void {
  const logger1 = Logger.getLogger()
  const logger2 = Logger.getLogger()

  logger1.log('1st logger')
  logger2.log('2nd logger')

  console.log(`Are loggers equal? ${logger1 === logger2}`)
}

main()
