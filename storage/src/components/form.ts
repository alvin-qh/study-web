export interface FormData {
  name: string
  gender: 'M' | 'F'
  birthday?: string
  telephone?: string
}

export class Form {
  private readonly _data: FormData;
  private readonly _onSubmit?: (data: FormData) => void;

  constructor(data?: FormData, onSubmit?: (fd: FormData) => void) {
    this._data = data ?? {
      name: '', gender: 'M'
    };
    this._onSubmit = onSubmit;
  }

  get data(): FormData {
    return this._data;
  }

  render($h: HTMLElement): void {
    const $form = document.createElement('form');
    $form.className = 'form';
    $form.action = '#';

    $form.innerHTML = `
    <div class="form-row">
      <label class="form-label">Name:</label>
      <input type="text" class="form-input" name="name" value="${this._data.name}" />
    </div>

    <div class="form-row">
      <label class="form-label">Gender:</label>
      <input type="radio" class="form-input" name="gender" value="M" />
      <label class="radio-label">Male</label>
      <input type="radio" class="form-input" name="gender" value="F" />
      <label class="radio-label">Female</label>
    </div>

    <div class="form-row">
      <label class="form-label">Birthday:</label>
      <input type="text" class="form-input" name="birthday" value="${this._data.birthday ?? ''}" pattern="\\d{4}-\\d{1,2}-\\d{1,2}" placeholder='yyyy-mm-dd' />
    </div>

    <div class="form-row">
      <label class="form-label">TEL:</label>
      <input type="text" class="form-input" name="telephone" value="${this._data.telephone ?? ''}" pattern="[\\d\\-]{8,11}" placeholder='1300000000' />
    </div>

    <div class="button-row">
      <button type="submit" class="form-submit">Submit</button>
    </div>`;

    $form.querySelector('input[name=name]')!.addEventListener('input', (e: Event) => {
      this._data.name = (e.currentTarget as HTMLInputElement).value;
    });

    $form.querySelectorAll('input[name=gender]')!.forEach(($elem) => {
      $elem.addEventListener('change', (e: Event) => {
        this._data.gender = ((e.currentTarget as HTMLInputElement).value) as 'M' | 'F';
      });

      if (this._data.gender === ($elem as HTMLInputElement).value) {
        ($elem as HTMLInputElement).checked = true;
      }
    });

    $form.querySelector('input[name=birthday]')!.addEventListener('input', (e: Event) => {
      this._data.birthday = (e.currentTarget as HTMLInputElement).value;
    });

    $form.querySelector('input[name=telephone]')!.addEventListener('input', (e: Event) => {
      this._data.telephone = (e.currentTarget as HTMLInputElement).value;
    });

    $form.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      this._onSubmit?.(this._data);
    });

    $h.appendChild($form);
  }
}
