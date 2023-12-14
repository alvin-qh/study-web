import { Tips } from '@/components/tips';
// import { versions } from '@/libs/migration';

export default (): HTMLElement => {
  const $root = document.createElement('div');

  const tips = new Tips();
  tips.render($root);

  const request = window.indexedDB.open('test', 2);

  request.onerror = (event: Event) => {
    const err = (event.target as IDBRequest).error;
    if (err) {
      tips.show(`Some error caused, ${err.name}`);
    } else {
      tips.show('Cannot use Indexed DB on this browser');
    }
  };

  request.onupgradeneeded = async (event: IDBVersionChangeEvent) => {
    // 当浏览器尚未建立数据库, 或者数据库版本较旧时, 调用此方法
    const { versions } = await import('@/libs/migration');

    const db = (event.target as IDBOpenDBRequest).result;

    let { oldVersion, newVersion } = event;
    if (!newVersion) {
      newVersion = db.version;
    }

    for (let i = oldVersion; i < newVersion; i++) {
      if (i in versions) {
        const schemas = versions[i];
        schemas.forEach(schema => {
          const store = db.createObjectStore(schema.name, {
            autoIncrement: schema.autoIncrement,
            keyPath: schema.keyPath
          });
          if (schema.indexes) {
            schema.indexes.forEach(index => {
              store.createIndex(index.name, index.keyPath, { unique: index.unique });
            });
          }
          console.log();
        });
      }
    }
  };

  request.onsuccess = (event: Event) => {
    // const db = (event.target as IDBOpenDBRequest).result;
  };

  return $root;
};
