import {onMounted, ref } from "vue"
import Http from "@/utils/Http/index"
import Swal from "sweetalert2";
import {alerta} from "../utils/alert"

export  default () => {

    const employees = ref([])

    const GetEmployes = async () => {
                const data = await Http.get("/api/registro");
                const response = data.data
                employees.value = response
    }


    const DeleteVoto = async (id: string, GetData: Function) => {
        try{
            const response = await Http.delete(`/api/registro/delete-vote/${id}`);
            alerta('Enviado', response.data.msg, 'success')
            GetEmployes()
            GetData()
        } catch(error){
            console.log(error)
        }
}

    const ConfirmDelete = (id: string, GetData: Function) => {
        console.log(GetData)
        Swal.fire({
            title: "¿Estas seguro?",
            text: "No se podra recuperar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#010c41",
            cancelButtonColor: "#ECA008",
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) DeleteVoto(id, GetData)    
          });
    }

    onMounted(() => {
        GetEmployes()
    })

    return {
        employees,
        ConfirmDelete
    }
}