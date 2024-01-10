<template>
    <div class="child-container">
      <div class="child-box">
        <h3>Child Component</h3>
        <input type="text" v-model="dataToSend" class="input-field" />
        <br />
        <button @click="emitData" class="button">Emit Data</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref,  defineEmits } from 'vue';

  const  emit  = defineEmits(['childEvent']);
  const dataToSend = ref('');

  const emitData = () => {
    //console.log(dataToSend);
    emit('childEvent', dataToSend.value);
  };

  </script>

<style scoped>
.child-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.child-box {
  padding: 20px;
  border: 2px solid #2ecc71;
  background-color: #ecf0f1;
  border-radius: 10px;
}

.input-field {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.button {
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

  



<!-- <template>
    <div>Id: {{ post.id }}</div>
    <div>Title: {{ post.title }}</div>
    <div>Name: {{ post.name }}</div>
    <hr></hr>
</template>
    
    <script setup>

    const props = defineProps({
    post: {
    
    type: Object,
    required: true
    }
});  
    </script>  -->





<!-- <template>
    <div>
        <button @click="click">click me</button>
    </div>
</template>


<script>

setup(props,context) { 
const click=()=>{
context.emit('myEvent')
}
return {
    click
}
}
</script>

<style></style> -->





