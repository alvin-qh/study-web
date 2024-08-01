<!-- 主页 -->

<template>
  <div class="home">
    <div class="title">
      Welcome to Vue Demos
    </div>
    <div class="logo">
      <img :src="logo">
    </div>

    <div class="link">
      <a href="https://cn.vuejs.org/" target="_blank">Vue 官方网站</a> |
      <a href="https://vitejs.cn/vite3-cn/" target="_blank">Vite 官方网站</a>
    </div>

    <hr>

    <div class="code">
      <div class="code-title">
        Create Vue Project
      </div>
      <pre><code class="language-bash">{{ createProject }}</code></pre>
      <pre><code class="language">{{ codeCreateOutput }}</code></pre>

      <div class="code-title">
        Initialize Project
      </div>
      <pre><code class="language-bash">{{ codeInitProject }}</code></pre>

      <div class="code-title">
        Start Development Server
      </div>
      <pre><code class="language-bash">{{ codeStartDevServer }}</code></pre>

      <div class="code-title">
        Build Project
      </div>
      <pre><code class="language-bash">{{ codeBuild }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '/vue.svg';
import { useHighlight } from '@/lib/highlight';

const createProject = '$ npm create vue@latest';

const codeCreateOutput = `✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./<your-project-name>...
Done.`;

const codeInitProject = `$ cd <your-project-name>
$ pnpm install`;

const codeStartDevServer = '$ pnpm run dev';

const codeBuild = '$ pnpm run build';

useHighlight();
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vh;

  .title {
    font-size: 1.5vw;
  }

  .logo {
    img {
      width: 8vw;
      margin-top: 3vh;
    }
  }

  .link {
    margin-top: 2vh;
  }

  hr {
    margin: 3vh 0;
  }

  .code {
    width: 50%;

    .code-title {
      font-weight: 800;
    }
  }
}
</style>
