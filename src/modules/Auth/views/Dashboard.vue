<script setup lang="ts">
import TablaUsers from "@/views/OptionTwo.vue";
import useDashboard from '@/composables/useDashboard';
import {ref} from 'vue';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { Bar, Doughnut, Pie} from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

const { DatosResumen, primerBarra, PieData, submitHours, GetData} = useDashboard()


const ThirdArticle = ref(0)
const SecondArticle = ref(0)

</script>

<template>
  <main class="main">
    <div class="block FechaYtitle md:flex md:justify-between md:items-center">
      <h1 class="text-5xl mb-6 font-major-mono-display text-normal font-weight-normal"><strong>Análisis</strong> estadístico</h1>
      <form class="grid grid-cols-3 w-full md:w-1/4 gap-2" @submit.prevent= "submitHours">
        <input type="time" name="fechaInicio" required>
        <input type="time" name="fechaFin" required/>
        <input type="submit" value="consultar" class="bg-[#010c41] rounded-lg text-white px-8 py-2 block mx-auto ">
      </form>
    </div>
    <section class="grid grid-cols-3 gap-10 mx-auto text-white fadeout text-center">
      <article class="grid grid-cols-1 gap-2 rounded-xl bg-white text-[#010c41] p-2 shadow-lg border">
        <div class="flex gap-4 place-items-center">
          <div class="flex-1 flex flex-col gap-1 p-2">
            <span class="text-3xl tracking-tight leading-none font-extrabold">{{ DatosResumen.c ? DatosResumen.c[1] : 0 }}</span>
            <span class="text-3xs font-bold text-[#010c41]">Faltantes</span>
            <span class="text-1xs text-darkblue-400 font-extrabold">{{ DatosResumen.c ? ((DatosResumen.c[1] / DatosResumen.a[1] )* 100).toFixed(0) : 0 }}%</span>
          </div>
          <div class="flex-1 flex flex-col gap-1 p-2">
            <span class="text-3xl tracking-tight leading-none font-extrabold">{{ DatosResumen.d ? DatosResumen.d[1] : 0 }}</span>
            <span class="text-3xs font-bold text-[#010c41]">Confirmados</span>
            <span class="text-1xs text-green-500 font-extrabold">{{ DatosResumen.c ? ((DatosResumen.d[1] / DatosResumen.a[1] )* 100).toFixed(0) : 0 }}%</span>
          </div>
          <div class="flex flex-1 flex-col gap-1 p-2">
            <span class="text-3xl tracking-tight leading-none font-extrabold">{{ DatosResumen.e ? DatosResumen.e[1] : 0 }}</span>
            <span class="text-3xs font-bold text-[#010c41]">Anulados</span>
            <span class="text-1xs text-red-500 font-extrabold">{{ DatosResumen.c ? (DatosResumen.e[1] / DatosResumen.a[1] * 100).toFixed(0) : 0 }}%</span>
          </div>
        </div>
        <div class="bg-[#010c41] hover:bg-[#ECA008] p-2 rounded-lg place-items-center grid text-white">
          <div class="flex flex-col gap-1 p-2">
            <span class="text-3xl tracking-tight leading-none">{{ DatosResumen.b ? DatosResumen.b[0] : 0 }} : {{
              DatosResumen.b ? DatosResumen.b[1] : 0 }}</span>
            <span class="text-3xs font-bold">{{ DatosResumen.a ? DatosResumen.a[0] : 0 }} {{
              DatosResumen.a ? DatosResumen.a[1] : 0 }}</span>
          </div>
        </div>
      </article>

      <article class="bg-white dark:bg-slate-800 rounded-lg px-2 py-3 ring-1 ring-slate-900/5 shadow-xl z-10 fadeout border">
        <Bar :data="primerBarra" :options="{ responsive: true, indexAxis: 'y'}" v-if="SecondArticle == 0 && Object.keys(primerBarra).length > 0" />
        <Bar :data="primerBarra" :options="{ responsive: true}" v-if="SecondArticle == 1 && Object.keys(primerBarra).length > 0" />
      
          <div class="bottomTop">
          <button class="hover:bg-[#010c41]" @click="() => SecondArticle = 0" :class="SecondArticle == 0 ? 'bg-[#ECA008]' : 'bg-[#010c41]'">Horizontal</button>
          <button class="hover:bg-[#010c41]" @click="() => SecondArticle = 1" :class="SecondArticle == 1 ? 'bg-[#ECA008]' : 'bg-[#010c41]'">Vertical</button>
        </div>
        
      </article>

      <article class="bg-white dark:bg-slate-800 rounded-lg px-2 py-8 ring-1 ring-slate-900/5 shadow-xl z-10 fadeout border">
        <Doughnut :data="PieData" :options="{maintainAspectRatio: false, plugins: { legend: { position: 'left' }}}" v-if="ThirdArticle == 0 && Object.keys(PieData).length > 0"/>
          <Pie :data="PieData" :options="{maintainAspectRatio: false, plugins: { legend: { position: 'left' }}}" v-if="ThirdArticle == 1 &&  Object.keys(PieData).length > 0"/>
        <div class="bottomTop">
          <button @click="() => ThirdArticle = 0" :class="ThirdArticle == 0 ? 'bg-[#ECA008]' : 'bg-[#010c41]'">Dona</button>
          <button @click="() => ThirdArticle = 1" :class="ThirdArticle == 1 ? 'bg-[#ECA008]' : 'bg-[#010c41]'">Torta</button>
        </div>
      </article>
    </section>
    <h1 class="text-5xl mt-3 text-major-mono-display text-normal"><strong>Personal</strong> Asignados</h1>
    <div class="col-start-2 col-end-4 mx-auto">
      <TablaUsers :Reload="GetData"/>
    </div>
  </main>
</template>

<style scoped>

.bottomTop{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  height: 5vh;
}

.bottomTop button{
  border-radius: 10px;
  height: 100%;
}

.main {
  width: 90%;
  margin: 0 auto;
}
section{
    min-height: 36vh;
}

section article{
    height: 35vh;
    position: relative;
}

section article:last-child, section article:nth-child(2){
    display: grid;
    grid-template-rows: 75% 25%;
}

section article canvas{
    height: 90%!important;
    margin: 0 auto;
}

section article:last-child canvas{
    width: 90%!important;
    height: 100%!important;
    margin: 0 auto;
}

section article:last-child .bottomTop{
    margin-top: 1.2vh;
}

@media (max-width: 1200px) {
  .main>section {
    width: 100%;
    display: block;
    gap: 10px;
    margin: 0px 0px;
  }

  section article{
    margin-top: 10px;
  }



}
</style>