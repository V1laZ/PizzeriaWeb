<template>
    <div class="container col-lg-7 text-light">
        <h3 class="text-light"> Doručovací adresa</h3>
        <hr class="">
        <form>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="inputFirstName">Jméno</label>
                    <input type="text" class="form-control" id="inputFirstName" placeholder="Petr">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputLastName">Příjmení</label>
                    <input type="text" class="form-control" id="inputLastName" placeholder="Novák">
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Adresa</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Za Příhonem 7642">
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="inputCity">Město / Vesnice</label>
                    <input type="text" class="form-control" id="inputCity" placeholder="Loukov">
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">PSČ</label>
                    <input type="text" class="form-control" id="inputZip" placeholder="12345" >
                </div>
            </div>
            <!-- <router-link :to="{ name: 'Platba' }" ><button class="btn btn-primary mt-3">Zaplatit</button></router-link> -->
            <button @click="redirect" class="btn btn-primary mt-3">Zaplatit {{ getCelkem() }} Kč</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AdresaView',
    methods: {
        redirect() {
            this.stripe.redirectToCheckout({
                successUrl: "http://localhost:8080/?#/objednavka/success",
                cancelUrl: "http://localhost:8080",
                lineItems: this.getItems(),
                mode: "payment"
            })
        },

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
        },
        getItems() {
            let items = []
            for (let i = 0; i < this.kosik.length; i++) {
                const e = this.kosik[i]
                items.push({"price": e.priceID, "quantity": e.quantity})
            }
            return items
        }
    },
    data() {
        return {
            kosik: [],
            stripe: null,
        }
    },
    created() {
        this.kosik = this.getObjednavka()
    },
    async mounted() {
        this.stripe = await Stripe('pk_test_51LoQByKfgtR7MYIzRy6iVLuAi5A2P7j3k1noLcwTrApY4KcGm9duhPooHinjcldYgPYQEbiHBE5W7xuFsbnQ4ghA00K5IQb4my')
    }
}
</script>

<style scoped>
hr {
    border: 0;
    background-color: grey;
    height: 3px;
}

label {
    font-size: 20px;
    margin: 5px 0 5px 0;
}

input {
    margin-bottom: 0.8rem;
    background-color: rgba(255, 255, 255, 0.900);
}

</style>