import { useEffect } from 'react'
import { Card } from '../../shared/components/Card'
import { CardSkeleton } from '../../shared/components/CardSkeleton'
import { FilterController } from '../../shared/components/FilterController'
import { OrdenationToolbar } from '../../shared/components/OrdenationToolbar'
import { PaginationController } from '../../shared/components/PaginationController'
import { useSearch } from '../../shared/hooks/useSearch'
import { useFetchUsers } from '../../shared/hooks/useFetchUsers'
import { IUser } from '../../shared/interface/IUser'
import { SearchLayout } from '../../shared/layout/SearchLayout'

export const SearchUser = () => {
  const { q, page, limit, state, sort } = useSearch()

  const { user, total, loading, states } = useFetchUsers<IUser>(
    q,
    page,
    limit,
    sort,
    state
  )

  useEffect(() => {
    window.scroll(0, 0)
  }, [page])

  const configToolbar = ['Nome', 'Estado']

  return (
    <SearchLayout
      title="Lista de Membros"
      toolbar={
        <OrdenationToolbar
          configureOptions={configToolbar}
          count={user?.length || 0}
          total={total || 0}
        />
      }
      paginationController={
        <PaginationController length={total} page={page} limit={limit} />
      }
      sideToolbar={<FilterController configFilter={states} />}
    >
      {!user || loading ? (
        <CardSkeleton n={limit} />
      ) : (
        user.map(({ picture, name, location }, key) => (
          <Card
            key={key}
            picture={picture.medium}
            name={name}
            street={location.street}
            city={location.city}
            state={location.state}
            postcode={location.postcode}
          />
        ))
      )}
    </SearchLayout>
  )
}
