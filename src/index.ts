import {conversion} from './conversion';
import { Unit } from './type/unit';

const isExist = (unit: Unit): void =>  {
  if(!conversion[unit]) {
    throw new Error(unit + ' : is not exist')
  }
}

export const convert = (quantity: number) => {
  let x: number, y: number;
  return {
    from: (from: Unit) => {
      isExist(from);
      x = conversion[from];
      return {
        to: (to: Unit) => {
          isExist(to);
          y = conversion[to];
          return quantity * (x/y);
        }
      }
    }
  }
};
