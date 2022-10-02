<template>
    <div :key="pizzas.id" v-for="pizza in pizzas" >
        <MenuItem @incCounter="$emit('incCounter')" @decCounter="$emit('decCounter')" :item="pizza" />
    </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'
export default {
    name: "PizzaView",
    components: { MenuItem },
    emits: ['incCounter', 'decCounter'],
    data() {
        return {
            pizzas: [
                {
                    "id": 1,
                    "name": "Margherita",
                    "cena": 139,
                    "img": "https://imgur.com/DfAfC2J.png",
                    "priceID": "price_1LoQEVKfgtR7MYIzgjjbb2RO"
                },
                {
                    "id": 2,
                    "name": "Salami",
                    "cena": 149,
                    "img": "https://imgur.com/bMF6Tsa.png",
                    "priceID": "price_1LoQEyKfgtR7MYIzINnNofjT"
                }
            ],
        };
    },
    // methods: {
    //     async fetchAllPizzas() {
    //         const res = await fetch("api/categories/1");
    //         const data = await res.json();
    //         return data.items;
    //     },
    // },
    
    // async created() {
    //     this.pizzas = await this.fetchAllPizzas();
    // },
}
</script>
