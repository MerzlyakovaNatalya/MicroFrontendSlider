import React from 'react'
import basket from '../../../assets/icons/basket.svg'
import { ICard } from '../../../helps'
import style from './styles.module.scss'

const Card: React.FC<ICard> = ({
  img,
  description,
  price,
  oldPrice,
}) => {
  return (
    <div className={style.card}>
      <div className={style.card_wrap}>
        <img src={img} className={style.card_img} alt="Фото товара" />
        <p className={style.card_description}>{description}</p>
        <div className={style.card_wrap_price}>
          <p className={style.card_old_price}>{oldPrice}</p>
          <p className={style.card_new_price}>{price}</p>
          <img src={basket} alt="корзина" className={style.card_basket} />
        </div>
      </div>
    </div>
  )
}

export default Card
