<template>
    <div :key="prilohy.id" v-for="priloha in prilohy" >
        <MenuItem @incCounter="$emit('incCounter')" @decCounter="$emit('decCounter')" :item="priloha" />
    </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue';
export default {
    name: 'PrilohyView',
    emits: ['incCounter', 'decCounter'],
    components: { MenuItem, MenuItem },
    data() {
        return {
            prilohy: [
                {
                    "id": 1,
                    "name": "Hranolky",
                    "cena": 49,
                    "img": "https://imgur.com/S8azcf2.png",
                    "priceID": "price_1LoRD7KfgtR7MYIzVJx0iT62"
                }
            ]
        };
    },
    // methods: {
    //     async fetchAllPrilohy() {
    //         const res = await fetch("api/categories/3");
    //         const data = await res.json();
    //         return data.items;
    //     }
    // },
    // async created() {
    //     this.prilohy = await this.fetchAllPrilohy();
    // },
}

</script>

<style>

</style>