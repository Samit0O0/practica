import {onMounted, ref } from "vue"
import Http from "@/utils/Http";
import Swal from "sweetalert2";



export default () => {
    const popup: HTMLElement = ref()
    const popupStatus = ref(0)


    const hidden = (e?: MouseEvent, value?: number) => {
        if (e && e.target.tagName === "SECTION") {
            popup.value.style.display = "none"
        } else {
            if(e.target.tagName === "BUTTON" && e.target.name === "si") popupStatus.value = value            
            popup.value.style.display = "grid"
        }

    }

    return {
        hidden,
        popupStatus,
        popup
    }
}