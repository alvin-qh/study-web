import { Story, StoryBook } from '../common';

window.onload = () => {
  const book = new StoryBook('Layout', true);
  book.append([
    new Story("Container")
      .code(`\
<div class="container mx-auto">
    <div class="bg-red-200 h-8"></div>
</div>
<div class="container mx-auto px-10 mt-1">
    <div class="bg-red-200 h-8"></div>
</div>
`),
    new Story("Container with diffrent screen size")
      .code(`\
<div class="md:container md:mx-auto">
<div class="bg-red-200 h-8"></div>
</div>`),
    new Story("Center container by default", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  theme: {
    container: {
      center: true
    }
  }
};
`),
    new Story("Default horizontal padding", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  theme: {
    container: {
      padding: '2rem',
    }
  }
};
`),
    new Story("Override horizontal padding for difference screen size", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  }
};
`),
    new Story("Disable responsive", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  variants: {
    // ...
    container: []
  }
};
`),
new Story("Disable container", "javascript")
.code(`\
/* tailwind.config.js */      
module.exports = {
  corePlugins: {
    // ...
    container: false,
  }
};
`)
  ])
    .render();
};
