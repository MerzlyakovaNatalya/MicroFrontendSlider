import React from 'react'
import Cards from './cards'
import style from './styles.module.scss'

const Slider: React.FC = () => {
  return <div className={style.slider}>
    <Cards/>
  </div>
}

export default Slider
