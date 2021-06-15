import './common.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-dark.css';


class Story {
  private $wrapper: HTMLDivElement;
  private $html: HTMLDivElement;
  private $display: HTMLElement;

  constructor(title: string) {
    this.$wrapper = document.createElement('div');
    this.$wrapper.className = "border rounded-sm border-solid py-2 px-2 shadow-xl";

    const $storyTitle: HTMLDivElement = document.createElement('h1');
    $storyTitle.innerText = title
    $storyTitle.className = 'font-bold text-sm md:text-lg bg-gray-100 py-2 md:px-3 px-2';
    this.$wrapper.appendChild($storyTitle);

    const $blockHtml: HTMLDivElement = document.createElement('div');
    $blockHtml.className = 'md:my-4 my-3';
    this.$wrapper.appendChild($blockHtml);

    const $blockHtmlTitle: HTMLElement = document.createElement('h2');
    $blockHtmlTitle.innerText = 'Demo: ';
    $blockHtmlTitle.className = 'font-medium md:px-3 px-2 text-xs md:text-base';
    $blockHtml.appendChild($blockHtmlTitle);

    this.$html = document.createElement('div');
    this.$html.className = "bg-gray-100 py-2 px-3 mt-1"
    $blockHtml.appendChild(this.$html);

    const $blockDisplay: HTMLDivElement = document.createElement('div');
    $blockDisplay.className = 'md:my-4 my-3';
    this.$wrapper.appendChild($blockDisplay);

    const $blockDisplayTitle: HTMLElement = document.createElement('h2');
    $blockDisplayTitle.innerText = 'Source code: ';
    $blockDisplayTitle.className = 'font-medium md:px-3 px-2 text-xs md:text-base';
    $blockDisplay.appendChild($blockDisplayTitle);

    this.$display = document.createElement('code');
    this.$display.className = 'px-5 mt-1 text-xs md:text-base language-xml hljs';
    const $pre: HTMLElement = document.createElement('pre');
    $pre.appendChild(this.$display);
    $blockDisplay.appendChild($pre);
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

  constructor(title: string, showBackward: boolean = false, mainElement: string = 'main') {
    this.$main = document.getElementById(mainElement)!;
    this.$main.className = 'container mx-auto sm:px-2 px-2 lg:px-0';

    const $title: HTMLDivElement = document.createElement('div');
    $title.className = "text-center md:text-5xl text-xl md:py-10 py-4";
    $title.innerText = title;
    this.$main.appendChild($title);

    if (showBackward) {
      const $backward: HTMLAnchorElement = document.createElement('a');
      $backward.innerText = '⇦ Back'
      $backward.href = '..';
      $backward.className = 'inline-block text-xs md:text-base mb-2 px-3 py-1 bg-blue-100 border border-blue-200 border-solid shadow';
      this.$main.appendChild($backward);
    }
  }

  append(storys: Array<Story>): StoryBook {
    storys.forEach(story => {
      this.$main.appendChild(story.$element);
    });
    return this;
  }

  render(): StoryBook {
    hljs.highlightAll();
    return this;
  }
}


export {
  Story,
  StoryBook
}
