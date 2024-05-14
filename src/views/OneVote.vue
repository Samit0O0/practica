<script setup lang="ts">
import useReportes from '../composables/useOneVote.ts';
import CardInfoUser from '../components/Votos/CardInfoUser.vue';


const { search, inputValue, changeValue, result, hidden, popupStatus, popup, obtenerHoraActual, envioData} = useReportes()
</script>

<template>
  <main id="reportes">
    <section id="form">
      <section class="absolute bg-black bg-opacity-30 w-full h-full z-50 grid place-content-center top-0 left-0 cursor-pointer" @click="(e) => hidden(e)" ref="popup">
        <img class="h-90 bg-white rounded-lg fadeout" src="@/assets/msg.jpeg" alt="" v-if="popupStatus == 0">
        
        <form @submit.prevent="envioData" class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 fadeout" v-else-if="popupStatus >= 1">
            <h3 class="text-slate-900 dark:text-white text-base font-medium capitalize mx-auto p-10">{{ popupStatus == 1 ? "Ingrese la hora del voto:" : "Justifique"}}</h3>
            <input type="time" name="hora" id="" :value="obtenerHoraActual()" maxValue="14:00:00" v-if="popupStatus == 1" required>
            <input type="text" placeholder="Ingrese el motivo..." name="motivo" maxlength="255" required v-else> 
            <button class="bg-[#ECA008] hover:bg-[#010c41] text-white font-bold py-2 px-10 rounded-3xl mx-auto block my-5">Registrar</button>
          </form>
      </section>
      <img alt="" src="@/assets/logo-cne.svg" class="mx-auto h-48" />
    
      <form class="fadeout" @submit.prevent="search">
      <label>Ingrese una cedula: </label>
      <article id="busqueda" class="relative">
        <input type="text" name="busqueda" v-model="inputValue"
          placeholder="Ingrese la cedula" @input="changeValue">   
          <button class="absolute right-10 top-1/2 -translate-y-1/2 rounded-full bg-gray-700/40 px-3 py-2 text-xs text-white z-2 cursor-pointer bg-[#0057b38e]">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </article>
      </form>
    </section>
    <section class="results my-10 grid grid-cols-2" v-if="Object.keys(result).length > 0">
      <CardInfoUser :result="result[0]" title="Datos personales" icon="fa-solid fa-user" />
      <CardInfoUser :result="result[1]" title="Ubicacion" icon="fa-solid fa-location-dot" />
      <CardInfoUser :result="[result[0].id]" title="Registro" icon="fa-solid fa-check-to-slot" :hidden="hidden" :save="envioData"/>
    </section>

  </main>
</template>

<style scoped>
#reportes{
  width: 100%;
  background-image:url("@/assets/bg.svg");
  min-height: 90vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-attachment: fixed;
  margin:0 auto;
}

#busqueda input:hover~button {
  background-color: #0057b3;
}

#form{
  width: 80%;
  margin:0 auto;
}

.results {
  width:80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 20px;
  margin: 30px auto;
}
</style>