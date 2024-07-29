export declare interface MenuData {
  label: string
  path?: string
  icon?: string
  iconColor?: string
  separator: boolean
  children?: MenuData[]
}

export const menuData: MenuData[] = [
  {
    icon: 'approval',
    label: '基础',
    separator: true,
    children: [
      {
        label: '基础模板',
        path: '/template',
        separator: false
      },
      {
        label: '响应式',
        path: '/reactivity',
        separator: false
      },
      {
        label: '计算属性',
        path: '/compute',
        separator: false
      },
      {
        label: '类与样式',
        path: '/class-style',
        separator: false
      },
      {
        label: '事件处理',
        path: '/event',
        separator: false
      }
    ]
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
];
