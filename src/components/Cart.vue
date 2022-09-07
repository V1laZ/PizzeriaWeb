<template>
    <button>
        <fa-layers class="fa-fw">
            <fa icon="fa-solid fa-cart-shopping" transform="grow-10"/>
            <fa-layers-text v-if="items_num > 0" class="ctr" counter :value="items_num" transform="down-15 right-16 shrink-12" position="bottom-right"></fa-layers-text>
        </fa-layers>
    </button>
</template>

<script>
    export default {
        name: 'CartComponent',
        props: {
            items_num: Number
        },
        created() {
            // console.log(items_num)
        }
    }
</script>

<style scoped>
    button {
        background-color: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.55);
        transition: ease 0.1s;
    }

    button:hover {
        color: rgba(255, 255, 255, 0.75);
    }

    .ctr {
        font-size: 2.5em;
    }

</style>