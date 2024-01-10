<template>
    <div>
      <h3>Child Component</h3>
      <input type="text" v-model="dataToSend" /><br>
      <button @click="emitData">EmitData</button>
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





