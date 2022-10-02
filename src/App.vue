<template>
  <div class="container fix-nav">
    <Navbar :items_num="cartCounter" />
    <router-view @success="clearCart" @incCounter="incCartCounter" @decCounter="decCartCounter" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
},
methods: {
  incCartCounter() {
    this.cartCounter += 1
  },
  decCartCounter() {
    this.cartCounter -= 1
  },
  getItemsNum() {
    let num = 0;
    const objednavka = JSON.parse(localStorage.getItem('objednavka'))
    if (objednavka) {
        for (let i = 0; i < objednavka.length; i++) {
            num += objednavka[i].quantity;
        }
    }
    return num
  },
  clearCart() {
    this.cartCounter = 0
  }
},
data() {
  return {
    cartCounter: 0
  }
},
created() {
  this.cartCounter = this.getItemsNum()
}

}
</script>
  
<style>
  .fix-nav {
    margin-top: 3rem;
  }

</style>
  