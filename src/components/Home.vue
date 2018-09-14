<template>
  <section class="home">
      
      {{ msg }}

  </section>
</template>

<script>
export default {
  name: 'home',
  data() {
  	return {
  		msg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officia a neque incidunt sequi, harum blanditiis dolorem dolores rerum nostrum vitae minus repellat aperiam repudiandae facilis tempora unde aliquam iste."
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
	margin-top: 5rem;
}
</style>
