<script setup lang="ts"> 

const props = defineProps<{
    text: string
}>()
</script>

<template>
    <section id="banner" class="relative">
        <article class="grid bg-[#010c41] p-30 h-96 relative z-10 rounded-r-full">
          <h2 class="text-white text-5xl font-bold te">{{ text }}</h2>
        </article>
          <img src="@/assets/banner.svg" alt="">
    </section>
</template>

<style scoped>

/* pasarlo a tailwind */

#banner{
  position: fixed;
  width: 100%;
  bottom: 0%;
  overflow: hidden;
} 

#banner article{
  width: 67%;
  place-items: center;
}

#banner article h2{
  width: 80%;
}

#banner img{
  position: absolute;
  right: 0;
  top:47%;
  width: 42%;
  transform: translateY(-44%);
}

@media (max-width: 900px) {
  
  #banner{
    bottom: 18%;
    overflow: auto;
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