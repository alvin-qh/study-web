<template>
  <div id="app">
    <Layout class="alv-layout">
      <Header class="alv-header">
        <router-link to="/">Media</router-link> |
        <router-link to="/file">File</router-link>
      </Header>
      <Content>
        <router-view />
      </Content>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Layout, Header, Content } from "view-design";

@Component({
  components: {
    Layout,
    Header,
    Content
  }
})
export default class Media extends Vue {}
</script>

<style lang="css" scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.alv-header {
  font-size: 16px;
}
</style>
