import classNames from 'classnames'
import { useSearchParams } from 'react-router-dom'
import styles from './styles.module.css'

interface IPaginationControllerProps {
  page: number
  limit: number
  length?: number
}

export const PaginationController: React.FC<IPaginationControllerProps> = ({
  page,
  limit,
  length = limit
}) => {
  const lastPage = Math.ceil(length / limit)

  const [params, setParams] = useSearchParams()

  const handlePagination = (changePage: number) => {
    params.set('page', changePage.toString())
    setParams(params)
  }

  const pages = Array.from(
    { length: lastPage <= 5 ? lastPage : 5 },
    (_, index) => (page <= 3 ? index + 1 : index + page - 2)
  )

  return (
    <div className={styles.controller}>
      <button disabled={page === 1} onClick={() => handlePagination(page - 1)}>
        E
      </button>

      {page > 3 && <span>...</span>}

      {pages.map(
        (p, key) =>
          p <= lastPage && (
            <button
              key={key}
              onClick={() => handlePagination(p)}
              className={classNames(styles.button, {
                [styles.active]: p === page
              })}
            >
              {p}
            </button>
          )
      )}

      {(lastPage > 5 || (page > 3 && page <= lastPage - 3)) &&
        page < lastPage - 3 && <span>...</span>}

      <button
        disabled={page === lastPage}
        onClick={() => handlePagination(page + 1)}
      >
        D
      </button>
    </div>
  )
}
