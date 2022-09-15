import { useEffect, useRef, useState } from 'react'

const api = 'http://localhost:5000/api/users'

export const useFetchUsers = <T>(
  search: string,
  page = 1,
  limit = 9,
  sort = 'Nome',
  state = ''
) => {
  const [user, setUser] = useState<T[]>()
  const [total, setTotal] = useState<number>()
  const [states, setStates] = useState<string[]>()
  /* const [error, setError] = useState<string>('') */
  const [loading, setLoading] = useState(false)
  const isCancelled = useRef(false)

  useEffect(() => {
    isCancelled.current = false
    const controller = new AbortController()

    const searchData = async () => {
      try {
        if (isCancelled.current) return
        setLoading(true)

        const params = [
          `q=${search}`,
          `page=${page}`,
          `limit=${limit}`,
          `sort=${sort}`,
          `locationState=${state}`
        ]

        const url = `${api}/search?${params.join('&')}`

        const data = await fetch(url, { signal: controller.signal })
          .then(res => res.json())
          .then(
            res =>
              res as { users: T[]; numberOfUsers: number; states: string[] }
          )

        setUser(data.users)
        setTotal(data.numberOfUsers)
        setStates(data.states)
        setLoading(false)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    searchData()

    return () => {
      controller.abort()
      isCancelled.current = true
    }
  }, [search, limit, page, state, sort])

  return { user, total, loading, states }
}
