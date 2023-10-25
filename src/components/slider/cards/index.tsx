import React from 'react'
import { cards } from '../../../helps'
import Card from '../card'
import style from './styles.module.scss'

const Cards: React.FC = () => {
  return <div className={style.cards}>
    {cards.map((card) => (
      <Card
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
}

export default Cards