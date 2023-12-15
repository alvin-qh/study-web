import { Form, type FormData } from '@/components/form';
import { Tips } from '@/components/tips';
import { versions } from '@/libs/migration';

const tips = new Tips();

/**
 * 查询所有的用户记录
 *
 * @param db 数据库实例
 * @returns 数据库记录集合
 */
async function findUserByQuery(db: IDBDatabase): Promise<FormData[]> {
  return await new Promise<FormData[]>((resolve, reject) => {
    const store = db.transaction(['user'], 'readonly').objectStore('user');
    const request = store.getAll();

    request.onerror = (event: Event) => {
      reject((event.target as IDBRequest).error);
    };

    request.onsuccess = (event: Event) => {
      resolve((event.target as IDBRequest).result as FormData[]);
    };
  });
}

/**
 * 通过游标方式查询数据库
 *
 * @param db 数据库实例
 * @param callback 每次查询结果
 */
function findUserByCursor(db: IDBDatabase, callback: (data: FormData) => void): void {
  const store = db.transaction(['user'], 'readonly').objectStore('user');
  store.openCursor().onsuccess = (event: Event) => {
    const cursor = (event.target as IDBRequest).result as IDBCursorWithValue;
    if (cursor) {
      const data = cursor.value as FormData;
      callback(data);
      cursor.continue();
    }
  };
}

/**
 * 通过查询显示数据库中的 User 实体集合
 *
 * @param $h 数据表所在的 HTML 元素对象
 * @param db 数据库实例
 */
async function showTableByQuery(db: IDBDatabase, $h: HTMLDivElement): Promise<void> {
  const results = await findUserByQuery(db);

  function renderTableRow(): string {
    const html: string[] = [];
    results.forEach(result => {
      html.push(`
        <tr>
          <td>${result.name}</td>
          <td>${result.gender === 'M' ? 'Male' : 'Female'}</td>
          <td>${result.birthday ?? ''}</td>
          <td>${result.telephone ?? ''}</td>
          <td><button class="btn-delete" data-name="${result.name}">Delete</button></td>
        </tr>
      `);
    });
    return html.join('');
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
    ${renderTableRow()}
    </tbody>
  </table>`;
}

/**
 * 通过游标显示数据库中的 User 实体集合
 *
 * @param $h 数据表所在的 HTML 元素对象
 * @param db 数据库实例
 */
async function showTableByCursor(db: IDBDatabase, $h: HTMLDivElement): Promise<void> {
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
    <tbody></tbody>
  </table>`;

  const $tbody = $h.querySelector('tbody')!;

  findUserByCursor(db, (data: FormData) => {
    $tbody.innerHTML += `
    <tr>
      <td>${data.name}</td> 
      <td>${data.gender === 'M' ? 'Male' : 'Female'}</td>
      <td>${data.birthday ?? ''}</td>
      <td>${data.telephone ?? ''}</td>
      <td><button class="btn-delete" data-name="${data.name}">Delete</button></td>
    </tr>`;
  });
}

/**
 * 通过指定的查询方法显示表格
 *
 * @param db 数据库实例
 * @param $h 数据库所在元素
 * @param method 数据库查询方法
 */
async function showTable(db: IDBDatabase, $h: HTMLDivElement, method: 'QUERY' | 'CURSOR'): Promise<void> {
  let promise;
  if (method === 'QUERY') {
    promise = showTableByQuery(db, $h);
  } else if (method === 'CURSOR') {
    promise = showTableByCursor(db, $h);
  } else {
    tips.show(`Invalid query method "${method as string}"`, 'error');
    return;
  }

  promise.catch(error => {
    tips.show(`"${error.name}" caused, reason: "${error.message}"`, 'error');
  });

  await promise;
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

/**
 * 根据数据库的 Key 删除数据
 *
 * @param db 数据库实例
 * @param userName 用户姓名, 即数据的 key
 */
async function deleteUser(db: IDBDatabase, userName: string): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const request = db.transaction(['user'], 'readwrite')
      .objectStore('user')
      .delete(userName);

    request.onsuccess = async () => {
      resolve();
    };

    request.onerror = (event: Event) => {
      reject((event.target as IDBRequest).error);
    };
  });
}

export default (): HTMLElement => {
  const $root = document.createElement('div');
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

    const $method = document.createElement('div');
    $method.className = 'query-method';
    $row2.appendChild($method);

    const $table = document.createElement('div');
    $row2.appendChild($table);

    let method: 'QUERY' | 'CURSOR' = 'QUERY';
    ((inputs: Record<string, HTMLInputElement>) => {
      Object.keys(inputs).forEach(key => {
        const $input = inputs[key];
        $input.type = 'radio';
        $input.value = key;
        $input.name = 'query-method';
        if (key === method) {
          $input.checked = true;
        }

        $input.addEventListener('change', () => {
          method = key as 'QUERY' | 'CURSOR';
          showTable(db, $table, method).catch(() => { });
        });
        $method.appendChild($input);

        const $label = document.createElement('label');
        $label.textContent = key;
        $method.appendChild($label);
      });
    })({ QUERY: document.createElement('input'), CURSOR: document.createElement('input') });

    await showTable(db, $table, method);

    const form = new Form(null, async (fd: FormData): Promise<void> => {
      try {
        await addUser(db, fd);
        await showTable(db, $table, method);
      } catch (err) {
        const error = err as Error;
        tips.show(`"${error.name}" caused, reason: "${error.message}"`, 'error');
      }
    });
    form.render($form);

    $table.querySelectorAll('button.btn-delete').forEach(elem => {
      const btn = elem as HTMLButtonElement;

      btn.addEventListener('click', () => {
        const name = btn.dataset.name!;
        deleteUser(db, name)
          .then(async () => { await showTable(db, $table, method); })
          .catch((error: Error) => { tips.show(`"${error.name}" caused, reason: "${error.message}"`, 'error'); });
      });
    });
  };

  return $root;
};
