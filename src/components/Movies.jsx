export const ListOfMovies = ({ movies }) => (
  <ul className='movies'>
    {
    movies.map(movie => (
      <li className='movie' key={movie.id}>
        <h3>{movie.title}</h3>
        <img src={movie.poster} alt={movie.title} />
        <p>{movie.year}</p>
      </li>
    ))
  }
  </ul>
)

export const NoResults = () => (
  <p>No se encontraron peliculas que coincidan con la busqueda</p>
)

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoResults />
  )
}
