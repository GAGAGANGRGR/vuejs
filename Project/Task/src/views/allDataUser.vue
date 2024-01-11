<template>
    <div>
      <h1>User {{ userId }} Data</h1>
      <div v-if="user">
        <span v-for="(value, key) in user" :key="key">
          {{ key }}: {{ value }}<br />
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const userId = ref(null);
  const user = ref(null);
  const route = useRoute();
  const storedData = ref(JSON.parse(localStorage.getItem('userData')) || []);

  onMounted(() => {
    // Get the user ID from the route parameter
    console.log('Retrieved Data from localStorage:', localStorage.getItem('userData'));

    // userId.value = route.params.id;
      // Get the user ID from the route parameter
  userId.value = parseInt(route.params.id);
    console.log('userId.value',userId.value);

    user.value = storedData.value.find((item) => item.id === parseInt(userId.value)) || null;
    console.log('storedData', storedData.value);
    console.log('UserValue:', user.value);
  });
  </script>
  