export { default as AsyncUser } from './AsyncUser.vue';

// 导出用户类型
export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  avatar: string
}
