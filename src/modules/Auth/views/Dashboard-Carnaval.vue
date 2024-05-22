<script setup lang="ts">
import TablaUsers from "@/views/OptionTwo.vue";
import useDashboard from '@/composables/useDashboard';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)


  
import { Bar, Pie } from 'vue-chartjs'
//import {computed } from "vue";
//import { useAuthStore } from "@/modules/Auth/stores"

//const store = computed(() => useAuthStore())

const {DatosResumen, primerBarra, PieData} = useDashboard()
</script>

<template>
  <main class="main">
    <section class="grid grid-cols-5 gap-10 mx-auto text-white fadeout text-center">
      <article class="grid grid-cols-2 gap-20 items-center content-center py-8 px-16 rounded-lg shadow-md bg-[#010c41] my-5">
              <p class="text-lg font-bold">Total de Personal</p>
              <p class="text-lg text-6xl">{{ DatosResumen.a ? DatosResumen.a[1] : 0}}</p>
        </article>
        <article class="grid grid-cols-2 gap-20 items-center content-center py-8 px-16 rounded-lg shadow-md bg-[#4285F6] my-5">
              <p class="text-lg font-bold">Total de votos</p>
              <p class="text-lg text-6xl">{{ DatosResumen.b ? DatosResumen.b[1] : 0}}</p>
        </article>
        <article class="grid grid-cols-2 gap-20 items-center content-center py-8 px-16 rounded-lg shadow-md bg-[#ECA008] my-5">
              <p class="text-lg w-30 font-bold">Votos faltantes</p>
              <p class="text-lg text-6xl">{{ DatosResumen.c ? DatosResumen.c[1] : 0}}</p>
        </article>
        <article class="grid grid-cols-2 gap-20 items-center content-center py-8 px-16 rounded-lg shadow-md bg-green-600 my-5">
              <p class="text-lg font-bold">Votos confirmados</p>
              <p class="text-lg text-6xl">{{ DatosResumen.d ? DatosResumen.d[1] : 0}}</p>
        </article>
        <article class="grid grid-cols-2 gap-20 items-center content-center py-8 px-16 rounded-lg shadow-md bg-red-500 my-5">
              <p class="text-lg font-bold">Votos anulados</p>
              <p class="text-lg text-6xl">{{ DatosResumen.e ? DatosResumen.e[1] : 0}}</p>
        </article>
    </section>

    <section class="grid grid-cols-2 gap-10 w-3/4 mx-auto my-20" >
        <article class="grid grid-cols-2 gap-10 bg-white p-10 w-border-solid border-2 border-gray-200 rounded-lg my-10">
        <Bar :data="primerBarra" :options="{responsive: true}" v-if="Object.keys(primerBarra).length > 0"/>
      </article>
      <article class="grid grid-cols-2 gap-10 bg-white p-10 w-border-solid border-2 border-gray-200 rounded-lg my-10">
        <Pie :data="PieData" :options="{responsive: true}" v-if="Object.keys(PieData).length > 0"/>
      </article>
    </section>

    <div class="col-start-2 col-end-4 w-3/4 mx-auto">
      <TablaUsers/>
   </div>
  </main>
</template>

<style scoped>
    .main{
      width: 90%;
      margin: 0 auto;
    }

    @media (max-width: 1200px){
      .main{
      display: block;
      gap: 10px;
      margin: 0px 30px;
    }
    }
</style>
