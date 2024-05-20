<script setup lang="ts">
import useMasiveLoad from '@/composables/useMasiveLoad';
import FormInput from '../components/Votos/FormInput.vue';
import {obtenerHoraActual} from "@/utils/GetHora"

const { personas, DeleteEmpleado, hidden, popup, GetUser, Envio_Datos, popupStatus} = useMasiveLoad()
</script>

<template>
    <main>
        <section class="absolute bg-black bg-opacity-30 w-full h-full z-50 grid place-content-center top-0 left-0 cursor-pointer" @click="(e) => hidden(e)" ref="popup">
            <img class="h-90 bg-white rounded-lg fadeout" src="@/assets/msg1.jpeg" v-if="popupStatus == 0">
        
        <form @submit.prevent="Envio_Datos" class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 fadeout" v-else-if="popupStatus >= 1">
            <h3 class="text-slate-900 dark:text-white text-base font-medium capitalize mx-auto p-10">{{ popupStatus == 1 ? "Ingrese la hora del voto:" : "Justifique"}}</h3>
            <input type="time" name="hora" id="" :value="obtenerHoraActual()" v-if="popupStatus == 1" required>
            <input type="text" placeholder="Ingrese el motivo..." name="motivo" maxlength="255" required v-else> 
            <button class="bg-[#ECA008] hover:bg-[#010c41] text-white font-bold py-2 px-10 rounded-3xl mx-auto block my-5">Registrar</button>
        </form>
        </section>

        <FormInput :FunGetUser="GetUser"/>

        <div class="fadeout h-5/6" v-if="personas.length > 0">

            <div class="h-3/6">
                <table class="w-3/4 mx-auto border border-gray-300 my-10">
                <thead class="h-16">
                    <tr class="bg-[#010c41] text-white ">
                        <th class="px-3">Nombre completo</th>
                        <th class="px-3">cedula</th>
                        <th class="px-3">Telefono</th>
                        <th class="px-3">Cargo</th>
                        <th class="px-3">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center bg-white capitalize" v-for="persona in personas">
                        <td class="px-3 py-1">{{ persona['nombre_completo'] }}</td>
                        <td class="px-3 py-1">V-{{ persona['cedula'].toLocaleString("es-ES")}}</td>
                        <td class="px-3 py-1">{{ persona['telefono'] }}</td>
                        <td class="px-3 py-1">{{ persona['unidad_Adscrita'] }}</td>
                        <td class="px-3 py-1">
                            <button class="bg-red-600 hover:bg-[#ECA008] text-white font-bold py-2 px-6 rounded-3xl mx-auto block my-5" @click= "() => DeleteEmpleado(persona['cedula'])">
                                <font-awesome-icon icon="fa-solid fa-trash" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
              
            <div class="w-1/4 hg-30 grid grid-cols-2 gap-1 mx-auto">
            <button name="si" class=" bg-[#ECA008] hover:bg-[#010c41] text-white font-bold py-2 px-10 rounded-3xl my-8 " @click="(e) => hidden(e as MouseEvent, 1)">Registrar</button>
            <button name="si" class="bg-[#010c41] hover:bg-[#ECA008] text-white font-bold py-3 px-10 rounded-3xl my-8" @click="(e) => hidden(e as MouseEvent, 2)">No votos</button>
            </div>
        </div>
    </main>
</template>
