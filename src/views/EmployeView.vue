<script setup>
import Form from '../components/FormComponent.vue'
import formData from '../FormsJSON/Employe.json'
// <!-- --------------------------------------FOR PINIA------------------------------------------------------------------ -->
import {useCounterStore} from '../Stores/Counter'
const value=useCounterStore();
</script>

<template>
  <Form :formData="formData" />
  <!-- --------------------------------------FOR PINIA------------------------------------------------------------------ -->
  <div >
      <div class="button-container">counter:{{ value.count }}</div>
    <button class="reset-button" @click="value.$reset()">ResetValue</button>
  </div>

</template>

<style>

.counter-container {
  font-size: 24px;
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
  font-size: 16px;
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