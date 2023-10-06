import { useState } from 'react'
// import withResult from '../mocks/with-results.json'
import withoutResult from '../mocks/no-results.json'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      // setResponseMovies(withResult)
      fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
    } else {
      setResponseMovies(withoutResult)
    }
  }

  return { movies: mappedMovies, getMovies }
}
