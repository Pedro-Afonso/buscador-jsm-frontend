import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useSearch = () => {
  const [searchParams] = useSearchParams()

  return useMemo(() => {
    return {
      q: searchParams.get('q') || '',
      page: +(searchParams.get('page') || 1),
      limit: +(searchParams.get('limit') || 9),
      state: searchParams.get('location_state') || '',
      sort: searchParams.get('sort') || 'first_name'
    }
  }, [searchParams])
}
