(self.webpackChunkstudy_web_tailwindcss=self.webpackChunkstudy_web_tailwindcss||[]).push([[435],{175:(e,n,l)=>{"use strict";var s=l(200);window.onload=function(){new s.O("Flex Grow",!0).append([new s.o("Grow").code('\x3c!-- The \'flex-grow\' element will grow to fill the spaces --\x3e\n<div class="flex space-x-2 font-semibold text-white text-lg">\n  <div class="flex-none w-16 h-16 bg-purple-400 flex items-center justify-center">\n    Locked\n  </div>\n  <div class="flex-grow h-16 bg-purple-400 flex items-center justify-center">\n    Growable\n  </div>\n  <div class="flex-none w-16 h-16 bg-purple-400 flex items-center justify-center">\n    Locked\n  </div>\n</div>\n'),new s.o("Don't Grow").code('\x3c!-- Use \'flex-grow-0\' will prevent the element grow up --\x3e\n<div class="flex space-x-2 font-semibold text-white text-lg">\n  <div class="flex-grow w-16 h-16 bg-purple-400 flex items-center justify-center">\n    Locked\n  </div>\n  <div class="flex-grow-0 h-16 px-4 bg-purple-400 flex items-center justify-center">\n    Growable\n  </div>\n  <div class="flex-grow w-16 h-16 bg-purple-400 flex items-center justify-center">\n    Locked\n  </div>\n</div>\n'),new s.o("Responsive").code('<div class="flex space-x-2 font-semibold text-white text-lg">\n  <div class="flex-grow md:flex-grow-0 w-16 h-16 bg-pink-400 flex items-center justify-center">\n    1\n  </div>\n  <div class="flex-grow md:flex-grow-0 w-16 h-16 bg-pink-400 flex items-center justify-center">\n    2\n  </div>\n  <div class="flex-grow md:flex-grow-0 w-16 h-16 bg-pink-400 flex items-center justify-center">\n    3\n  </div>\n</div>\n'),new s.o("Grow Values","javascript").code("// wailwind.config.js\nmodule.exports = {\n  theme: {\n    flexGrow: {\n      '0': 0,\n//    DEFAULT: 1,   // Disable original grow default value\n      DEFAULT: 2,   // Add new grow default value\n      '1': 1        // Add 'flex-group-1' class\n  }\n}\n"),new s.o("Variants","javascript").code("// wailwind.config.js\nmodule.exports = {\n  variants: {\n    extend: {\n      // ...\n      flexGrow: ['hover', 'focus'],\n    }\n  }\n}\n"),new s.o("Disabling","javascript").code("// wailwind.config.js\nmodule.exports = {\n  variants: {\n    extend: {\n      // ...\n      flexGrow: false\n    }\n  }\n}")]).render()}}},e=>{"use strict";e.O(0,[592],(()=>(175,e(e.s=175)))),e.O()}]);