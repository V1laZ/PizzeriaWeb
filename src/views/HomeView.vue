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
      menuCategories: [
        {
          "id": 1,
          "name": "Pizza",
          "img": "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
        },
        {
          "id": 2,
          "name": "Burgery",
          "img": "https://www.apetitonline.cz/sites/default/files/styles/small/public/recepty/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg?h=37404b29"
        },
        {
          "id": 3,
          "name": "Přílohy",
          "img": "https://imgur.com/oIMrzal.png"
        }
      ]
    }
  },
//   methods: {
//   async fetchMenuCategories() {
//     const res = await fetch('api/categories')

//     const data = await res.json()

//     return data
//   }
// },

// async created() {
//   this.menuCategories = await this.fetchMenuCategories()
// }

}
</script>
