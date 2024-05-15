import {onMounted, ref } from "vue"

export  default () => {

    const employees = ref([])

    const GetEmployes = () => {
                   //const {data} = await Http.get("/api/users/2");
                fetch(`http://10.90.20.129:8001/api/registro`)
                .then(res => res.json())
                .then(response => employees.value = response)
    }

    /* Funciòn mamalona para validar què ìcono aparecerà segùn el estatus de voto*/


    onMounted(() => {
        GetEmployes()
    })

    return {
        employees
    }
}