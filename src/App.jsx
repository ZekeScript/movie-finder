import './App.css'

// [x] Add css framework classless
// [x] Add an input with a search button

function App () {
  return (
    <>
      <header>
        <h1>Movie Finder</h1>
        <form className='form'>
          <input type='text' placeholder='Rocky IV' />
          <button type='submit'>Search</button>
        </form>
      </header>
    </>
  )
}

export default App
