


<script setup >
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  
  <header>
    <div>
      <nav>
        <a>
        <RouterLink to="/studentView">StudentForm</RouterLink><br>
        <RouterLink to="/employeView">EmployeForm</RouterLink>
        <RouterLink to="/emit">Emit</RouterLink>
        <RouterLink to="/PiniaView">Pinia</RouterLink>
        </a>
      </nav>
    </div>
  </header>
  <RouterView></RouterView>
</template>


<style scoped>
div {
  margin-bottom: 5%;
  
}

nav {
  background-color: #333;
  padding: 20px;
  margin-inline-start: 20%;
  margin-inline-end: 20%;
  border-radius: 90%;
  
}

a {
  text-decoration: solid;
  color: white;
  margin-right: 20px;
  display: flex;
  justify-content: space-evenly;
}

</style> 
