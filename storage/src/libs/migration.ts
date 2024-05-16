export interface StoreSchema {
  name: string
  keyPath?: string
  autoIncrement?: boolean
  indexes?: Array<{ name: string, keyPath: string, unique: boolean }>
}

export const versions: Record<number, StoreSchema[]> = {
  1: [
    {
      name: 'org',
      keyPath: 'name'
    }
  ],
  2: [
    {
      name: 'user',
      keyPath: 'name',
      indexes: [
        { name: 'telephone', keyPath: 'telephone', unique: true }
      ]
    }
  ]
};
