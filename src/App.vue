<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"

const defaultLayout = "default"
const { currentRoute } = useRouter()
const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
)

</script>

<template>
    <component :is="layout">
  <div id="background">
    <img src="@/assets/logo-cne.svg" class="mx-auto h-40 object-fill" />
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition> 
    </router-view>
  </div>
  </component>
</template>

<style lang="css" scoped>

#background{
  width: 100%;
  background-color: #F4F5FA;
  /*background-image:url("@/assets/bg.svg");*/
  min-height: 90vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-attachment: fixed;
  margin:0 auto;
}


  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to{
    opacity:0;
  }

  /*
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition> 
  */
</style>
