import { type allLifecycle } from '@/lib/lifecycle';

import { type ElementType } from './common';

// 通过数组内容得到类型
export type Lifecycle = ElementType<typeof allLifecycle>;

export interface LifecycleEvent {
  readonly index: number
  readonly lifecycle: Lifecycle
}
