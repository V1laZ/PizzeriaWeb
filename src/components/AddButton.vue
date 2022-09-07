<template>
    <button @click="$emit('btn-click')" >
        <fa class="m-2 butt" icon="fa-solid fa-plus" size="2x"/>
    </button>
</template>

<script>
    export default {
        name: 'AddButtonComponent'
    }
</script>

<style scoped>
    button {
        background-color: transparent;
        border: 3px solid rgba(255, 255, 255, 0.432);
        border-radius: 0.6rem;
        margin: 5px;
        color: rgba(255, 255, 255, 0.432);
        transition: ease 0.1s;
    }
    
    button:hover {
        border-color: rgba(255, 255, 255, 0.55);
        color: rgba(255, 255, 255, 0.55);
    }

    button:active {
        color: white;
        border-color: white;
    }
</style>