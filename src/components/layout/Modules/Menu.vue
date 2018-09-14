<template>
  <nav class="nav">
    <ul class="nav-list">
      
      <li v-for="item in items" v-if="item[0].link_type == 'category' || item[0].link_type == 'category_cms'" class="nav-item">

        <router-link :to="{ name: item[0].link_type, params: { id_category: item[0].id }}" class="nav-link">
          {{ item[0].name }}
        </router-link>

        <ul v-if="item[0].children" class="nav-list nav-children">

          <li v-for="child in (item[0].children)" class="nav-item">
            <router-link :to="{ name: child.link_type, params: { id_category: child.id }}" class="nav-link">
              {{ child.name }}
            </router-link>
          </li>

        </ul>

      </li>

    </ul>
      

  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      items: []
    }
  },
  mounted () {
      axios('http://www.test.mirjan24.de/modules/blocktopmenu/blocktopmenu-ajax.php')
      .then(menu => menu.data)
      .then(menu => {
        this.items = menu;
      });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  position: relative;
  top:0;
  background: #fff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.nav-item {
  display: inline-flex;
}
.nav-link {
  color: #666;
  padding: .8rem;
  text-decoration: none;
  font-weight: 500;
}
.nav-link.router-link-active {
  color: #e50000;
}
.nav-children {
  position: absolute;
  width: 100%;
  background: #fff;
  top: 2.8rem;
  left: 0;
  padding: 15px 0;
  opacity: 0;
  transform: translate(0,-100%);
  transition: .6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: -1;
}
.nav-link:hover + .nav-children, .nav-children:hover {
  display: block;
  transform: translate(0,0);
  opacity: 1;
  box-shadow: 0 .125rem .4rem rgba(0,0,0,.2);
}

</style>
