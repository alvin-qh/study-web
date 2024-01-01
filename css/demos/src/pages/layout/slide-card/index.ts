import './index.css';

import { type Component } from '@/component/base';

export default class Shining implements Component {
  render($h: HTMLElement): void {
    const $div = document.createElement('div');
    $div.className = 'slide-card';

    $div.innerHTML = `
    <div class="card">
      <input type="radio" name="select" id="slide-1" checked>
      <input type="radio" name="select" id="slide-2">
      <input type="radio" name="select" id="slide-3">
      <input type="checkbox" id="slide-image">

      <!-- 滑块, 每个滑块对应一个 radio, 点击滑块时相当于选中对应的 radio -->
      <div class="slider">
        <label for="slide-1" class="slide slide-1"></label>
        <label for="slide-2" class="slide slide-2"></label>
        <label for="slide-3" class="slide slide-3"></label>
      </div>

      <!-- 卡片内容 -->

      <div class="inner-part">
        <!-- 卡片图片,  -->
        <label for="slide-image" class="img">
          <img class="img-1" src="/pure/1.svg"/>
        </label>
        <div class="content content-1">
          <div class="title">Lorem10</div>
          <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, laborum!</div>
          <button>Read More</button>
        </div>
      </div>
      <div class="inner-part">
        <label for="slide-image" class="img">
          <img class="img-2" src="/pure/2.svg"/>
        </label>
        <div class="content content-2">
          <div class="title">Lorem15</div>
          <div class="text">
            Lorem rebum diam et sit ut est facilisis erat sit id feugiat. Amet dolores wisi velit et et.
            Justo erat minim dolore sit diam et ipsum ut dolor. Vero eos labore magna lorem sadipscing justo amet sed exerci stet kasd eleifend.
            Sadipscing dolore dolore sadipscing aliquam ipsum tempor diam ea.
          </div>
          <button>Read More</button>
        </div>
      </div>
      <div class="inner-part">
        <label for="slide-image" class="img">
          <img class="img-3" src="/pure/3.svg"/>
        </label>
        <div class="content content-3">
          <div class="title">Lorem20</div>
          <div class="text">
            Lorem ipsum dolor sit amet zzril consetetur accusam est takimata eos hendrerit est accusam est vero magna diam magna stet consetetur.
            Et et duo takimata lorem aliquip delenit et accusam duis dolor lorem. Eirmod exerci diam tempor diam no sea velit sanctus liber magna
            eos accusam sed.
          </div>
          <button>Read More</button>
        </div>
      </div>
    </div>
    `;

    $h.innerHTML = '';
    $h.appendChild($div);
  }
}
