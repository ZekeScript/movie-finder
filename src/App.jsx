import './App.css'
import responseMovies from './mocks/with-results.json'
// import withoutResults from './mocks/no-results.json'

// [x] Add css framework classless
// [x] Add an input with a search button
// [x] Add mocks for type manager easily
// [ ] List the movies found and display the title, year, and poster

function App () {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0
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
        {
          hasMovies
            ? (
              <ul>
                {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
              }
              </ul>
              )
            : (
              <p>No se encontraron peliculas que coincidan con la busqueda</p>
              )
        }
      </main>
    </>
  )
}

export default App
