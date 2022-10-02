<template>
    <div class="container col-lg-7 text-light">
        <h3 class="text-light">Objednávka přijata</h3>
    </div>
</template>

<script>
export default {
    name: 'SuccessView',
    created() {
        localStorage.clear()
        this.$emit('success')
    }
}
</script>