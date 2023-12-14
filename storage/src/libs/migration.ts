export interface StoreSchema {
  name: string
  keyPath?: string
  autoIncrement?: boolean
  indexes: Array<{ name: string, keyPath: string, unique: boolean }>
}

export const versions: Record<number, StoreSchema[]> = {
  1: [
    {
      name: 'org',
      keyPath: 'id',
      indexes: [
        { name: 'name', keyPath: 'name', unique: true }
      ]
    }
  ],
  2: [
    {
      name: 'user',
      keyPath: 'id',
      indexes: [
        { name: 'name', keyPath: 'name', unique: true }
      ]
    }
  ]
};
