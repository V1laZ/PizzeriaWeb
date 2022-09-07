<template>
    <div class="row">
        <div class="col-6 col-lg-3 mb-2" :key="menuCategory.id" v-for="menuCategory in menuCategories" >
            <MenuCategory :menuCategoryName=menuCategory.name :menuCategoryImg=menuCategory.img />
        </div>
    </div>
</template>

<script>
import MenuCategory from './MenuCategory.vue';
export default {
    name: "MenuComponent",
    props: {
        menuCategories: Array
    },
    components: {
        MenuCategory
}
}
</script>

