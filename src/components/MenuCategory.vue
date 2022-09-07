<template>
    <router-link :to="{ name: menuCategoryName}" >
        <div>
            <img class="category-thumbnail menu-category" :src=menuCategoryImg >
            <h4 class="title text-center mt-3 mb-4 mb-md-5 pb-4 pb-md-0 font-weight-bold" >
                {{ menuCategoryName }}
            </h4>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'MenuCategoryComponent',
    props: {
        menuCategoryName: String,
        menuCategoryImg: String,
    },
    methods: {
    }
}
</script>

<style scoped>
a {
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
}

a:hover {
    color: rgba(255, 255, 255, 0.830);
}

.menu-category {
    transition: 0.2s;
}

.menu-category:hover {
    transform: scale(1.1);
}

.category-thumbnail {
    padding: 0.25rem;
    border-radius: 1rem;
    max-width: 100%;
    height: auto;
}


</style>