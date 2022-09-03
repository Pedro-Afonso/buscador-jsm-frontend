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
        <h3>{`${name.first} ${name.last}`}</h3>
        <address>
          <p>{street}</p>
          <p>{city}</p>
          <p>{`${state} - CEP: ${postcode}`}</p>
        </address>
      </section>
    </article>
  )
}
