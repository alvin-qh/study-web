<template>
  <div class="form-group row">
    <label :for="id" class="col-form-label text-right">{{ label }}:</label>
    <select :id="id" :name="name" class="form-control" v-model="selected">
      <slot></slot>
    </select>
  </div>
</template>

<script lang="js">
import Vue from "vue"

export default Vue.extend({
  props: {
    label: {
      type: String
    },
    name: {
      type: String
    },
    value: {
      default: ""
    }
  },
  data() {
    return {
      selected: ""
    }
  },
  computed: {
    id() {
      return `form-control-${this.name}`;
    }
  },
  watch: {
    selected(val) {
      this.$emit('input', val);
    }
  }
})
</script>

<style scoped lang="less">
.form-group {
  select {
    width: 220px;
    margin-left: 10px;
  }
}
</style>
