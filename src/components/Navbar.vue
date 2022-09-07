<template>
    <div>
        <nav class="container navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" >Pizzeria </router-link>
                <div>
                    <router-link class="cart d-lg-none" :to="{ name: 'Kosik' }" ><Cart :items_num="items_num" /></router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                
                <div class="collapse navbar-collapse" id="navbarToggler">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{ name: 'Pizza' }" @click="collapseNavbar" class="nav-link" aria-current="page">Pizza</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Burgery' }" @click="collapseNavbar" class="nav-link" aria-current="page">Burgery</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Přílohy' }" @click="collapseNavbar" class="nav-link" aria-current="page">Přílohy</router-link>
                        </li>
                    </ul>
                    <div>
                        <router-link class="d-none d-lg-block" :to="{ name: 'Kosik' }" ><Cart :items_num="items_num"/></router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <br>
</template>

<script>
import Cart from './Cart.vue';
import { Collapse } from 'bootstrap';
export default {
    name: "NavbarComponent",
    components: { Cart },
    props: {
        items_num: Number
    },
    methods: {
        collapseNavbar() {
            if (window.innerWidth > 991) return
            const menuToggle = document.getElementById('navbarToggler')
            const bsCollapse = new Collapse(menuToggle)
            bsCollapse.toggle()
        },
    },
}

</script>

<style>
.cart {
    margin-right: 1.2rem;
}

</style>