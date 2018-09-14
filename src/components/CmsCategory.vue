<template>
  <section class="cms-category">
      {{ $route.params.id_category }}

  </section>
</template>

<script>
export default {
  name: 'cms_category',
  props: ['id_category'],
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cms-category {
  margin-top: 5rem;
}
</style>
