<template>
    <div class="d-flex justify-content-center" v-if="kosik.length == 0" >
        <h1 class="text-secondary">Nic tu není :(</h1>
    </div>
    <div class="container box col-lg-7" v-if="kosik.length > 0" >
        <div class="d-flex" :key="kosik.name" v-for="item in kosik">
            <p class="text-light">{{ item.quantity }}x</p>
            <p class="text-light me-auto">{{ item.name }}</p>
            <p class="text-light">{{ item.cena * item.quantity}} Kč</p>
        </div>
        <hr class="container">
        <div class="d-flex">
            <p class="text-light me-auto">Celkem</p>
            <p class="text-light">{{ getCelkem() }} Kč</p>
        </div>
    </div>
    <div class="container col-lg-7 mt-4" v-if="kosik.length > 0" >
        <router-link :to="{ name: 'Adresa' }" ><button type="button" class="btn btn-primary">Objednat</button></router-link>
    </div>
</template>

<script>
    export default {
        name: "CartView",
        methods: {
            getObjednavka() {
                const objednavka = JSON.parse(localStorage.getItem('objednavka'))
                if (!objednavka) {
                    return []
                }
                return objednavka.filter(item => item.quantity > 0)
            },
            getCelkem() {
                let celkemCena = 0;
                for (let i = 0; i < this.kosik.length; i++) {
                    const e = this.kosik[i];
                    celkemCena += e.cena * e.quantity
                }
                return celkemCena
            }
        },
        data() {
            return {
                kosik: [],
            }
        },
        created() {
            this.kosik = this.getObjednavka()
        }
    }
</script>

<style scoped>
.box {
    border: 4px solid rgba(255, 255, 255, 0.26);
    border-radius: 1rem;
}

p {
    display: inline;
    margin: 1rem;
    font-size: 22px;
}


hr {
    border: 0;
    background-color: grey;
    height: 3px;
    width: 97%;
}

</style>