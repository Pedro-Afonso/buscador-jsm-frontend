import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './styles.module.css'

interface IOrdenationToolbarProps {
  count: number
  total: number
  configureOptions: string[]
}

export const OrdenationToolbar: React.FC<IOrdenationToolbarProps> = ({
  count,
  total,
  configureOptions
}) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [select, setSelect] = useState(searchParams.get('sort') || undefined)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value

    searchParams.set('sort', option)

    setSelect(option)
    setSearchParams(searchParams)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          Exibindo {count} de {total} {total === 1 ? 'item' : 'itens'}
        </div>
        <div>
          <label className={styles.select}>
            Ordenar por:
            <select onChange={e => handleChange(e)} value={select}>
              {configureOptions.map((option, key) => (
                <option key={key} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  )
}
