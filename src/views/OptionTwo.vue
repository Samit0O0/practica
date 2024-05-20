<script setup lang="ts">
import UseEmployees from '@/composables/useEmployees';


const props = defineProps<{
  Reload: Function
}>()

const {employees, ConfirmDelete} = UseEmployees()
</script>

<template>
  <main>
    <div class="fadeout" >
      <div class="overflow-auto">
        <table class="w-full mx-auto border border-gray-300 my-10 rounded-xl overflow-hidden">
          <tr class="bg-[#010c41] text-white h-16">
            <th class="px-3">Voto</th>
            <th class="td-fullname">Nombre completo</th>
            <th class="px-3">Cédula</th>
            <th class="px-3">Teléfono</th>
            <th class="px-3">Oficina</th>
            <th class="px-3">Acciones</th>
          </tr>
          <tbody>
            <tr class="text-center h-16 bg-white"  v-for="persona in employees">
              <td class="px-3">
                <font-awesome-icon icon="fa-solid fa-user-clock" class="h-6 text-[#ECA008]" title="Voto pendiente" v-if="persona.voto === null" />
                <font-awesome-icon icon="fa-solid fa-user-xmark" class="h-6 text-[red]" title="Voto anulado" v-else-if="persona.voto === false" />
                <font-awesome-icon icon="fa-solid fa-user-check" class="h-6 text-green-600" title="Voto confirmado" v-else />
              </td>
              <td class="px-3">{{ persona['nombre_completo'] }}</td>
              <td class="px-3">{{ `V-${persona['cedula'].toLocaleString("es-ES")}` }}</td>
              <td class="px-3">{{ persona['telefono'] }}</td>
              <td class="px-3">{{ persona['cargo'] }}</td>
              <td class="px-3">
                <button class="bg-[#ECA008] rounded-lg text-white px-4 py-2 transition-all hover:bg-[#010c41] hover:px-6" title="Borrar voto" @click="() => ConfirmDelete(persona.id, props.Reload)" v-if="persona.voto !== null" >
                  <font-awesome-icon icon="fa-solid fa-trash-can" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  </main>
</template>


<style scope>
  .td-fullname{
    width: 300px;
  }
</style>