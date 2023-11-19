<template>
  <main>
    <Breadcrumb class="breadcrumb">
      <BreadcrumbItem to="/"> <Icon type="ios-home" />Home </BreadcrumbItem>
      <BreadcrumbItem>About</BreadcrumbItem>
    </Breadcrumb>
    <Card :bordered="false" dis-hover>
      <div class="about">
        <h1>{{ $t("about") }}</h1>
      </div>
    </Card>
  </main>
</template>

<script lang="ts">
import { Breadcrumb, BreadcrumbItem, Card, Icon } from 'view-design';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Breadcrumb,
    BreadcrumbItem,
    Icon,
    Card,
  },
})
export default class About extends Vue {}
</script>

<style lang="less" scoped>
main {
  .breadcrumb {
    padding: 10px 20px;
  }

  .about {
    text-align: center;
  }
}
</style>

<i18n>
{
  "en": {
    "about": "The App was created by Alvin powered by VueCli"
  },
  "zh-CN": {
    "about": "该应用由 Alvin 基于 VueCli 创建"
  }
}
</i18n>
