<template>
  <main>
    <Breadcrumb class="breadcrumb">
      <BreadcrumbItem>
        <Icon type="ios-home" />Home
      </BreadcrumbItem>
    </Breadcrumb>
    <Card :bordered="false" dis-hover>
      <div class="main-content">
        <img alt="Vue logo" src="../assets/logo.png" />
        <Welcome :msg="$t('welcomeMessage')" />
      </div>
    </Card>
  </main>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { Breadcrumb, BreadcrumbItem, Icon, Card } from "view-design";

import Welcome from "@/components/Welcome";

@Component({
  components: {
    Breadcrumb,
    BreadcrumbItem,
    Icon,
    Card,
    Welcome,
  },
})
export default class Home extends Vue { }
</script>

<style lang="less" scoped>
main {
  .breadcrumb {
    padding: 10px 20px;
  }

  .ivu-card {
    padding: 20px 10px;
    .main-content {
      text-align: center;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "welcomeMessage": "Welcome to Your Vue.js App"
  },
  "zh-CN": {
    "welcomeMessage": "欢迎进入您的 Vue.js 应用"
  }
}
</i18n>
