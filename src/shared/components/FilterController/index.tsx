import { useSearchParams } from 'react-router-dom'
import { toTitleCase } from '../../utils/toTitleCase'
import styles from './styles.module.css'

interface FilterController {
  configFilter?: string[]
}

export const FilterController: React.FC<FilterController> = ({
  configFilter
}) => {
  const [params, setParams] = useSearchParams()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.currentTarget.value
    params.set('page', '1')
    const prevParams = params.get('location_state')

    if (e.currentTarget.checked) {
      params.set(
        'location_state',
        `${prevParams ? prevParams + ',' : ''}${filter}`
      )
    } else {
      if (prevParams === null) return

      params.set(
        'location_state',
        prevParams
          .split(',')
          .filter(param => param !== filter)
          .join(',')
      )
    }

    setParams(params)
  }

  return (
    <div className={styles.wrapper}>
      <details open className={styles.container}>
        <summary>Por Estado:</summary>
        <div className={styles.filterList}>
          {configFilter &&
            configFilter.map((filter, key) => (
              <label key={key}>
                <input
                  onChange={e => handleChange(e)}
                  checked={params.get('location_state')?.includes(filter)}
                  type="checkbox"
                  value={filter}
                />
                {toTitleCase(filter)}
              </label>
            ))}
        </div>
      </details>
    </div>
  )
}
