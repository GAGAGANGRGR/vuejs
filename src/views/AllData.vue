<template>
    <div>
      <div class="buttons-container">
        <button @click="loadData('Student Form')">Student Data</button>
        <button @click="loadData('Employe Form')">Employee Data</button>
      </div>
      <div class="data-container">
        <ul>
            
          <div v-for="(data, index) in storedData" :key="index" class="user-container">
            <router-link :to="'/alldata/user/' + (index + 1)">
            <div>{{ index + 1 }} User:</div>
        </router-link>
            <span v-for="(value, key) in data" :key="key">
              {{ key }}: {{ value }}<br />
            </span>
          </div>
        </ul>
      </div>
    </div>
    <RouterView></RouterView>
  </template>
  <!-- ------------------------------------------------------------------------------------------------------------------- -->
  <script setup>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const storedData = ref([]);
  const router = useRouter();
  const name=ref('');

  function loadData(formName) {
    name.value = formName;
    console.log('name',formName);
    storedData.value = JSON.parse(localStorage.getItem(formName)) || [];
    console.log('storedData.value',storedData.value);
    if (storedData.value ==0) {
    alert(formName+' Data is empty\nPls enter Data and submit the '+formName)
    }
  }
//   loadData('StudentForm');
  </script>
  <!-- -------------------------------------------------------------------------------------------------------- -->
  <style scoped>
  .buttons-container {
    margin-bottom: 20px;
  }
  
  .user-container {
    margin-bottom: 20px;
    margin-left: 1%;
    margin-right: 10px;
    padding: 15px;
    background-color: #e9e6e6; /* Light Red */
  }
  
  .user-header {
    font-weight: bold;
  }
  </style>
  