  
<template>
    <div>
      <h3>Parent Component</h3>
      <div style="display: flex; align-items: center;">
        <h4 style="margin-right: 10px;">Getting Data from Child:</h4>
        <p>{{ childData }}</p>
      </div>
      <Emit @childEvent="handleChildEvent" />
    </div>
  </template>
  
  <script setup>
  import Emit from '../components/Emit.vue';
  import {ref} from 'vue'
  
  let childData = ref('');
  
  const handleChildEvent = (data) => {
    childData.value = data;
  };
  </script>

<!-- <template>
    <div>
        
        <h3>Obj Details</h3>

        <Emit v-for="post in obj" :post="post" :key="post.id"></Emit>

    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import Emit from '../components/Emit.vue'

const obj = ref([
    { id: 1, title: 'Post 1', name:'gagan' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' }
]);

</script> -->
