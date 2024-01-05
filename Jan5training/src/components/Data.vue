<script setup>
import {ref, onMounted} from 'vue';

const dada = ref(null)

onMounted(async() => {
  const response = await fetch('https://fakestoreapi.com/products?limit=5');
  const jsondata=await response.json();
dada.value=jsondata;
})
</script>

<template>
    <div v-for="data in dada">

      <ul>
              <li>{{data.id}} {{data.title}}  </li>
      </ul>


    </div>
  </template>
