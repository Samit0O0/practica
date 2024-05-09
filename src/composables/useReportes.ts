import type { UserData } from "@/types/UserData"
import { ref } from "vue"

export default () => {

    const result: UserData = ref({})
    const inputValue = ref('')

    const search = (e: FormDataEvent) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget as HTMLFormElement)
        if (inputValue.value.length == 0) return

        const user = {
            Nombre_Completo: "MIGUEL ANTONIO MADRIZ MEDINA",
            cedula: 6886465,
            status: "No", 
            ubicacion: "001 DIRECCIÓN GENERAL DEL DESPACHO (DGD)",
            estado: "DTTO. CAPITAL",
            municipio: "MP. BLVNO LIBERTADOR",
            parroquia: "PQ. 23 DE ENERO",
            centro: "CENTRO DE EDUCACIÓN INICIAL NACIONAL BOLÍVAR Y TOVAR",
            direccion: "SECTOR ZONA E DERECHA CALLE BELLA VISTA. IZQUIERDA CAMINO BLOQUE 33 Y 34 PEQUE#O. FRENTE CAMINO BLOQUE 35 ADYACENTE AL MODULO BARRIO ADENTRO CASA"
        }

        result.value = user
        console.log(form.get("busqueda"))
        console.log(form.get("tipopersona"))
    }

    const insertValue = (e: any) => {
        inputValue.value = `${e.target.value}-`
    }

    const changeValue = (e: any) =>  {
        const newValue = e.target.value.replace(/[^0-9]/g, "");
        const val = parseInt(newValue.slice(0, 8));
        inputValue.value = isNaN(val) ? "" : val.toLocaleString("es-ES") ;
        if (inputValue.value == "") result.value = {}
    }

    return{
        search, 
        insertValue,
        inputValue,
        changeValue,
        result
    }
}