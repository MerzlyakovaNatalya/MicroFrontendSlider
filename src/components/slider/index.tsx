import React from 'react'
import { ICard } from '../../helps'
import Cards from './cards'
import style from './styles.module.scss'

interface ISlider {
  cards: ICard[]
}

const Slider: React.FC<ISlider> = ({cards}) => {
  return <div className={style.slider}>
    <Cards selectedСards={cards} />
  </div>
}

export default Slider
