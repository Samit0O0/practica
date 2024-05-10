<script setup lang="ts">

const props = defineProps<{
    result: {},
    icon: string
    title: string
    hidden?: Function
}>()


</script>

<template>
      <article class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl z-10 fade">
        <div class="grid place-content-center">
          <span class="inline-flex items-center justify-center p-2 bg-[#010c41] rounded-3xl shadow-lg w-96">
              <font-awesome-icon class="h-6 w-6 text-white" :icon='props.icon'/>
              <h2 class="mx-3 text-white">{{ title }}</h2>
          </span>
        </div>

        <div v-for="key in Object.keys(result).filter(k => k !== 'id')" v-if=" Object.keys(result).length != 1">
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight capitalize">{{key.replace(/_/g, ' ')}}</h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm capitalize">{{ result[key] }}</p>
        </div>
        
        <div v-else>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">¿Ha votado?: </h3>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">no</p>
        <div class="hg-30 grid grid-cols-2 gap-1">
          <button name="si" class=" bg-[#ECA008] hover:bg-[#010c41] text-white font-bold py-2 px-10 rounded-3xl my-8 " @click="(e) => hidden(e as MouseEvent, 1)">Registrar</button>
          <button name="si" class="bg-[#010c41] hover:bg-[#ECA008] text-white font-bold py-3 px-10 rounded-3xl my-8" @click="(e) => hidden(e as MouseEvent, 2)">No votó</button>
        </div>
        </div>
      </article>    
</template>