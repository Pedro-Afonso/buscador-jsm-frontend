import { useEffect, useRef, useState } from 'react'
import { useUrlParams } from './useUrlParams'

const api = 'http://localhost:5000/api/users'

export const useFetchUsers = <T>() => {
  const [user, setUser] = useState<T[]>()
  const [total, setTotal] = useState<number>()
  const [states, setStates] = useState<string[]>()
  const [loading, setLoading] = useState(false)
  const isCancelled = useRef(false)

  const params = useUrlParams()

  useEffect(() => {
    isCancelled.current = false
    const controller = new AbortController()

    const searchData = async () => {
      try {
        if (isCancelled.current) return
        setLoading(true)

        const urlParams = [
          `q=${params.search}`,
          `page=${params.page}`,
          `limit=${params.limit}`,
          `sort=${params.sort}`,
          `locationState=${params.state}`
        ]

        const url = `${api}/search?${urlParams.join('&')}`

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
  }, [params])

  return { user, total, loading, states, params }
}
