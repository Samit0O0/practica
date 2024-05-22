<script setup lang="ts">
import Http from '@/utils/Http';
import {alerta} from '@/utils/alert';
import {ref} from "vue"

const frase = ref("o arrasta tu exel")

const SendFile = (e: FormDataEvent) => {
    const form = new FormData(e.currentTarget as HTMLFormElement)
    const {name} : any = form.get("fileExcel")
    const ext = name.split(".")[name.split(".").length - 1]
    
    if(ext !== "csv") return alerta("Error", "Solo son permitidos los archivos .CSV", "info")
    senddata(form)
}


const senddata = async (form: FormData) => {
    try {
        const response = await Http.post("/api/registro/load-excel", form)
        console.log(response.data)
        frase.value = "o arrasta tu exel"
        if(response.status == 200) return alerta("Correcto", "Se ha importado correctamente el archivo", "success")
    } catch (error) {
        console.log(error)
    }
}

const changueName = (e: any) => {
    const archivo = e.target.files[0]
    frase.value = archivo.name
}


const sendMessage = (e: FormDataEvent) => {
    const form = new FormData(e.currentTarget as HTMLFormElement)
    const data = {
        msg: form.get("msg"),
        phone: form.get("phone")
    }

    fetch("http://10.90.20.99:3000", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    })
}
</script>


<template>

    <div class="md:grid md:grid-cols-3 md:gap-6 md:w-3/4 mx-auto">
        <div class="p-4">
            <h3 class="text-lg font-medium text-gray-900">Exportar personal</h3>
            <p class="mt-1 text-sm text-gray-600">Subida de exel de datos masivos</p>
        </div>
        <form class="p-5 border rounded shadow p-5 border rounded shadow col-span-2" @submit.prevent="SendFile">
            <div class="p-5 relative border-4 border-dotted border-gray-300 rounded-lg bg-white my-3">
                <svg class="text-[#010c41] w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <div class="input_field flex flex-col w-max mx-auto text-center">
                    <label>
                        <input class="text-sm cursor-pointer w-36 hidden" name="fileExcel" type="file" accept=".csv" @change="changueName" required/>
                        <div
                            class="text bg-[#ECA008] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                            Seleccionar</div>
                    </label>
                    <div class="title text-[#010c41] uppercase my-2">{{ frase }}</div>
                </div>
            </div>
            <button type="submit" class="btn bg-[#010c41] text-white hover:bg-[#ECA008] w-2/4 mx-auto block">Enviar</button>
        </form>
        <div class="hidden sm:block">
            <div class="py-8">
                <div class="border-t border-gray-200"></div>
            </div>
        </div>
    </div>

    <div class="md:grid md:grid-cols-3 md:gap-6 md:w-3/4 mx-auto">
        <div class="p-4">
            <h3 class="text-lg font-medium text-gray-900">Exportar personal</h3>
            <p class="mt-1 text-sm text-gray-600">Subida de exel de datos masivos</p>
        </div>
        <form class="p-5 border rounded shadow p-5 border rounded shadow col-span-2" @submit.prevent="sendMessage">
            <div class="p-5 relative border-4 border-dotted border-gray-300 rounded-lg bg-white my-3">
               <input class="my-5" type="text" placeholder="phone" name="phone" required/>
               <input type="text" placeholder="mensaje" name="msg" required/>
            </div>
            <button type="submit" class="btn bg-[#010c41] text-white hover:bg-[#ECA008] w-2/4 mx-auto block">Enviar</button>
        </form>
        <div class="hidden sm:block">
            <div class="py-8">
                <div class="border-t border-gray-200"></div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>