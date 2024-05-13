import type { UserData } from "@/types/UserData"
import {onMounted, ref } from "vue"
import Http from "@/utils/Http";
import Swal from "sweetalert2";



export default () => {

    const result: UserData = ref({})
    const inputValue = ref('')
    const popupStatus = ref(0)
    const popup: HTMLElement = ref()

    const alerta = (title: string, text: string, icon: string) => {
        Swal.fire({
            title,
            text,
            icon,
        });
    }
    const search = async (e: FormDataEvent) => {
        e.preventDefault()
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
                    .then(data => {
                        result.value = data
                    })
            })
    }

    const insertValue = (e: any) => {
        inputValue.value = `${e.target.value}-`
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

    return {
        search,
        insertValue,
        inputValue,
        changeValue,
        result,
        hidden,
        popup,
        popupStatus,
        alerta
    }
}