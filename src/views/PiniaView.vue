<!-- Stateview.vue -->
<template>
  <div class="container">
    <div class="counter-container">
      counter: {{ value.count }}
    </div>
    <div class="button-container">
      <button class="increment-button" @click="value.increment()">Increment</button>
      <button class="reset-button" @click="value.$reset()">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../Stores/Counter'
const value = useCounterStore();
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* Make the container take the full height of the viewport */
}

.counter-container {
  font-size: 35px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
}

.increment-button,
.reset-button {
  padding: 10px 15px;
  margin-right: 10px;
  font-size: 20px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.reset-button {
  background-color: #dc3545;
}
</style>
