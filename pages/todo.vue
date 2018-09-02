<template>
  <section class="todo">
    This is my todo page!
  </section>
</template>

<script>
import mixin from '~/mixins/mixin';

export default {
  mixins:[mixin],
  mounted() {
    this.welcome();
  }
}
</script>