import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import style from './styles.module.scss'

interface IpropsButton {
  direction: string
  disable: boolean
  click: () => void
}

const Button: React.FC<IpropsButton> = forwardRef(
  ({ direction, disable, click }, ref: React.Ref<HTMLDivElement>) => {
    let cls = `${style.button}`

    if (direction === 'left') cls = `${style.button} ${style.left}`
    if (direction === 'right') cls = `${style.button} ${style.right}`
    if (disable) cls = `${cls} ${style.disable}`
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className={cls}
        onClick={() => click()}
      >
        <motion.div></motion.div>
      </motion.div>
    )
  }
)

const MButton = motion(Button)
export default MButton
