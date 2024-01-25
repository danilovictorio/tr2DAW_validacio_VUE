<template>
    <div>
        <img width="100px" :src='drinks.strDrinkThumb' alt="">
        <h2>{{ drinks.strDrink }}</h2>
        <button @click="afegir(drinks)">Afegir a favorits</button>
    </div>
</template>

<script>
import { useBegudesStore } from '@/stores/begudes';
    export default {
        name: 'infoBeguda',
        data() {
            return {

            }
        },
        props: {
            drinks: Object
        },
        methods: {
            afegir(drinks){
                const store = useBegudesStore();
                store.addBeguda(drinks); 
            }

        },
    }
</script>

<style lang="scss" scoped>

</style>