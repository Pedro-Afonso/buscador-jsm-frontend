import styles from './styles.module.css'
import lupa from '../../assets/lupa.svg'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Navbar = () => {
  const [params, setParams] = useSearchParams()

  const initial = params.get('q')

  const [search, setSearch] = useState(initial || '')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    params.delete('q')
    params.delete('page')
    params.delete('location_state')

    params.append('page', '1')
    params.append('q', search)

    setParams(params)
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <h1>Juntos Somos Mais</h1>
          </div>
          <div className={styles.search}>
            <form onSubmit={handleSubmit}>
              <button>
                <img src={lupa} alt="Pesquisar" />
              </button>
              <input
                type="search"
                placeholder="Buscar aqui"
                onChange={e => setSearch(e.target.value)}
                value={search}
              />
            </form>
          </div>
          <nav className={styles.navLinks}>
            <li></li>
            <li></li>
          </nav>
        </div>
      </div>
    </header>
  )
}
