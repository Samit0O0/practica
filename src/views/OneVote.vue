<script setup lang="ts">
import useReportes from '../composables/useOneVote';
import CardInfoUser from '../components/Votos/CardInfoUser.vue';
import FormInput from '../components/Votos/FormInput.vue';
import {obtenerHoraActual} from "@/utils/GetHora"


const { GetUser, result, hidden, popupStatus, popup, envioData} = useReportes()
</script>

<template>
  <main id="reportes">
    <section id="form">
      <section class="absolute bg-black bg-opacity-30 w-full h-full z-50 grid place-content-center top-0 left-0 cursor-pointer" @click="(e) => hidden(e)" ref="popup">
        <img class="h-90 bg-white rounded-lg fadeout" src="@/assets/msg.jpeg" alt="" v-if="popupStatus == 0">
        
        <form @submit.prevent="envioData" class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 fadeout" v-else-if="popupStatus >= 1">
            <h3 class="text-slate-900 dark:text-white text-base font-medium capitalize mx-auto p-10">{{ popupStatus == 1 ? "Ingrese la hora del voto:" : "Justifique"}}</h3>
            <input type="time" name="hora" id="" :value="obtenerHoraActual()" v-if="popupStatus == 1" required>
            <input type="text" placeholder="Ingrese el motivo..." name="motivo" maxlength="255" required v-else> 
            <button class="bg-[#ECA008] hover:bg-[#010c41] text-white font-bold py-2 px-10 rounded-3xl mx-auto block my-5">Registrar</button>
        </form>
      </section>
      <FormInput :FunGetUser="GetUser"/>
    </section>
    <section class="results my-10 grid grid-cols-2" v-if="Object.keys(result).length > 0">
      <CardInfoUser :result="result[0]" title="Datos personales" icon="fa-solid fa-user" />
      <CardInfoUser :result="result[1]" title="Ubicacion" icon="fa-solid fa-location-dot" />
      <CardInfoUser :result="result[2]" title="Registro" icon="fa-solid fa-check-to-slot" :hidden="hidden" :save="envioData"/>
    </section>

  </main>
</template>

<style scoped>
#reportes{
  width: 100%;
  min-height: 90vh;
  margin:0 auto;
}

#busqueda input:hover~button {
  background-color: #0057b3;
}

.results {
  width:80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 20px;
  margin: 30px auto;
}
</style>