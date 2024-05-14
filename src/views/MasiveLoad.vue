<script setup lang="ts">
import useMasiveLoad from '@/composables/useMasiveLoad';

const { personas, search, inputValue, changeValue, DeleteEmpleado, hidden, popup} = useMasiveLoad()
</script>

<template>
    <main>
        <section class="absolute bg-black bg-opacity-30 w-full h-full z-50 grid place-content-center top-0 left-0 cursor-pointer" @click="(e) => hidden(e)" ref="popup">
            <img class="h-90 bg-white rounded-lg fadeout" src="@/assets/msg1.jpeg">
        </section>
        <img alt="" src="@/assets/logo-cne.svg" class="mx-auto h-48" />
        <form class="fadeout w-3/4 mx-auto " @submit.prevent="search">
            <label>Ingrese una cedula: </label>
            <article id="busqueda" class="relative">
                <input type="text" name="busqueda" v-model="inputValue" placeholder="Ingrese la cedula"
                    @input="changeValue">
                <button
                    class="absolute right-10 top-1/2 -translate-y-1/2 rounded-full bg-gray-700/40 px-3 py-2 text-xs text-white z-2 cursor-pointer bg-[#0057b38e]">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
            </article>
        </form>
        
        <div class="fadeout h-5/6" v-if="personas.length > 0">

            <div class="h-3/6">
                <table class="w-3/4 mx-auto border border-gray-300 my-10">
                <thead class="h-16">
                    <tr class="bg-[#010c41] text-white">
                        <th class="px-3">Nombre completo</th>
                        <th class="px-3">cedula</th>
                        <th class="px-3">Telefono</th>
                        <th class="px-3">Cargo</th>
                        <th class="px-3">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center bg-white" v-for="persona in personas">
                        <td class="px-3 py-1">{{ persona['nombre_completo'] }}</td>
                        <td class="px-3 py-1">{{ persona['cedula'] }}</td>
                        <td class="px-3 py-1">{{ persona['telefono'] }}</td>
                        <td class="px-3 py-1">{{ persona['unidad_Adscrita'] }}</td>
                        <td class="px-3 py-1">
                            <button class="bg-[red] hover:bg-[#ECA008] text-white font-bold py-2 px-10 rounded-3xl mx-auto block my-5" @click= "() => DeleteEmpleado(persona['cedula'])">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>

            <form class="grid grid-cols-2">
                <button class="bg-[#ECA008] hover:bg-[#010c41] text-white font-bold py-2 px-10 rounded-3xl mx-auto block my-5">Registrar</button>
                <input class= "" type="time" name="hora" required>
            </form>
        </div>
    </main>
</template>


<style scoped>
main{
    width: 100%;
    background-image:url("@/assets/bg.svg");
    min-height: 90vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    background-attachment: fixed;
    margin:0 auto;
}

</style>