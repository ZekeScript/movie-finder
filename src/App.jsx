import { useEffect, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

// [x] Add css framework classless
// [x] Add an input with a search button
// [x] Add mocks for type manager easily
// [x] List the movies found and display the title, year, and poster

function App () {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  console.log('render')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError('Empty field. Enter a movie')
      return
    }

    if (query.length < 2) {
      setError('Too short. Minimum 3 characters')
      return
    }

    setError(null)
  }, [query])

  return (
    <>
      <header>
        <h1>Movie Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='movie-query' type='text' placeholder='Rocky IV' />
          <button type='submit'>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
