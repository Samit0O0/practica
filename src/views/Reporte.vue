<script setup lang="ts">
import Banner from '../components/Votos/Banner.vue';
import SectionFloat from '../components/Votos/SectionFloat.vue';

import { RouterLink } from 'vue-router';

</script>

<template>
  <main id="reportes">
    <section id="form">
      <SectionFloat>
        <img class="h-90 bg-white rounded-lg fadeout" src="@/assets/msg2.jpeg">
      </SectionFloat>
      <img alt="" src="@/assets/logo-cne.svg" class="mx-auto h-48" />
    
      <section class="grid grid-cols-2 w-3/4 mx-auto gap-20 my-40">
        <RouterLink to="/reporte/oneVote" class="bg-[#ECA008] hover:bg-[#010c41] text-white font-bold py-3 px-10 rounded-3xl my-8 text-center" >Registrar un voto</RouterLink>
        <RouterLink to="/reporte/masive" class="bg-[#010c41] hover:bg-[#ECA008] text-white font-bold py-3 px-10 rounded-3xl my-8 text-center">Cargar masiva</RouterLink>
      </section>
    </section>

    <Banner/>
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