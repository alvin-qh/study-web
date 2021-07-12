import './common.css';
import showdown from 'showdown';

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/base16/default-dark.css';

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));

class Story {
  private $wrapper: HTMLDivElement;
  private $html: HTMLDivElement | undefined;
  private $code: HTMLElement;

  constructor(title: string, descirpt: string = "", language: string = 'html') {
    this.$wrapper = document.createElement('div');
    this.$wrapper.className = "border rounded-sm border-solid py-2 px-2 shadow-xl my-5";

    const $titleBlock: HTMLDivElement = document.createElement('div');
    $titleBlock.className = 'bg-gray-100 py-2 md:px-3 px-2';
    this.$wrapper.appendChild($titleBlock);

    const $storyTitle: HTMLDivElement = document.createElement('h1');
    $storyTitle.innerText = `# ${title}`
    $storyTitle.className = 'font-bold text-sm md:text-lg';
    $titleBlock.appendChild($storyTitle);

    if (descirpt) {
      const $storyDescript: HTMLSpanElement = document.createElement('span');
      $storyDescript.innerHTML = descirpt;
      $storyDescript.className = 'text-sm md:text-base pl-3 md:pl-4 text-gray-500';
      $titleBlock.appendChild($storyDescript);
    }

    if (language === 'html') {
      const $htmlBlock: HTMLDivElement = document.createElement('div');
      $htmlBlock.className = 'md:my-4 my-3';
      this.$wrapper.appendChild($htmlBlock);

      const $htmlTitle: HTMLElement = document.createElement('span');
      $htmlTitle.innerText = 'Demo: ';
      $htmlTitle.className = 'font-medium md:px-3 px-2 text-xs md:text-base';
      $htmlBlock.appendChild($htmlTitle);

      const $btnSx: HTMLButtonElement = document.createElement('button');
      $btnSx.className = "border border-blue-300 px-2 py-1 font-semibold text-xs"
      $btnSx.innerText = 'SX';
      $htmlBlock.appendChild($btnSx);

      const $btnMd: HTMLButtonElement = document.createElement('button');
      $btnMd.className = "border border-blue-300 px-2 py-1 font-semibold text-xs ml-3"
      $btnMd.innerText = 'MD';
      $htmlBlock.appendChild($btnMd);

      this.$html = document.createElement('div');
      this.$html.className = "bg-gray-100 py-2 px-3 mt-1";
      $htmlBlock.appendChild(this.$html);

      $btnSx.addEventListener('click', e => {
        this.$html!.className = 'bg-gray-100 py-2 px-3 mt-1 w-1/2';
      });

      $btnMd.addEventListener('click', e => {
        this.$html!.className = 'bg-gray-100 py-2 px-3 mt-1 w-full';
      });
    }

    const $codeBlock: HTMLDivElement = document.createElement('div');
    $codeBlock.className = 'md:my-4 my-3';
    this.$wrapper.appendChild($codeBlock);

    const $codeBlockTitle: HTMLElement = document.createElement('h2');
    $codeBlockTitle.className = 'font-medium md:px-3 px-2 text-xs md:text-base';
    $codeBlock.appendChild($codeBlockTitle);

    if (language === "markdown") {
      $codeBlockTitle.innerText = 'Content: ';

      this.$code = document.createElement('div');
      this.$code.className = `px-5 py-2 mt-1 text-xs md:text-base block markdown`;
      $codeBlock.appendChild(this.$code);
    } else {
      $codeBlockTitle.innerText = 'Source code: ';

      this.$code = document.createElement('code');
      this.$code.className = `px-5 mt-1 text-xs md:text-base hljs ${language} language-${language}`;

      const $pre: HTMLElement = document.createElement('pre');
      $pre.appendChild(this.$code);
      $codeBlock.appendChild($pre);
    }
    this.$code.setAttribute("lang", language);
  }

  code(code: string): Story {
    if (this.$html) {
      this.$html.innerHTML = code
    }
    const lang = this.$code.getAttribute("lang");
    if (lang === "markdown") {
      this.$code.innerHTML = new showdown.Converter().makeHtml(code);
    } else {
      this.$code.textContent = code;
    }
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
      $backward.innerText = '<<'
      $backward.href = '..';
      $backward.className = 'inline-block text-white text-xs md:text-base pb-1 font-bold px-3 bg-blue-600 rounded-md border border-blue-200 border-solid shadow shadow-md';
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
