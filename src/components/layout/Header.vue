<template>
  <header class="header">
    <div class="container relative">
      <div class="row">
        <figure class="col-2">
            <img src="./../../assets/logo.png" class="logo">
        </figure>
        <Menu class="col-10"></Menu>
      </div>
    </div>
  </header>
</template>

<script>

import Menu from '@/components/layout/Modules/Menu'

export default {

  name: 'Header',
  components: {
    Menu
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: relative;
  box-shadow: 0 .125rem .4rem rgba(0,0,0,.2);
  background: #fff;
  z-index: 100;
  padding-top: .5rem;
}
.logo {
  position: relative;
  background: #fff;
}

</style>
