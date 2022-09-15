import { streetNameModifier } from '../../utils/streetNameModifier'
import { toTitleCase } from '../../utils/toTitleCase'
import styles from './styles.module.css'

interface ICardProps {
  picture: string
  name: { first: string; last: string }
  street: string
  city: string
  state: string
  postcode: number
}

export const Card: React.FC<ICardProps> = ({
  picture,
  name,
  street,
  city,
  state,
  postcode
}) => {
  return (
    <article className={styles.card}>
      <section>
        <img src={picture} alt={name.first} />
        <h3>{toTitleCase(`${name.first} ${name.last}`)}</h3>
        <address>
          <p>{streetNameModifier(street)}</p>
          <p>{toTitleCase(city)}</p>
          <p>{`${toTitleCase(state)} - CEP: ${postcode}`}</p>
        </address>
      </section>
    </article>
  )
}
