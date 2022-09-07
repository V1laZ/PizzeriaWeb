<template>
    <div :key="prilohy.id" v-for="priloha in prilohy" >
        <MenuItem @incCounter="$emit('incCounter')" @decCounter="$emit('decCounter')" :name=priloha.name :img=priloha.img :cena=priloha.cena />
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
            prilohy: []
        };
    },
    methods: {
        async fetchAllPrilohy() {
            const res = await fetch("api/categories/3");
            const data = await res.json();
            return data.items;
        }
    },
    async created() {
        this.prilohy = await this.fetchAllPrilohy();
    },
}

</script>

<style>

</style>