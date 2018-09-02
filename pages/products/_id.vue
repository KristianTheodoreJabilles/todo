<template>
  <div class="info">
    {{info.name}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      info: null
    }
  },
  computed: {
    ...mapGetters({
      detail: 'products/detail',
    })
  },
  created() {
    this.info = this.detail(this.$route.params.id);
  }
}
</script>

<style lang="scss">
.info {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>