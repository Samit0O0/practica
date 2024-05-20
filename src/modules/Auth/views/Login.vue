<script setup lang="ts">  
  import FormLogin from "../components/FormLogin.vue";
  import { useLogin } from '../composables/useLogin'  
  import Banner from '@/components/Votos/Banner.vue';

  const { login, sending, error } = useLogin()
</script>

<template>
  <section>
    <div class="p-5 m-auto w-full sm:w-11/12 my-52 bg-white rounded-s-3xl rounded-b-3xl">
    <h2 class="my-4 text-2xl text-left mx-10">Iniciar Sesión</h2>
    <FormLogin
      class="p-5"
      @submit='login($event)'      
      :sending='sending'
      :error='error'
    />
  </div>
  <Banner text="Ingrese al Sistema de Gestión Automatizado de reporte de votos del Ministerio  de Economía, Finanzas y Comercio Exterior (SIGARV)"/>
  </section>
</template>


<style scoped>

div{
  z-index: 100;
  position: relative;
}

</style>