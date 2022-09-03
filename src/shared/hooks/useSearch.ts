import { useEffect, useRef, useState } from 'react'

const api = 'http://localhost:5000/api/users'

export const useSearch = <T>(search: string, page = 1, limit = 10) => {
  const [users, setUsers] = useState<T[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const isCancelled = useRef(false)

  useEffect(() => {
    const searchData = async () => {
      try {
        if (isCancelled.current) return
        setLoading(true)

        const url = `${api}/search?q=${search}&page=${page}&limit=${limit}`

        const data = await fetch(url)
          .then(res => res.json())
          .then(res => res as { users: T[]; numberOfUsers: number })

        setUsers(data.users)
      } catch (error) {
        setError('Ocorreu um erro, tente novamente mais tarde.')
      } finally {
        setLoading(false)
      }
    }

    searchData()
  }, [search, limit, page])

  useEffect(() => {
    return () => {
      isCancelled.current = true
    }
  }, [])

  return { users, loading, error }
}
