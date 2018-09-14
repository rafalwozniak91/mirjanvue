<template>
  <div id="app">
    <Header/>
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
* {
    box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background: #eee;
}
figure {
  margin: 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.row {
    margin: 0 -15px;
    display: flex;
    flex-wrap: wrap;
}
.col-1, .col-2, .col-3, .col-4, .col-5, 
.col-6, .col-7, .col-8, .col-9, .col-10 {
  padding: 0 1rem;
}
.col-1 {
  flex-basis: 10%;
}
.col-2 {
  flex-basis: 20%;
}
.col-3 {
  flex-basis: 30%;
}
.col-4 {
  flex-basis: 40%;
}
.col-5 {
  flex-basis: 50%;
}
.col-6 {
  flex-basis: 60%;
}
.col-7 {
  flex-basis: 70%;
}
.col-8 {
  flex-basis: 80%;
}
.col-9 {
  flex-basis: 90%;
}
.col-10 {
  flex-basis: 100%;
}
.relative {
  position: relative;
  z-index: 1;
}
</style>
