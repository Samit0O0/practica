<script setup lang="ts">
import UseEmployees from '@/composables/useEmployees';

import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';


DataTable.use(DataTablesCore);


const columns = [
  { data: 'icon' },
  { data: 'nombre_completo' },
  { data: 'cedula' },
  { data: 'cargo' },
];

const options = {
  info: "hola" 
}

const props = defineProps<{
  Reload: Function
}>()

const {employees, ConfirmDelete} = UseEmployees()
</script>

<template>
  
  <DataTable :columns="columns" :data="employees" :options="options" class="my-table">
    <thead>
      <tr>
        <th>Voto</th>
        <th>Nombre completo</th>
        <th>Cédula</th>
        <th>Direccion</th>
      </tr>
      <tbody>
      </tbody>
    </thead>
  </DataTable>

  <main>
    <div class="fadeout" >
      <div class="overflow-auto">
        <table id="Table" class="w-full mx-auto border border-gray-300 my-10 rounded-xl overflow-hidden">
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

.my-table {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #d1d5db;
  border-radius: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  overflow: hidden;
  grid-column: 1/-1;
  text-align:center;
}

.my-table tr {
  background-color: white;
  color: black;
  height: 16px;
  padding: 10px;
}

.my-table td{
  padding: 10px;
}

.my-table tbody .dt-type-numeric{
  width: 10%; 
}

.my-table th {
  background-color: #010c41;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  padding: 20px;
}

.my-table svg {
    height: 30px;
    margin: 0 auto;
}

.my-table svg.anulado {
    fill:red;
}

.my-table svg.confirmado {
    fill:green;
}

.my-table svg.invalido {
    fill:#ECA008;
}

.my-table .dt-layout-row:nth-child(even) {
    height: 30px;
    margin: 0 auto;
}

</style>