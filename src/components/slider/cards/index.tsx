import React from 'react'
import { ICard } from '../../../helps'
import MCard from '../card'
import style from './styles.module.scss'

interface ICardsProps {
  selectedСards: ICard[]
}

const Cards: React.FC<ICardsProps> = ({ selectedСards }) => {
  return (
    <div className={style.cards}>
      {selectedСards.map((card) => (
        <MCard
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          key={card.id}
          id={card.id}
          desc={card.desc}
          img={card.img}
          description={card.description}
          price={card.price}
          oldPrice={card.oldPrice}
        />
      ))}
    </div>
  )
}

export default Cards
