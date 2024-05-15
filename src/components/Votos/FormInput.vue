<script setup lang="ts">
import {ref } from "vue"

const inputValue = ref('')

const props = defineProps<{
    FunGetUser: Function
}>()

const search = (e: FormDataEvent) => {
        const form = new FormData(e.currentTarget as HTMLFormElement)
        let cedula: any = form.get("busqueda")
        if (cedula.length == 0) return
        cedula = cedula.replace(/[.V-]/g, "")
        props.FunGetUser(cedula)
        inputValue.value = ""
    }

const changeValue = (e: any) => {
        const newValue = e.target.value.replace(/[^0-9]/g, "");
        const val = parseInt(newValue.slice(0, 8));
        if (inputValue.value.length > 0) inputValue.value = isNaN(val) ? ""  : "V-" + val.toLocaleString("es-ES");
        if (inputValue.value == "") result.value = {}
    }
</script>

<template>
  <form class="fadeout w-3/4 mx-auto" @submit.prevent="search">
    <label>Ingrese una cedula: </label>
    <article id="busqueda" class="relative">
      <input
        type="text"
        name="busqueda"
        v-model="inputValue"
        placeholder="Ingrese la cedula"
        @input="changeValue"
      />
      <button class="absolute right-10 top-1/2 -translate-y-1/2 rounded-full bg-gray-700/4 px-3 py-2 text-xs text-white z-2 cursor-pointer bg-[#0057b38e]">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
    </article>
  </form>
</template>
