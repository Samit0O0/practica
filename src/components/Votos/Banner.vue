

<template>
        <section id="banner" class="relative" v-if="Object.keys(result).length == 0">
        <article class="grid bg-[#010c41] p-30 h-96 relative z-10 rounded-r-full">
          <h2 class="text-white text-5xl font-bold">Ingrese su numero de cedula para registrar el voto.</h2>
        </article>
          <img src="@/assets/banner.svg" alt="">
    </section>
</template>

<style scoped>

/* pasarlo a tailwind */

#banner{
  position: fixed;
  width: 100%;
  height: 30vh;
  bottom: 12%;
} 

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
  
  #banner{
    bottom: 18%;
  }

  #banner article{
  width: 100%;
  h2{
    font-size:40px;
  }
}

 #banner img{
  position: absolute;
  right: 0;
  top:0;
  width: 100%;
  transform: translateY(30%);
  z-index:10;
} 

}

</style>