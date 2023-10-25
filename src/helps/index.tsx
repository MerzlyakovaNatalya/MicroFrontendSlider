import jar1 from '../assets/images/jar1.png'
import jar2 from '../assets/images/jar2.png'
import jar3 from '../assets/images/jar3.png'
import jar4 from '../assets/images/jar4.png'
import jar5 from '../assets/images/jar5.png'

export interface ICard {
    id?: number
    img: string
    desc: string
    description: string
    price: number
    oldPrice?: number
  }

  export const cards: ICard[] = [{
    id: 1,
    img: jar3,
    desc: 'для нормальной кожи',
    description: 'Увлажняющий мусс',
    price: 4750,
    oldPrice: 5000,
}, {
    id: 2,
    img: jar1,
    desc: 'для нормальной кожи',
    description: 'Увлажняющая маска',
    price: 3960,
    oldPrice: 4400,
}, {
    id: 3,
    img: jar4,
    desc: 'для нормальной кожи',
    description: 'Гель для умывания',
    price: 7520,
    oldPrice: 9400,
}, {
    id: 4,
    img: jar2,
    desc: 'для нормальной кожи',
    description: 'Увлажняющая маска',
    price: 7520,
    oldPrice: 9400,
}, {
    id: 5,
    img: jar5,
    desc: 'для нормальной кожи',
    description: 'Увлажняющая маска',
    price: 7520,
    oldPrice: 9400,
}
]