<script setup>
import Data from './components/Data.vue'

import {
    ref,
    onMounted
} from 'vue';

const bol = ref(false);

function click() {
    bol.value = !bol.value
}

</script>


<template>
<header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

 

    
    
    <button @click="click" >show API Data</button>
</header>

<div v-if="bol">
    <Data />
</div>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
