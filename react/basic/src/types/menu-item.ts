/**
 * 定义菜单项类型
 */
export interface MenuItem {
  // 菜单项文本
  label: string
  // 菜单项链接
  link?: string
  // 菜单项图标
  icon?: string
  // 子菜单项
  children?: MenuItem[]
}
