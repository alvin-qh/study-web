import { type Ref } from 'vue';

export { default as InjectionComp } from './InjectionComp.vue';

export interface Point {
  x: number
  y: number
}

export type PointCallback = (x: number, y: number) => void;

export interface InjectionObj {
  clientPoint?: Ref<Point>
  changeClientPoint?: PointCallback
}
