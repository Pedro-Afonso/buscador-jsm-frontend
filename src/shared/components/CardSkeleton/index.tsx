import styles from './styles.module.css'

import foto from '../../assets/react.svg'
interface ICardSkeletonProps {
  n: number
}

export const CardSkeleton: React.FC<ICardSkeletonProps> = ({ n }) => {
  const quantity = Array.from({ length: n }, (_, index) => index)

  return (
    <>
      {quantity.map((_, key) => (
        <div key={key} className={styles.card}>
          <div>
            <img src={foto} alt="/" />
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ))}
    </>
  )
}
