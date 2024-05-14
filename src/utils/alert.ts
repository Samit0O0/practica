import Swal from "sweetalert2";

export const alerta = (title: string, text: string, icon: string) => {
    Swal.fire({
        title,
        text,
        icon,
    });
}