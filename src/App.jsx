import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

// [x] Add css framework classless
// [x] Add an input with a search button
// [x] Add mocks for type manager easily
// [ ] List the movies found and display the title, year, and poster

function App () {
  const { movies } = useMovies()

  return (
    <>
      <header>
        <h1>Movie Finder</h1>
        <form className='form'>
          <input type='text' placeholder='Rocky IV' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
