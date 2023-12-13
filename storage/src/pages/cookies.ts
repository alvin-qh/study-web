export function getCookie(name: string): string | null {
  const arr = document.cookie.match(new RegExp(`(^| )${name}=([^;]*)(;|$)`));
  if (arr != null) {
    return decodeURIComponent(arr[2]);
  }
  return null;
}

function setCookie(name: string, value: string, expiresSecond: number, path: string = '/'): void {
  const now = new Date();
  now.setTime(now.getTime() + expiresSecond * 1000);

  const expires = `expires=${now.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=${path}`;
}

function deleteCookie(name: string): void {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

function getAllCookies(): Record<string, string> {
  const cookies = document.cookie;
  if (!cookies) {
    return {};
  }

  return cookies.split(';').reduce((c: Record<string, string>, pairs: string) => {
    const [key, value] = pairs.split('=', 2);
    c[key.trim()] = decodeURIComponent(value);
    return c;
  }, {});
}

function _renderAllCookies($h: HTMLElement): void {
  function _renderTableRow(): string {
    const html: string[] = [];

    const cookies = getAllCookies();
    console.log(cookies);

    Object.keys(cookies).forEach(key => {
      html.push(`
    <tr>
      <td>${key}</td>
      <td>${cookies[key]}</td>
      <td>
        <a class="delete-cookie" data-cookie-name="${key}" href="javascript:;">Delete</a>
      </td>
    </tr>`);
    });
    return html.join('');
  }

  $h.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
    ${_renderTableRow()}
    </tbody>
  </table>
  `;

  $h.querySelectorAll('.delete-cookie').forEach($elem => {
    $elem.addEventListener('click', (e: Event) => {
      e.preventDefault();
      deleteCookie((e.currentTarget as HTMLElement).getAttribute('data-cookie-name') ?? '');

      _renderAllCookies($h);
    });
  });
}


export default (): HTMLElement => {
  const $main = document.createElement('div');

  const $row1 = document.createElement('div');
  $row1.className = 'container';
  $row1.innerHTML = `
    <form class="form">
      <div class="form-row">
        <label class="form-label">Name: </label>
        <input type="text" class="form-input" name="name" placeholder="Please input cookie name" />
      </div>
      <div class="form-row">
        <label class="form-label">Value: </label>
        <input type="text" class="form-input" name="value" placeholder="Please input cookie value" />
      </div>
      <div class="form-row">
        <label class="form-label">Expired: </label>
        <select name="expired">
          <option value="${10}">10s</option>
          <option value="${30}">30s</option>
          <option value="${60}">1m</option>
          <option value="${10 * 60}" selected>10m</option>
          <option value="${60 * 60}">1h</option>
          <option value="${2 * 60 * 60}">2h</option>
          <option value="${24 * 60 * 60}">1d</option>
          <option value="${5 * 24 * 60 * 60}">5d</option>
          <option value="-1">Never</option>
        </select>
      </div>
      <div class="button-row">
        <button type="button">Save</button>
      </div>
    </form>
  `;
  $main.appendChild($row1);

  const $inputName = $row1.querySelector<HTMLInputElement>('input[name=name]')!;
  const $inputValue = $row1.querySelector<HTMLInputElement>('input[name=value]')!;
  const $selectExpired = $row1.querySelector<HTMLSelectElement>('select[name=expired]')!;

  $row1.querySelector('button')!.addEventListener('click', () => {
    if ($inputName.value && $inputValue.value) {
      const expired = parseInt($selectExpired.value, 10);
      setCookie($inputName.value, $inputValue.value, expired);

      _renderAllCookies($row2);

      $inputName.value = '';
      $inputValue.value = '';
    }
  });


  const $row2 = document.createElement('div');
  $row2.className = 'container cookie-list';
  $main.appendChild($row2);

  _renderAllCookies($row2);

  return $main;
};
