import type { UserData } from "@/types/votos/UserData"
import {ref } from "vue"
import Http from "@/utils/Http";
import {alerta} from "../utils/alert"


export default () => {

    const popup = ref<HTMLElement>(null)
    const result = ref({} as UserData)
    const popupStatus = ref(0)

    const GetUser = async (cedula: string) => {
        result.value = {} as UserData
        //const {data} = await Http.get("/api/users/2");
        fetch(`http://10.90.20.129:8001/api/registro/search/${cedula}`)
            .then(res => {
                if (res.status == 404) return alerta("error", "No se encontro la cedula", "error")
                res.json()
                    .then(data => result.value = data)
            })
    }




    const hidden = (e?: PointerEvent, value?: number) => {
        const target = e.target as HTMLElement
        if (e && target.tagName === "SECTION") {
            popup.value.style.display = "none"
        } else {
            if(target.tagName === "BUTTON" && target.name === "si") popupStatus.value = value            
            popup.value.style.display = "grid"
        }
    }


    const envioData = (e: FormDataEvent) => {
        const form = new FormData(e.currentTarget as HTMLFormElement)

        const data = {
            vote: form.get("motivo") ? false : true,
            descripcion: form.get("motivo"),
            hora_voto: form.get("hora"),
            persona_id: result.value[0].id 
        }

          //const {data} = await Http.get("/api/users/2");
        fetch(`http://10.90.20.129:8001/api/registro/vote`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.status == 201)  return alerta('Enviado', 'Se ha enviado el registro', 'success') 
            res.json()
            .then(response => alerta("error", response.msg, "error"))
            
        })
    }


    const obtenerHoraActual = () => {
        const fechaActual = new Date();
        // Extraer las horas, minutos y segundos
        const horas = fechaActual.getHours();
        const minutos = fechaActual.getMinutes();
        // Devolver la hora formateada
        return `${horas}:${minutos.toString().padStart(2, '0')}`;
    }

    return {
        GetUser,
        result,
        hidden,
        popup,
        popupStatus,
        alerta,
        envioData,
        obtenerHoraActual
    }
}