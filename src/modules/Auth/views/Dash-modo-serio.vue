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

import { Bar, Pie, Doughnut } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)


//import {computed } from "vue";
//import { useAuthStore } from "@/modules/Auth/stores"

//const store = computed(() => useAuthStore())

const { DatosResumen, primerBarra, PieData } = useDashboard()

/*
  <article
        class="grid grid-cols-2 gap-20 items-center content-center py-8 px-16 rounded-lg shadow-md bg-[#4285F6] my-5">
        <p class="text-lg font-bold">Total de votos</p>
        <p class="text-lg text-7xl">{{ DatosResumen.b ? DatosResumen.b[1] : 0 }}</p>
      </article>
      <article
        class="grid grid-cols-2 gap-20 items-center content-center py-8 px-16 rounded-lg shadow-md bg-[#ECA008] my-5">
        <p class="text-lg w-30 font-bold">Votos faltantes</p>
        <p class="text-lg text-7xl">{{ DatosResumen.c ? DatosResumen.c[1] : 0 }}</p>
      </article>
      <article
        class="grid grid-cols-2 gap-20 items-center content-center py-8 px-16 rounded-lg shadow-md bg-green-600 my-5">
        <p class="text-lg font-bold">Votos confirmados</p>
        <p class="text-lg text-7xl">{{ DatosResumen.d ? DatosResumen.d[1] : 0 }}</p>
      </article>
      <article
        class="grid grid-cols-2 gap-20 items-center content-center py-8 px-16 rounded-lg shadow-md bg-red-500 my-5">
        <p class="text-lg font-bold">Votos anulados</p>
        <p class="text-lg text-7xl">{{ DatosResumen.e ? DatosResumen.e[1] : 0 }}</p>
      </article>
*/
</script>

<template>
  <main class="main">
    <section class="grid grid-cols-5 gap-10 mx-auto text-white fadeout text-center">

      <article class="bg-white dark:bg-slate-800 rounded-lg px-2 py-8 ring-1 ring-slate-900/5 shadow-xl z-10 fadeout border">
        <span class="inline-flex items-center justify-center p-2 bg-[#010c41] hover:bg-[#ECA008] rounded-3xl shadow-lg w-full">
          <font-awesome-icon class="h-6 w-6 text-white" icon='fa-solid fa-user' />
          <h2 class="mx-3 text-white">{{ DatosResumen.a ? DatosResumen.a[0] : 0 }}</h2>
        </span>
        <p class="text-[#010c41] text-lg text-7xl my-3 font-bold hover:text-[#ECA008]">{{ DatosResumen.a ? DatosResumen.a[1] : 0 }}</p>
      </article>

      <article class="bg-white dark:bg-slate-800 rounded-lg px-2 py-8 ring-1 ring-slate-900/5 shadow-xl z-10 fadeout border">
        <span class="inline-flex items-center justify-center p-2 bg-[#010c41] hover:bg-[#ECA008] rounded-3xl shadow-lg w-full">
          <font-awesome-icon class="h-6 w-6 text-white" icon='fa-solid fa-user' />
          <h2 class="mx-3 text-white">{{ DatosResumen.b ? DatosResumen.b[0] : 0 }}</h2>
        </span>
        <p class="text-[#010c41] text-lg text-7xl my-3 font-bold hover:text-[#ECA008]">{{ DatosResumen.b ? DatosResumen.b[1] : 0 }}</p>
      </article>

      <article class="bg-white dark:bg-slate-800 rounded-lg px-2 py-8 ring-1 ring-slate-900/5 shadow-xl z-10 fadeout border">
        <span class="inline-flex items-center justify-center p-2 bg-[#010c41] hover:bg-[#ECA008] rounded-3xl shadow-lg w-full">
          <font-awesome-icon class="h-6 w-6 text-white" icon='fa-solid fa-user' />
          <h2 class="mx-3 text-white">{{ DatosResumen.c ? DatosResumen.c[0] : 0 }}</h2>
        </span>
        <p class="text-[#010c41] text-lg text-7xl my-3 font-bold hover:text-[#ECA008]">{{ DatosResumen.c ? DatosResumen.c[1] : 0 }}</p>
      </article>

      <article class="bg-white dark:bg-slate-800 rounded-lg px-2 py-8 ring-1 ring-slate-900/5 shadow-xl z-10 fadeout border">
        <span class="inline-flex items-center justify-center p-2 bg-[#010c41] hover:bg-[#ECA008] rounded-3xl shadow-lg w-full">
          <font-awesome-icon class="h-6 w-6 text-white" icon='fa-solid fa-user' />
          <h2 class="mx-3 text-white">{{ DatosResumen.d ? DatosResumen.d[0] : 0 }}</h2>
        </span>
        <p class="text-[#010c41] text-lg text-7xl my-3 font-bold hover:text-[#ECA008]">{{ DatosResumen.d ? DatosResumen.d[1] : 0 }}</p>
      </article>

      <article class="bg-white dark:bg-slate-800 rounded-lg px-2 py-8 ring-1 ring-slate-900/5 shadow-xl z-10 fadeout border">
        <span class="inline-flex items-center justify-center p-2 bg-[#010c41] hover:bg-[#ECA008] rounded-3xl shadow-lg w-full">
          <font-awesome-icon class="h-6 w-6 text-white" icon='fa-solid fa-user' />
          <h2 class="mx-3 text-white">{{ DatosResumen.e ? DatosResumen.e[0] : 0 }}</h2>
        </span>
        <p class="text-[#010c41] text-lg text-7xl my-3 font-bold hover:text-[#ECA008]">{{ DatosResumen.e ? DatosResumen.e[1] : 0 }}</p>
      </article>
    </section>

    <section class="grid grid-cols-2 gap-10 w-full mx-auto my-20 graficos">
      <article class="grid grid-cols-2 gap-10 bg-white p-10 rounded-lg my-10 h-2/4">
        <Bar :data="primerBarra" :options="{ responsive: true, indexAxis: 'y' }" v-if="Object.keys(primerBarra).length > 0" />
      </article>
      <article class="grid grid-cols-2 gap-10 bg-white p-10 rounded-lg my-10">
        <Doughnut :data="PieData" :options="{ responsive: true }" v-if="Object.keys(PieData).length > 0" />
      </article>
    </section>

    <div class="col-start-2 col-end-4 w-3/4 mx-auto">
      <TablaUsers />
    </div>
  </main>
</template>

<style scoped>
.main {
  width: 90%;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .main>section {
    display: block;
    gap: 10px;
    margin: 0px 30px;
  }

  .graficos {
    width: 90%;
  }
}
</style>