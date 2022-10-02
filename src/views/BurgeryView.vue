<template>
    <div :key="burgers.id" v-for="burger in burgers" >
        <MenuItem @incCounter="$emit('incCounter')" @decCounter="$emit('decCounter')" :item="burger" />
    </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'
export default {
    name: 'BurgeryView',
    emits: ['incCounter', 'decCounter'],
    components: { MenuItem },
    data() {
        return {
            burgers: [
                {
                    "id": 1,
                    "name": "El Capone",
                    "cena": 159,
                    "img": "https://imgur.com/EGBaniC.png",
                    "priceID": "price_1LoRCdKfgtR7MYIzCo3GOQ0M"
                },
                {
                    "id": 2,
                    "name": "The Grill Thrill",
                    "cena": 159,
                    "img": "https://imgur.com/7yc9VGG.png",
                    "priceID": "price_1LoRCuKfgtR7MYIzdct3MVKO"
                }
            ]
        };
    },
    // methods: {
    //     async fetchAllBurgers() {
    //         const res = await fetch("api/categories/2");
    //         const data = await res.json();
    //         return data.items;
    //     }
    // },
    // async created() {
    //     this.burgers = await this.fetchAllBurgers();
    // },
}


</script>

<style>

</style>