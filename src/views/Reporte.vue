<script setup lang="ts">
import useReportes from '../composables/useReportes';
import CardInfoUser from '../components/CardInfoUser.vue';


const { search, inputValue, insertValue, changeValue, result, hidden, popupStatus, popup, alerta} = useReportes()
</script>

<template>
  <main id="reportes">
    <section id="form">
      <section class="absolute bg-black bg-opacity-30 w-full h-full z-50 grid place-content-center top-0 left-0 cursor-pointer" @click="(e) => hidden(e)" ref="popup">
        <img class="h-90 bg-white rounded-lg fade" src="@/assets/msg.jpeg" alt="" v-if="popupStatus == 0">
          <article class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 fade" v-else-if="popupStatus >= 1">
            <h3 class="text-slate-900 dark:text-white text-base font-medium capitalize mx-auto p-10">{{ popupStatus == 1 ? "Ingrese la hora del voto:" : "Justifique"}}</h3>
            <input type="datetime-local" name="" id="" v-if="popupStatus == 1">
            <input type="text" placeholder="Ingrese el motivo..." name="" id="" v-else> 
            <button class="bg-[#ECA008] hover:bg-[#010c41] text-white font-bold py-2 px-10 rounded-3xl mx-auto block my-5" @click="() => alerta('Enviado', 'Se ha enviado el registro', 'success')">Registrar</button>
          </article>
      </section>
      <img alt="Vue logo" src="@/assets/logo.svg" class="mx-auto h-48" />
      <form @submit.prevent="search">
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
      <CardInfoUser :result="[result[0].id]" title="Registro" icon="fa-solid fa-check-to-slot" :hidden="hidden" />
    </section>

    

    <section id="banner" class="relative" v-if="Object.keys(result).length == 0">
        <article class="grid bg-[#010c41] p-30 h-96 relative z-10 rounded-r-full">
          <h2 class="text-white text-5xl font-bold">Ingrese su numero de cedula para registrar el voto.</h2>
        </article>
          <img src="@/assets/banner.svg" alt="">
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

/* pasarlo a tailwind */

/* #banner{
  position: relative;
  width: 100%;
  height: 30vh;
} */

#banner article{
  width: 65%;
  place-items: center;
}

#banner article h2{
  width: 80%;
}

#banner img{
  position: absolute;
  right: 0;
  top:50%;
  width: 40%;
  transform: translateY(-50%);
}

@media (max-width: 900px) {
  #banner article{
  width: 100%;
  h2{
    font-size:40px;
  }
}

/* #banner img{
  position: absolute;
  right: 0;
  top:0;
  width: 100%;
  transform: translateY(30%);
  z-index:10;
} */

}
</style>