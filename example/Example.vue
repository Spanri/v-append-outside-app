<template>
  <div id="example" class="example">
    <div v-moving-panels="options" class="example__parent">
      <div class="example__child 1 v-splitter-after">Первый блок</div>
      <div class="example__child 2 v-splitter-after">Второй блок</div>
      <div class="example__child 3">Третий блок</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Example",

  data() {
    return {
      options: {
        isActive: true,
        direction: "horizontal",
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.example {
  &__parent {
    width: 100%;
    height: 100%;
    display: inline-flex;
  }

  &__child {
    width: 100%;
    border: 1px solid palevioletred;
  }
}
</style>
