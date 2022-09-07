<template>
    <div :key="burgers.id" v-for="burger in burgers" >
        <MenuItem @incCounter="$emit('incCounter')" @decCounter="$emit('decCounter')" :name=burger.name :img=burger.img :cena=burger.cena />
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
            burgers: []
        };
    },
    methods: {
        async fetchAllBurgers() {
            const res = await fetch("api/categories/2");
            const data = await res.json();
            return data.items;
        }
    },
    async created() {
        this.burgers = await this.fetchAllBurgers();
    },
}


</script>

<style>

</style>