    <template>
        <h3>current vol:{{ v }}</h3>
    <div>
<button @click="v+=2">increasevolume</button>
<button @click="v-=2">decreasevolume</button>
    </div>
    </template>

    <script setup>
    import { ref, watch } from 'vue';
    
        const v = ref(0);
        watch(v, async (iv, dv) => {
                if(iv>dv&&iv==16){
                    console.log('damage');
                    alert('damage')
                }
        })
             
    </script>
