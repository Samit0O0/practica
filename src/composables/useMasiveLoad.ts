import { ref } from "vue"
import {alerta} from "../utils/alert"
import Http from "@/utils/Http/index"

export default () => {
    const personas = ref([])
    const popup = ref()
    const popupStatus = ref(0)

    const GetUser = async (cedula: string) => {
        const resultado: any = personas.value.find(element => element.cedula == cedula)
        if (resultado) return alerta("Atención", "Esta cédula ya esta cargada", "info")

            try {
                const response = await Http.get(`/api/registro/grupal/search/${cedula}`);
                personas.value.push(response.data)
            } catch (error) {
                if (error.response.status != 200) return alerta("Atención", error.response.data.msg, "info")
            }
    }

    const DeleteEmpleado = (value:string) => {
        personas.value = personas.value.filter(element => element.cedula != value)
    }

    const Envio_Datos = async (e: FormDataEvent) => {

        const form = new FormData(e.currentTarget as HTMLFormElement)
        const data = {
            vote: form.get("motivo") ? false : true,
            descripcion: form.get("motivo"),
            hora_voto: form.get("hora"),
            persona_ids: personas.value.map(element => element.id)
        }

        try {
            const response = await Http.post("/api/registro/multiple-votes", data);
            alerta('Enviado', response.data.msg, 'success') 
        } catch (error) {
            const {response} = error
            alerta("error", response.data.msg, "error")
        }
        finally{
            personas.value = []
            popup.value.style.display = "none"
        }
    }

    const hidden = (e?: PointerEvent, value?: number) => {
        const target = e.target as HTMLElement
        if (e && target.tagName === "SECTION") {
            popup.value.style.display = "none"
        } else {
            if(target.tagName === "BUTTON") {
                const button = e.target as HTMLButtonElement
                if(button.name === "si")  popupStatus.value = value   
            }         
            popup.value.style.display = "grid"
        }
    }

    return {
        personas,
        GetUser,
        DeleteEmpleado,
        hidden,
        popup,
        Envio_Datos,
        popupStatus,
    }
}