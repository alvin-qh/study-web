export class StorageState {
  private readonly _storage: Storage;
  private readonly _title: string;

  constructor(storage: Storage, title: string) {
    this._storage = storage;
    this._title = title;
  }

  _storageContent(): string {
    const html: string[] = ['<table><tbody>'];
    Object.keys(this._storage).forEach(key => {
      // eslint-disable-next-line no-prototype-builtins
      if (this._storage.hasOwnProperty(key)) {
        html.push(`<th>${key}</th>`);
        html.push(`<td>${this._storage[key]}</td>`);
      }
    });

    html.push('</tbody></table>');
    return html.join('');
  }

  render($h: HTMLElement): void {
    const $main = document.createElement('div');
    $main.innerHTML = `
    <div class="storage-info">
      <div class="title">
        ${this._title}
      </div>
      <div class="storage-size">
        <strong>Size: </strong>
        <div>${this._storage.length}</div>
      </div>
      <div class="storage-content">
        <strong>Content: </strong>
        <div class="content">${this._storageContent()}</div>
      <div>
    </div>`;

    $h.innerHTML = '';
    $h.appendChild($main);
  }
}
