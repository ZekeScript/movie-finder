export const ListOfMovies = ({ movies }) => (
  <ul>
    {
    movies.map(movie => (
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <img src={movie.poster} alt={movie.title} />
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
