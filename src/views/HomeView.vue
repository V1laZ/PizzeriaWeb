<template>
  <div>
    <Menu :menuCategories="menuCategories" />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: 'HomeView',
  components: {
    Menu
},
  data() {
    return {
      menuCategories: []
    }
  },
  methods: {
  async fetchMenuCategories() {
    const res = await fetch('api/categories')

    const data = await res.json()

    return data
  }
},

async created() {
  this.menuCategories = await this.fetchMenuCategories()
}

}
</script>
