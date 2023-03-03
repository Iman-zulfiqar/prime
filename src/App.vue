<script setup>
import {
    ref
} from 'vue'
import { useToast } from "primevue/usetoast";
let text = ref();
let toast = useToast();
const greet= () =>{
       toast.add({severity:'success', summary: 'Prime Time', detail: text.value }); text.value='';
}
</script>

<template>
<Toast></Toast>
<div class="container">
    <span class="p-float-label">
        <InputText id="txt" type="text" v-model="text" />
        <label for="txt">text</label>
    </span>
   <Button label="Greet" @click="greet" icon="pi pi-user"></Button>
   <!-- <Button label="Submit" icon="pi pi-check" iconPos="right" /> -->
</div>

</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: sans-serif;
    text-transform: capitalize;
}
</style>
