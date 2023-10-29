import { ICard, cards } from '../helps'

export interface Query {
    limit: number;
    offset: number;
  }
  
  export const baseQuery: Query = {
    limit: 3,
    offset: 0
  };

  export const requestCards = (params: Query = baseQuery): Promise<ICard[]> => {

    const filterCards = cards.slice(params.offset, params.offset + params.limit)
   return new Promise((res, rej) => {
    setTimeout(() => {
        res(filterCards)
    }, 300)
   })
  }