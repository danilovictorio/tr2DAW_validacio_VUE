<template>
    <div>

        <h1>Begudes Favorites</h1>
        <ul>
        <li v-for="item in favoritos" :key="item.id">{{ item.strDrink }}</li>
    </ul>
        
    </div>
</template>

<script>
import { useBegudesStore } from '@/stores/begudes';

export default {

    name: 'BegudesFavorites',
    setup() {
        const store = useBegudesStore();
        return {
            favoritos: store.getArrayBegudes
        }
    }
}
</script>

<style lang="scss" scoped></style>