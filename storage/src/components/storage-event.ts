interface StorageChangeRecord {
  area: 'LOCAL' | 'SESSION'
  key: string
  oldValue: string
  newValue: string
  updateAt: Date
}

const _storageChangeRecords: StorageChangeRecord[] = [];

class StorageRecordEvent extends Event {
  get records(): StorageChangeRecord[] {
    return _storageChangeRecords;
  }
}

export function addStorageChangeRecord(record: StorageChangeRecord): void {
  _storageChangeRecords.push(record);
  window.dispatchEvent(new StorageRecordEvent('storage-record'));
}

export class StorageEventState {
  private _renderTableContent(): string {
    const html: string[] = [];
    _storageChangeRecords.forEach(record => {
      html.push('<tr>');
      html.push(`<td>${record.updateAt.toISOString()}</td>`);
      html.push(`<th>${record.area}</th>`);
      html.push(`<th>${record.key}</th>`);
      html.push(`<td>${record.oldValue}</td>`);
      html.push(`<td>${record.newValue}</td>`);
      html.push('</tr>');
    });
    return html.join('');
  }

  render($h: HTMLElement): void {
    const $main = document.createElement('div');
    $main.innerHTML = `
    <div class="storage-event">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Area</th>
            <th>Key</th>
            <th>Old Value</th>
            <th>New Value</th>
          </tr>
        </thead>
        <tbody>${this._renderTableContent()}</tbody>
      </table>
    </div>`;

    $h.innerHTML = '';
    $h.appendChild($main);
  }
}
