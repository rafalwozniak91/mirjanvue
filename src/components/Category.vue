<template>
  <section class="category">
      <h1 class="category-name">{{ category.name }}</h1>
      
      <section class="products">
        <div class="row">
          <article v-for="product in category.products" class="col-2">
            <div class="product">
                
                <figure class="product-image">
                  <img :src="product.image_url">
                </figure>
                <div class="product-params">
                    <h3 class="product-name">
                      {{ product.name }}
                    </h3>
                    {{ (product.price) }}
                </div>


            </div>
            
          </article>
        </div>
      </section>
      
      <p class="category-description" v-html="category.description"></p>

  </section>
</template>

<script>
export default {
  name: 'category',
  props: ['id_category'],
  data() {
    return {
      category: null,
    }
  },
  mounted () {

    this.getCategory()

  },
  watch: {
    // call again the method if the route changes
    '$route': 'getCategory',
  },
  methods: {
    getCategory() {

      axios('http://www.test.mirjan24.de/api/categories/' + this.$route.params.id_category + '?ws_key=' + key + '&output_format=JSON')
      .then(page => page.data)
      .then(page => {
        this.getProduct(page.category);
        this.category = page.category;
      });
    },
    getProduct(category) {

      category.products = [];

      (category.associations.products).map(product => {


        axios('http://www.test.mirjan24.de/api/products/' + product.id + '?ws_key=' + key + '&output_format=JSON')
        .then(product => product.data.product)
        .then(product => {
          product.image_url = `http://www.test.mirjan24.de/${product.id_default_image}-home_custom/${product.link_rewrite}.jpg`;
          product.price = Math.round(product.price) + ' €';
          category.products.push(product);
        });     

      });

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category {
  margin-top: 5rem;
  transition: .5s ease;
}
.category-name {
  font-size: 2.5rem;
}
.product {
  background: #fff;
  box-shadow: 0 .125rem .4rem rgba(0,0,0,.2);
  border-radius: .125rem;
  margin-top: 1rem;
}
.product-name {
 text-align: center;
 font-size: 1.2rem;
}
.product-params {
  padding: 0 1rem 1rem 1rem;
}
</style>
