<template>
    <div :key="pizzas.id" v-for="pizza in pizzas" >
        <MenuItem @incCounter="$emit('incCounter')" @decCounter="$emit('decCounter')" :name=pizza.name :img=pizza.img :cena=pizza.cena />
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
            pizzas: [],
        };
    },
    methods: {
        async fetchAllPizzas() {
            const res = await fetch("api/categories/1");
            const data = await res.json();
            return data.items;
        },
    },
    
    async created() {
        this.pizzas = await this.fetchAllPizzas();
    },
}
</script>
