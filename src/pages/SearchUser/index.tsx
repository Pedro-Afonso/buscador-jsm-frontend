import { useEffect } from 'react'

import { PaginationController } from '../../shared/components/PaginationController'
import { OrdenationToolbar } from '../../shared/components/OrdenationToolbar'
import { FilterController } from '../../shared/components/FilterController'
import { useFetchUsers } from '../../shared/hooks/useFetchUsers'
import { SearchLayout } from '../../shared/layout/SearchLayout'
import { CardList } from '../../shared/components/CardList'
import { IUser } from '../../shared/interface/IUser'

export const SearchUser = () => {
  const { user, total, loading, states, params } = useFetchUsers<IUser>()

  const { page, limit } = params

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
      <CardList user={user} loading={loading} quantity={limit} />
    </SearchLayout>
  )
}
