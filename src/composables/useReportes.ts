import type { UserData } from "@/types/UserData"
import { ref } from "vue"
import Http from "@/utils/Http";


export default () => {

    const result: UserData = ref({})
    const inputValue = ref('')

    const search = async (e: FormDataEvent) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget as HTMLFormElement)
        let cedula: any = form.get("busqueda")
        result.value = {}

        if (cedula.length == 0) return

        cedula = cedula.replace(/[.]/g, "")

        //const {data} = await Http.get("/api/users/2");
        fetch(`http://10.90.20.129:8001/api/registro/search/${cedula}`)
            .then(res => {
                if(res.status == 404) return alert("No se encontro el usuario")
                
                res.json()
                .then(data => result.value = data)
            })
            
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