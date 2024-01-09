<script setup>
import Form from '../components/FormComponent.vue'
import formData from '../FormsJSON/Student.json'
</script>

<template>
  <Form :formData="formData" />
</template>

<style>
</style>




<!-- <script setup>
import {ref } from 'vue'
const StuData = ref({
  name: '',
  email: '',
  phno: ''
});

const submitForm = (event) => {
  event.preventDefault();
  console.log(StuData.value);
  alert("form submitted")

//   save the data to local storegae
const existingData = JSON.parse(localStorage.getItem('allStudentData')) || [];
existingData.push(StuData.value);
localStorage.setItem('allStudentData', JSON.stringify(existingData));
};

const showForm = (event) => {
  event.preventDefault();
  alert(`Entered As we discussed in the morning, you should create a common form component.Data:\nName: ${StuData.value.name}\nEmail: ${StuData.value.email}\nPhone: ${StuData.value.phno}`);
};

</script>

<template>
    <div class="form-container">
  <form class="my-form" @submit="submitform">
    <h1>Student Login</h1>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="StuData.name"/>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="StuData.email"/>
    </div>
    <div class="form-group">
      <label for="phno">Phone</label>
      <input type="number" id="phno" v-model="StuData.phno"/>
    </div>

    <button @click="submitForm" >submit</button><br>
    <button @click="showForm" >showdata</button>
  </form>
    </div>
</template>

<style scoped>

.form-container {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    margin: auto;
  }

.my-form {
  max-width: 400px;
  margin: auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
  }
  

/* Add more styles as needed */
</style> -->
