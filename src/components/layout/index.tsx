import React, { useEffect, useState } from 'react'
import MButton from '../button'
import Slider from '../slider'
import { cards, ICard } from '../../helps'
import { requestCards, baseQuery } from '../../api.tsx'
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
  const [disableButton, setDisableButton] = useState(0)
  const [pagination, setPagination] = useState(baseQuery)
  const [filteredСards, setFilteredСards] = useState<ICard[]>([])

  const setPrev = () => {
    if (disableButton > 1) setDisableButton(disableButton - 3)
    setPagination((prev) => ({
    ...prev,
    offset: Math.max(prev.offset - prev.limit, 0)
  }))
  }

  const setNext = () => {
    if (disableButton < 9) setDisableButton(disableButton + 3)
    if (disableButton === 9) return
    setPagination((prev) => ({
      ...prev,
      offset: prev.offset + prev.limit
    }))
  }

  useEffect(() => {
    const query = async () => {
    const queryCards = await requestCards(pagination)
    setFilteredСards(queryCards)}
    query()
  }, [pagination])

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
          disable={disableButton === 0}
          click={setPrev}
        />
        <MButton
          variants={buttonAnimation}
          custom={2}
          direction="right"
          disable={disableButton === 9}
          click={setNext}
        />
      </motion.div>
      <Slider cards={filteredСards}/>
    </div>
  )
}

export default Layout
