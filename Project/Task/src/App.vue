

<script>
import { ref, computed } from 'vue';
const a=ref('gagan')

</script>



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
}

a {
  text-decoration: solid;
  color: white;
  margin-right: 20px;
  display: flex;
}

</style> 
