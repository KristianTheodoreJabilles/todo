<template>
  <section class="container">
    <div>
      Search Results
    </div>
  </section>
</template>

<script>
import mixin from '~/mixins/mixin';

export default {
  mixins:[mixin],
  layout: 'search',
  mounted() {
    this.welcome();
  }
}
</script>