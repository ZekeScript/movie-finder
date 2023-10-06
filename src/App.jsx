import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

// [x] Add css framework classless
// [x] Add an input with a search button
// [x] Add mocks for type manager easily
// [x] List the movies found and display the title, year, and poster

function App () {
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  console.log('render')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={search} name='movie-query' type='text' placeholder='Rocky IV'
          />
          <button type='submit'>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
