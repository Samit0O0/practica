<script setup lang="ts">
import useReportes from '../composables/useReportes';
import CardInfoUser from '../components/CardInfoUser.vue';


const { search, inputValue, insertValue, changeValue, result, hidden, popupStatus, popup, alerta} = useReportes()
</script>

<template>


  <main id="reportes">
    <section
    class="absolute bg-black bg-opacity-30 w-full h-full z-50 grid place-content-center top-0 left-0 cursor-pointer"
    @click="(e) => hidden(e)" ref="popup">
    <img class="h-90 bg-white rounded-lg fade" src="@/assets/msg.jpeg" alt="" v-if="popupStatus == 0">

    <article class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 fade" v-else-if="popupStatus == 1">
      <h3 class="text-slate-900 dark:text-white text-base font-medium capitalize mx-auto p-10">Ingrese la hora del voto:</h3>
      <input type="datetime-local" name="" id="">
      <button class=" bg-[#ECA008] hover:bg-[#010c41] text-white font-bold py-2 px-10 rounded-3xl mx-auto block my-5" @click="() => alerta('Enviado', 'se ha enviado el registro', 'success')">Registrar</button>
    </article>

    <article class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 fade" v-else-if="popupStatus == 2">
      <h3 class="text-slate-900 dark:text-white text-base font-medium capitalize mx-auto py-10">Ingrese la hora del voto:</h3>
      <input type="datetime-local" name="" id="">
      <h3 class="text-slate-900 dark:text-white text-base font-medium capitalize mx-auto p-5">Justifique:</h3>
      <input type="text" placeholder="justifique...">
      <button class=" bg-[#ECA008] hover:bg-[#010c41] text-white font-bold py-2 px-10 rounded-3xl mx-auto block my-5" @click="() => alerta('Enviado', 'se ha enviado el registro', 'success')">Registrar</button>
    </article>
  </section>

    <img alt="Vue logo" src="@/assets/logo.svg" class="mx-auto h-48" />
    <form @submit.prevent="search">
      <label>Ingrese una cedula: </label>
      <article id="busqueda">
        <select class="w-20" name="tipopersona" @change="insertValue" disabled>
          <option value="V">V-</option>
          <option value="E">E-</option>
        </select>
        <input class="rounded-lg border-2 border-green-500" type="text" name="busqueda" v-model="inputValue"
          placeholder="Ingrese la cedula" @input="changeValue">
        <button>
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
      </article>
    </form>

    <section class="results my-10" v-if="Object.keys(result).length > 0">

      <CardInfoUser :result="result[0]" title="Datos personales" icon="fa-solid fa-user" />
      <CardInfoUser :result="result[1]" title="Ubicacion" icon="fa-solid fa-location-dot" />
      <CardInfoUser :result="[result[0].id]" title="Registro" icon="fa-solid fa-check-to-slot" :hidden="hidden" />

    </section>

  </main>

  <section id="banner" v-if="Object.keys(result).length == 0">
        <article>
              <h2>Ingrese su numero de cedula para registrar el voto.</h2>
        </article>
            <img class="w-auto h-auto" src="@/assets/banner.svg" alt="">
    </section>
</template>


<style scoped>

#reportes{
  background-image:url("@/assets/bg.svg");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-attachment: fixed;
}
#banner {
  display: grid;
  position: absolute;
  width: 85%;
  height: 150px;
  grid-template-columns: 1fr 1fr;
  bottom: 270px;
  margin-left: -120px;
}

#banner article:first-child{
  background-color: #010c41;
  width: 980px;
}
#banner article{
  color: white;
  height: 80%;
  border-radius: 0% 30% 30% 0%;
  display: grid;
  place-items: center;
  padding: 30px
  
}

#banner article h2{
  font-size: 50px;
  font-weight: bold;
}

#banner article img{
  justify-items: left;
}


#banner article img{
  justify-items: left;
}


#FormContainer {
  width: 30%;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.35);
  padding: 20px;
  border-radius: 35px;
  margin-top: 20px;
}


form {
  width: 50%;
  margin: 0px auto;
}

@media screen and (max-width : 768px) {
  form {
  width: 80%;
  margin: 0px auto;
}
}

form label {
  margin-bottom: 15px;
  display: block;
  font-size: 20px;
  text-indent: 20px;
}

#busqueda {
  position: relative;
  display: flex;
}

#busqueda button {
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  border-radius: 50%;
  padding: 6px 8px;
  background-color: #0057b38e;
  border: none;
  z-index: 2;
  cursor: pointer;
  color: white;
}

#busqueda input:hover~button {
  background-color: #0057b3;
}


form .cosultar {
  background-color: #0057b3;
  margin: 30px auto;
  display: block;
  color: white;
  padding: 15px;
  width: 200px;
  border-radius: 20px;
  border: none;
  border: solid 1px;
  cursor: pointer;
  transition: .3s ease;
  margin-bottom: 20px;
}


form .cosultar:hover {
  background-color: #2cc40d;
  border-color: #ffffff;
  color: #ffffff;
  cursor: pointer;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 20px;
}



</style>