<script setup lang="ts">
import useReportes from '../composables/useReportes';
import CardInfoUser from '../components/CardInfoUser.vue';

const { search, inputValue, insertValue, changeValue, result } = useReportes()

</script>

<template>
  <main id="reportes">
    <img alt="Vue logo" src="@/assets/logo.svg"  class="mx-auto h-48"/>  
    <form @submit.prevent="search">
      <label>Ingrese una cedula: </label>
      <article id="busqueda">
        <select class="w-20" name="tipopersona" @change="insertValue">
          <option value="">seleccionar</option>
          <option value="V">V</option>
          <option value="E">E</option>
        </select>
        <input class="rounded-lg border-2 border-green-500" type="text" name="busqueda" v-model="inputValue" placeholder="Ingrese la cedula" @input="changeValue">
        <button>
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>

        <div id="globo">
          <ul>
            <li>No escribas</li>
            <li>Sin letras</li>
            <li>No escribas</li>
            <li>Sin letras</li>
          </ul>
        </div>
      </article>
    </form>

    <section class="results my-10" v-if="Object.keys(result).length > 0">

      <CardInfoUser :result="result[0]" title="Datos personales" icon="fa-solid fa-user"/>
      <CardInfoUser :result="result[1]" title="Ubicacion" icon="fa-solid fa-location-pin"/>
      <CardInfoUser :result="[result[0].id]" title="Registro" icon="fa-solid fa-check-to-slot"/>

    </section>

  </main>
</template>


<style scoped>
#reportes {
  height: 90vh;
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

form label {
  margin-bottom: 15px;
  display: block;
  font-size: 20px;
  text-indent: 20px;
}

#globo {
  position: absolute;
  top: -40px;
  opacity: 0;
  right: -100px;
  transition: .5s ease;
  border: 1px solid rgb(196, 196, 196);
}

#busqueda {
  position: relative;
  display: flex;
}

#busqueda button {
  position: absolute;
  right: 30px;
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

#busqueda input:hover~#globo {
  opacity: 1;
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

.results{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 20px;
}

.fade {
  -webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
  animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}

@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0px);
    opacity: 1;

  }
}

@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>