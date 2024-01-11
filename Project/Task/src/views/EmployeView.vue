<script setup>
import Form from '../components/FormComponent.vue'
import formData from '../FormsJSON/Employe.json'
</script>

<template>
  <Form :formData="formData" />
  <!-- <RouterLink to="/employeView/allData">All Data</RouterLink> -->
</template>

<style>
</style>