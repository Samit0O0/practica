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
        try {
            const res = await Http.get(`/api/registro/search/${cedula}`);
            result.value = res.data
        } catch (error) {
            if (error.response.status != 200) return alerta("error", error.response.data.msg, "error")
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


    const envioData = async (e: FormDataEvent) => {
        const form = new FormData(e.currentTarget as HTMLFormElement)

        const data = {
            vote: form.get("motivo") ? false : true,
            descripcion: form.get("motivo"),
            hora_voto: form.get("hora"),
            persona_id: result.value[0].id 
        }

        try {
            const response = await Http.post("/api/registro/vote", data);
            alerta('Enviado', response.data.msg, 'success')
        } catch (error) {
            const {response} = error
            alerta("error", response.data.msg, "error")
        }
        finally{
            result.value = {} as UserData
            popup.value.style.display = "none"
        }
    }

    return {
        GetUser,
        result,
        hidden,
        popup,
        popupStatus,
        alerta,
        envioData,
    }
}