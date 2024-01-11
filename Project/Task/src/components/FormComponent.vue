<script setup>
import { defineProps, ref } from 'vue';
import { useRouter } from 'vue-router';

// Define the props passed to the component
const props =   defineProps(['formData']);

console.log(props.formData);

// Assign formData prop to a variable formData
const formData = props.formData;
console.log(formData);

const router = useRouter()
//----------------------------------------Day3-Createing dynamic refs for input values--------------------------------
const inputValues = {};
formData.input.forEach(input => {
    inputValues[input.name] = ref(''); // Initialize each input value with a reactive reference
});
console.log(inputValues)

//variables used in templet tag 
let storedData=ref([]);
storedData.value = JSON.parse(localStorage.getItem(formData.name)) || [];
const flag = ref(false);
const flag1 = ref(false);

//--------------------------------------------Day3-------------------------------------------------------------------


const handleSubmit = () => {
    console.log("submit")
    const submittedData = {}; // Create an empty object to store submitted data

    // Collect submitted data from form inputs
    formData.input.forEach(input => {
        submittedData[input.name] = inputValues[input.name].value;
    });

    // Retrieve existing data from local storage or use an empty array
    //  all the entred data is stored in the storedata(its in array)
    // storedData.value = JSON.parse(localStorage.getItem(formData.name)) || [];
    localStorage.setItem('submittedData', JSON.stringify(submittedData));
    storedData.value.push(submittedData);
    localStorage.setItem(formData.name, JSON.stringify(storedData.value));
    console.log(submittedData);
}; 

//--------------------------------------------------------------------------------------------------------------------------
</script>

     <!-- ------------------------------------------------TEMPLATE TAG----------------------------------------------------------- -->

<template>
    <!-- Display form container, title, and form -->
    <div class="formContainer">
        <h1>{{ formData.name }} </h1>

        <form @submit.prevent="handleSubmit">


            <div v-for="input in  formData.input ">
                <label> {{ input.name }}:</label>
                <input v-model="inputValues[input.name].value" required />
            </div>
            <div>
                <input type="submit" value="submit" />

            </div>
        </form>
        <!-- <button @click="showNames">ShowAllNames</button> -->
        <button @click="router.push(`/alldata`)">Show All Data</button>
    </div>

</template>

<!-- ----------------------------------------------------------------------------------------------------------- -->

<style>
.formContainer {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
}

.formGroup {
    margin-bottom: 15px;
}

label {
    margin-bottom: 5px;
    color: #555;
    font-weight: bold;
}

input,
button {
    margin-top: 1%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}

input[type="submit"],
button {
    margin-top: 2%;
    background-color: #0df064;
    color: #fff;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #e64708;
}

button:hover {
    background-color: #e64708;
}

.nameItem {
    margin-bottom: 10px;
    font-weight: bold;
    color: #0c0c0c;
    padding: 15px;
    border: 1px solid #3d3c3c;
    border-radius: 4px;
    background-color: #ececec;
    width: 15%;
}
</style>