import { ref } from "vue"
import {alerta} from "../utils/alert"

export default () => {
    const personas = ref([])
    const popup = ref()
    const popupStatus = ref(0)
    const GetUser = (cedula: string) => {
        let status = 200;
        const resultado: any = personas.value.find(element => element.cedula == cedula)
        if (resultado) return alerta("Atención", "Esta cédula ya esta cargada", "info")
        //const {data} = await Http.get("/api/users/2");
        fetch(`http://10.90.20.129:8001/api/registro/grupal/search/${cedula}`)
            .then(res => {
                if (res.status == 404) status = res.status
                res.json()
                    .then(data => {
                        if (res.status != 200) return alerta("Atención", data.msg, "info")
                        personas.value.push(data)
                    })
            })
    }

    const DeleteEmpleado = (value:string) => {
        personas.value = personas.value.filter(element => element.cedula != value)
    }

    const Envio_Datos = (e: FormDataEvent) => {

        const form = new FormData(e.currentTarget as HTMLFormElement)
        const data = {
            vote: form.get("motivo") ? false : true,
            descripcion: form.get("motivo"),
            hora_voto: form.get("hora"),
            persona_ids: personas.value.map(element => element.id)
        }


            //const {data} = await Http.get("/api/users/2");
        fetch(`http://10.90.20.129:8001/api/registro/multiple-votes`,{
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

    const hidden = (e?: MouseEvent, value?: number) => {
        const target = e.target as HTMLElement
        
        if (e && target.tagName === "SECTION") {
            popup.value.style.display = "none"
        } else {
            if(target.tagName === "BUTTON" && target.name === "si") popupStatus.value = value            
            popup.value.style.display = "grid"
        }
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
        personas,
        GetUser,
        DeleteEmpleado,
        hidden,
        popup,
        Envio_Datos,
        popupStatus,
        obtenerHoraActual
    }
}