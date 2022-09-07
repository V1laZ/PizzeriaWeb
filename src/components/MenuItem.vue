<template>
    <!-- Visible only on screens wider than mobile -->
    <div class="d-none d-md-block">
        <div class="row mb-3 row-bg">
            <div class="col align-self-center col-lg-2" >
                <div>
                    <img class="item-thumbnail align-self-center mt-1 mb-1" :src=this.img >
                </div>
            </div>
            <div class="col col-xl-5 col-lg-4 mt-3">
                <h3 class="title text-light text-start pb-4 font-weight-bold" >
                    {{ name }}
                </h3>
                <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta culpa laboriosam, fugit nihil porro ab quas sint assumenda quasi aspernatur!</p>
            </div>
            <div class="col-2 col-lg-3 col-md-3 col-xl-2 align-self-center">
                <h1>{{ cena }} Kč</h1>
            </div>
            <div class="col-lg-3 col-xl-3 order-last align-self-center">
                <AddButton @btn-click="incQuantity" />
                <RemoveButton v-if="quantity > 0" @btn-click="decQuantity" />
                <p v-if="quantity > 0" class="quant">{{ quantity }}</p>
                <p class="quant" ></p> <!--fixes style issues-->
            </div>
        </div>
    </div>

    <!-- Visible only on mobile devices -->
    <div class="d-md-none m-1 mb-3">
        <div class="col align-self-center col-lg-2">
            <div>
                <img class="item-thumbnail align-self-center mt-1 mb-1" :src=this.img >
            </div>
        </div>
        <div class="col col-lg-6 mt-3">
            <h3 class="title text-light text-start pb-4 font-weight-bold" >
                {{ name }}
            </h3>
            <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta culpa laboriosam, fugit nihil porro ab quas sint assumenda quasi aspernatur!</p>
        </div>
        <div class="col d-none d-sm-block d-md-none d-lg-block d-sm-none d-md-block"></div>
        <div class="col-xs-1 align-self-center">
            <AddButton @btn-click="incQuantity" />
            <RemoveButton v-if="quantity > 0" @btn-click="decQuantity" />
            <p v-if="quantity > 0" class="quant">{{ quantity }}</p>
            <p class="quant" ></p> <!--fixes style issues-->
            <h1>{{ cena }} Kč</h1>
        </div>
    </div>
</template>

<script>
import AddButton from './AddButton.vue';
import RemoveButton from './RemoveButton.vue';
export default {
    name: "MenuItemComponent",
    emits: ['incCounter', 'decCounter'],
    props: {
        name: String,
        img: String,
        cena: Number
    },
    methods: {
        getQuantity() {
            if (localStorage.getItem('objednavka') === null) {
                return 0
            }
            const objednavka = JSON.parse(localStorage.getItem('objednavka'))
            for (let i = 0; i < objednavka.length; i++) {
                if (objednavka[i].name === this.name) {
                    return objednavka[i].quantity
                }
            }
            return 0
        },

        incQuantity() {
            let isIn = false;
            if (localStorage.getItem('objednavka') === null) {
                const objednavka = [ 
                    {
                        'name': this.name,
                        'quantity': 1,
                        'cena': this.cena
                    } ]
                localStorage.setItem('objednavka', JSON.stringify(objednavka))
            }
            else {
                const objednavka = JSON.parse(localStorage.getItem('objednavka'))
                for (let i = 0; i < objednavka.length; i++) {
                    if (objednavka[i].name === this.name) {
                        objednavka[i].quantity += 1
                        localStorage.setItem('objednavka', JSON.stringify(objednavka))
                        isIn = true;
                        break
                    }
                }
                if (!isIn) {
                    objednavka.push(
                        {
                            'name': this.name,
                            'quantity': 1,
                            'cena': this.cena
                        })
                    localStorage.setItem('objednavka', JSON.stringify(objednavka))
                }
            }

            this.quantity += 1
            this.$emit('incCounter')
        },

        decQuantity() {
            const objednavka = JSON.parse(localStorage.getItem('objednavka'))
                for (let i = 0; i < objednavka.length; i++) {
                    if (objednavka[i].name === this.name) {
                        objednavka[i].quantity -= 1
                        localStorage.setItem('objednavka', JSON.stringify(objednavka))
                        break
                    }
                }
            this.quantity -= 1
            this.$emit('decCounter')
        }
    },

    data() {
        return {
            quantity: 0
        };
    },

    created() {
        this.quantity = this.getQuantity()
    },
    components: { AddButton, RemoveButton }
}
</script>

<style scoped>
h1 {
    margin-left: 2rem;
    color: rgba(255, 255, 255, 0.432);
    display: inline;
}

.item-thumbnail {
    padding: 0.25rem;
    border-radius: 1rem;
    max-width: 100%;
    height: auto;
}

.row-bg {
    background-color: rgba(255, 255, 255, 0.062);
    border-radius: 1rem;
}

.quant {
    display: inline;
    color: rgb(108,117,125);
    font-size: 60px;
    margin-left: 1rem;
}

</style>