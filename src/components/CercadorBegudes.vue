<template>
    <div>
        <h1>Cercador Begudes</h1>

        <button v-for="item in ['A', 'B', 'C', 'D', 'E']" @click="seleccionar(item)">
            {{ item }}
        </button>
        <div v-for="item in resultado">
            <InfoBeguda :drinks="item"></InfoBeguda>

        </div>

    </div>
</template>

<script>
import InfoBeguda from './infoBeguda.vue';


export default {
    name: 'CercadorBegudes',
    data() {
        return {
            resultado: []
        }
    },
    components: {
        InfoBeguda
    },
    methods: {
        seleccionar(letter) {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter)
                .then(response => response.json())
                .then(data => {
                    this.resultado = data.drinks;
                    console.log(data);
                });

        },
        seleccionFavorito(item) {
            console.log(item);

        }
    },
    computed: {

    },
    mounted() {

    }

}
</script>

<style lang="scss" scoped></style>