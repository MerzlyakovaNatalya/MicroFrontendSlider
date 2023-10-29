import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ICard } from '../../../helps'
import basket from '../../../assets/icons/basket.svg'
import style from './styles.module.scss'

const Card: React.FC<ICard> = forwardRef((
  { img, description, price, oldPrice },
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <div className={style.card} ref={ref}>
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
})

const MCard = motion(Card)
export default MCard
