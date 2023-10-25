import React, { useState } from 'react'
import MButton from '../button'
import Slider from '../slider'
import { motion } from 'framer-motion'
import img from '../../assets/images/dandelion.png'
import style from './styles.module.scss'

const buttonAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.5,
    },
  }),
}

const Layout: React.FC = () => {
  const [activeButton, setActiveButton] = useState(1)

  const setPrev = () => {
    if (activeButton > 1) setActiveButton(activeButton - 1)
    return activeButton
  }

  const setNext = () => {
    if (activeButton < 5) setActiveButton(activeButton + 1)
    return activeButton
  }

  return (
    <div className={style.layout}>
      <img src={img} alt="img" className={style.layout_img} />
      <h1 className={style.layout_title}>Выбери свой продукт</h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className={style.layout_wrap_button}
      >
        <MButton
          variants={buttonAnimation}
          custom={1}
          direction="left"
          disable={activeButton === 1}
          click={setPrev}
        />
        <MButton
          variants={buttonAnimation}
          custom={2}
          direction="right"
          disable={activeButton === 5}
          click={setNext}
        />
      </motion.div>
      <Slider />
    </div>
  )
}

export default Layout
