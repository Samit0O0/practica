import type { UserData } from "@/types/UserData"
import {onMounted, ref } from "vue"
import Http from "@/utils/Http";
import {alerta} from "../utils/alert.ts"


export default () => {

    const result: UserData = ref({})
    const inputValue = ref('')
    const popupStatus = ref(0)
    const popup: HTMLElement = ref()
    const Persona: any = ref(0)

  
    const search = async (e: FormDataEvent) => {
        const form = new FormData(e.currentTarget as HTMLFormElement)
        let cedula: any = form.get("busqueda")
        result.value = {}
        
        if (cedula.length == 0) return

        cedula = cedula.replace(/[.V-]/g, "")

        //const {data} = await Http.get("/api/users/2");
        fetch(`http://10.90.20.129:8001/api/registro/search/${cedula}`)
            .then(res => {
                if (res.status == 404) return alerta("error", "No se encontro la cedula", "error")
                res.json()
                    .then(data => result.value = data)
            })
    }

    const changeValue = (e: any) => {
        const newValue = e.target.value.replace(/[^0-9]/g, "");
        const val = parseInt(newValue.slice(0, 8));
        if (inputValue.value.length > 0) inputValue.value = isNaN(val) ? ""  : "V-" + val.toLocaleString("es-ES");
        if (inputValue.value == "") result.value = {}
    }


    const hidden = (e?: MouseEvent, value?: number) => {
        if (e && e.target.tagName === "SECTION") {
            popup.value.style.display = "none"
        } else {
            if(e.target.tagName === "BUTTON" && e.target.name === "si") popupStatus.value = value            
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

        console.log(data.hora_voto)
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
        search,
        inputValue,
        changeValue,
        result,
        hidden,
        popup,
        popupStatus,
        alerta,
        envioData,
        obtenerHoraActual
    }
}