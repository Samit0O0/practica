import { ref } from "vue"
import {alerta} from "../utils/alert.ts"


export default () => {
    const inputValue = ref('')
    const personas: any = ref([])
    const popup: HTMLElement = ref()

    const search = (e: FormDataEvent) => {
        const form = new FormData(e.currentTarget as HTMLFormElement)
        let cedula: any = form.get("busqueda")
        if (cedula.length == 0) return
    
        cedula = cedula.replace(/[.V-]/g, "")
        const resultado: any = personas.value.find(element => element.cedula == cedula)

        if (resultado) return alerta("Atención", "Esta cédula ya esta cargada", "info")

        //const {data} = await Http.get("/api/users/2");
        fetch(`http://10.90.20.129:8001/api/registro/grupal/search/${cedula}`)
            .then(res => {
                if (res.status == 404) return alert("error")
                res.json()
                    .then(data => {
                        inputValue.value = ""
                        personas.value.push(data)
                    })
            })

    }

    const changeValue = (e: any) => {
        const newValue = e.target.value.replace(/[^0-9]/g, "");
        const val = parseInt(newValue.slice(0, 8));
        if (inputValue.value.length > 0) inputValue.value = isNaN(val) ? ""  : "V-" + val.toLocaleString("es-ES");
        if (inputValue.value == "") result.value = {}
    }

    const DeleteEmpleado = (value:string) => {
        personas.value = personas.value.filter(element => element.cedula != value)

    }



    const hidden = (e?: MouseEvent, value?: number) => {
        if (e && e.target.tagName === "SECTION") {
            popup.value.style.display = "none"
        } else {
            if(e.target.tagName === "BUTTON" && e.target.name === "si") popupStatus.value = value            
            popup.value.style.display = "grid"
        }

    }
    return {
        personas,
        search,
        inputValue,
        changeValue,
        DeleteEmpleado,
        hidden,
        popup
    }
}