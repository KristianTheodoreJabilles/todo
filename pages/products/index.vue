<template>
  <div class="products">
    <ul>
      <li v-for="(product, index) in list" :key="index" @click="productDetails(product.id)">
        <span>{{ product.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      list: 'products/list',
    })
  },
  methods: {
    productDetails(id) {
      this.$router.push(`products/${id}`);
    }
  }
}
</script>

<style lang="scss">
.products {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    padding: 0;

    li {
      margin: 10px;
      list-style: none;
      background: #f1f1f1;
      padding: 20px;
      float: left;
      cursor: pointer;
      border-radius: 4px;
      font-weight: 600;
    }
  }
}
</style>