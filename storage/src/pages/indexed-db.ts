import { Form, type FormData } from '@/components/form';
import { Tips } from '@/components/tips';
import { versions } from '@/libs/migration';

/**
 * 显式数据库中的 User 实体集合
 *
 * @param $h 数据表所在的 HTML 元素对象
 * @param db 数据库实例
 */
async function showTable(db: IDBDatabase, $h: HTMLDivElement): Promise<void> {
  async function renderTableRow(): Promise<string> {
    return await new Promise<string>((resolve, reject) => {
      const store = db.transaction(['user'], 'readonly').objectStore('user');
      const request = store.getAll();

      request.onerror = (event: Event) => {
        reject((event.target as IDBRequest).error);
      };

      request.onsuccess = (event: Event) => {
        const results = ((event.target as IDBRequest).result as FormData[]);
        const html: string[] = [];
        results.forEach(result => {
          html.push(`
            <tr>
              <td>${result.name}</td>
              <td>${result.gender === 'M' ? 'Male' : 'Female'}</td>
              <td>${result.birthday ?? ''}</td>
              <td>${result.telephone ?? ''}</td>
              <td><button class="btn-delete" data-id="${result.name}">Delete</button></td>
            </tr>
          `);
        });
        resolve(html.join(''));
      };
    });
  }

  $h.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Birthday</th>
        <th>TEL</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
    ${await renderTableRow()}
    </tbody>
  </table>`;
}

/**
 * 添加一条用户数据
 *
 * @param db 数据库实例
 * @param user 用户数据
 */
async function addUser(db: IDBDatabase, user: FormData): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const req = db.transaction(['user'], 'readwrite')
      .objectStore('user')
      .add(user);

    req.onsuccess = async () => {
      resolve();
    };

    req.onerror = (event: Event) => {
      reject((event.target as IDBRequest).error);
    };
  });
}

export default (): HTMLElement => {
  const $root = document.createElement('div');

  const tips = new Tips();
  tips.render($root);

  const request = window.indexedDB.open('test', 2);

  request.onerror = (event: Event) => {
    const err = (event.target as IDBRequest).error;
    if (err) {
      tips.show(`"${err.name}" caused, reason: "${err.message}"`, 'error');
    } else {
      tips.show('Cannot use Indexed DB on this browser', 'error');
    }
  };

  request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
    // 当浏览器尚未建立数据库, 或者数据库版本较旧时, 调用此方法
    const db = (event.target as IDBOpenDBRequest).result;

    let { oldVersion, newVersion } = event;
    console.log(oldVersion, newVersion);
    if (!newVersion) {
      newVersion = db.version;
    }

    for (let i = oldVersion + 1; i <= newVersion; i++) {
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

          store.transaction.oncomplete = () => {
            // upgrade transaction is completed
          };
        });
      }
    }
  };

  request.onsuccess = async (event: Event) => {
    const db = (event.target as IDBOpenDBRequest).result;

    const $row1 = document.createElement('div');
    $row1.className = 'container';
    $root.appendChild($row1);

    const $form = document.createElement('div');
    $form.className = 'form';
    $row1.appendChild($form);

    const $row2 = document.createElement('div');
    $row2.className = 'container';
    $root.appendChild($row2);
    await showTable(db, $row2);

    const form = new Form(undefined, async (fd: FormData): Promise<void> => {
      try {
        await addUser(db, fd);
        await showTable(db, $row2);
      } catch (err) {
        const error = err as Error;
        tips.show(`"${error.name}" caused, reason: "${error.message}"`, 'error');
      }
    });
    form.render($form);
  };

  return $root;
};
