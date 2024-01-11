  
<template>
    <div class="parent-container">
      <div class="parent-box">
        <h2>Parent Component</h2>
        <div class="data-container">
          <h4 class="label">Getting Data from ChildComponent:</h4>
          <p class="child-data">{{ childData }}</p>
        </div>
        <Emit @childEvent="handleChildEvent" />
      </div>
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

<style scoped>
.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.parent-box {
  padding: 40px;
  border: 4px solid #a7e2b9;
  background-color: #ecf0f1;
  border-radius: 10px;
}

.data-container {
  display: flex;
  align-items: center;
  margin-top: 10px;

}

.label {
  margin-right: 10px;
}

.child-data {
  font-weight: bold;
  color: #e74c3c;
}
</style>


