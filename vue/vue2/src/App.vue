<template>
  <div id="app">
    <Layout class="layout">
      <Header class="header">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="logo"></div>
          <MenuItem name="1" to="/">
          <Icon type="ios-home" />
          {{ $t("home") }}
          </MenuItem>
          <Submenu name="2">
            <template slot="title">
              <Icon type="md-help-circle" />
              {{ $t("setting-help") }}
            </template>
            <MenuItem name="3-1" to="/about">
            <Icon type="md-alert" />
            {{ $t("setting-help-about") }}
            </MenuItem>
          </Submenu>
          <Submenu name="3" class="align-right">
            <template slot="title">
              <Icon type="ios-construct" />
              {{ $t("settings") }}
            </template>
            <MenuGroup :title="$t('setting-i18n')">
              <MenuItem name="3-1" @click.native="changeLocation('en')">
              English
              </MenuItem>
              <MenuItem name="3-2" @click.native="changeLocation('zh-CN')">
              简体中文
              </MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </Header>
      <Content class="content">
        <router-view />
      </Content>
      <Footer class="footer">{{ $t("footer") }}</Footer>
    </Layout>
  </div>
</template>

<script lang="ts">
import {
  Content,
  Footer,
  Header,
  Icon,
  Layout,
  Menu,
  MenuGroup,
  MenuItem,
  Submenu,
} from 'view-design';
import { Component, Vue } from 'vue-property-decorator';

import i18n from '@/i18n';

@Component({
  components: {
    Layout,
    Header,
    Content,
    Footer,
    Menu,
    MenuItem,
    Icon,
    MenuGroup,
    Submenu,
  },
})
export default class HomeVue extends Vue {
  changeLocation(lang: string): void {
    if (window.localStorage) {
      const s = window.localStorage;
      s.locale = lang;
    }
    i18n.locale = lang;
  }
}
</script>

<style lang="less" scoped>
#app {
  .layout {
    .header {
      .align-right {
        float: right;
      }
    }

    .footer {
      padding: 10px 20px;
      margin-top: 20px;
      text-align: center;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "home": "Home",
    "settings": "Settings",
    "setting-i18n": "Language",
    "setting-help": "Help",
    "setting-help-about": "About",
    "footer": "2020-2021 Alvin©, Powered by VueCli"
  },
  "zh-CN": {
    "home": "首页",
    "settings": "综合设置",
    "setting-i18n": "语言设置",
    "setting-help": "帮助",
    "setting-help-about": "关于",
    "footer": "2020-2021 Alvin©, Powered by VueCli"
  }
}
</i18n>
