import {Film, DCHeroesFactory, MarvelHeroesFactory} from './abstractFactory'

function main(): void {
  const dCHeroesFactory = new DCHeroesFactory()
  const marvelHeroesFactory = new MarvelHeroesFactory()
  const marvelFilm = new Film(marvelHeroesFactory)
  const dcFilm = new Film(dCHeroesFactory)

  marvelFilm.start()
  dcFilm.start()
}

main()
