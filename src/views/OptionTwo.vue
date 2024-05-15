<script setup lang="ts">
import UseEmployees from '@/composables/useEmployees';

const {employees} = UseEmployees()
</script>

<template>
  <main>
    <img alt="" src="@/assets/logo-cne.svg" class="mx-auto h-48" />

    <div class="fadeout h-5/6" >
      <div class="h-3/6">
        <table class="w-3/4 mx-auto border border-gray-300 my-10">
          <tr class="bg-[#010c41] text-white">
            <th class="px-3">Nombre completo</th>
            <th class="px-3">Cédula</th>
            <th class="px-3">Teléfono</th>
            <th class="px-3">Oficina</th>
            <th class="px-3">Voto</th>
          </tr>
          
          <tbody>
            <tr class="text-center bg-white" :class="persona.voto ? 'bg-green-400' : 'text-center bg-white'" v-for="persona in employees">
              <td class="px-3 py-1">{{ persona['nombre_completo'] }}</td>
              <td class="px-3 py-1">{{ persona['cedula'].toLocaleString("es-ES") }}</td>
              <td class="px-3 py-1">{{ persona['telefono'] }}</td>
              <td class="px-3 py-1">{{ persona['cargo'] }}</td>
              <td class="px-3 py-1">
                <font-awesome-icon icon="fa-solid fa-user-check" v-if="persona.voto" />
                <font-awesome-icon icon="fa-solid fa-circle-xmark"  v-else />
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  </main>
</template>