import { IUser } from '../../interface/IUser'
import { Card } from '../Card'
import { CardSkeleton } from '../CardSkeleton'

interface ICardListProps {
  user?: IUser[]
  loading: boolean
  quantity: number
}

export const CardList: React.FC<ICardListProps> = ({
  user,
  loading,
  quantity
}) => {
  return (
    <>
      {!user || loading ? (
        <CardSkeleton n={quantity} />
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
    </>
  )
}
