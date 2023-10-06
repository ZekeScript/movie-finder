import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search === '') {
      setError('Empty field. Enter a movie')
      return
    }

    if (search.length < 2) {
      setError('Too short. Minimum 3 characters')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
