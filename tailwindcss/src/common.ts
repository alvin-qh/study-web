import './common.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-dark.css';


class Story {
  private $wrapper: HTMLDivElement;
  private $html: HTMLDivElement;
  private $display: HTMLElement;

  constructor(title: string) {
    this.$wrapper = document.createElement('div');
    this.$wrapper.className = "md:border md:rounded-sm md:border-solid md:py-5"

    this.$html = document.createElement('div');
    this.$html.className = "md:px-5"
    this.$wrapper.appendChild(this.$html);

    
    this.$display = document.createElement('code');
    this.$display.className = 'md:px-5 language-xml hljs';
    const $pre: HTMLElement = document.createElement('pre');
    $pre.appendChild(this.$display);
    this.$wrapper.appendChild($pre);

    this._setTitle(title)
  }

  private _setTitle(title: string) {
    const $title: HTMLDivElement = document.createElement('div');
    $title.innerText = title;

    this.$wrapper.appendChild($title);
  }

  html(html: string): Story {
    this.$html.innerHTML = html
    this.$display.innerText = html;
    return this;
  }

  get $element(): HTMLDivElement {
    return this.$wrapper
  }
}

class StoryBook {
  private $main: HTMLElement;

  constructor(title: string, mainElement: string = 'main') {
    this.$main = document.getElementById(mainElement)!;
    this.$main.className = 'md:container md:mx-auto';

    const $title: HTMLDivElement = document.createElement('div');
    $title.className = "md:text-center md:text-5xl md:py-10";
    $title.innerText = title;
    this.$main.appendChild($title);
  }

  append(storys: Array<Story>): StoryBook {
    storys.forEach(story => {
      this.$main.appendChild(story.$element);
    });
    return this;
  }

  render() : StoryBook {
    hljs.highlightAll();
    return this;
  }
}


export {
  Story,
  StoryBook
}
