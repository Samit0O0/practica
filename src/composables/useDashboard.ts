import {onMounted, ref} from "vue"
import Http from "@/utils/Http/index"
import {alerta} from "@/utils/alert"
import {obtenerHoraActual} from "@/utils/GetHora"

export default () => {
    const DatosResumen = ref({} as any)
    const primerBarra = ref({} as any)
    const PieData = ref({} as any);

    const GetData = async (hora_inicio?: string, hora_fin?: string) => {
        const url = hora_inicio && hora_fin ? `/api/registro/count/${hora_inicio}/${hora_fin}` : `/api/registro/count`
        const response = await Http.get(url);
        DatosResumen.value = response.data

        primerBarra.value = {
            labels: [response.data.a[0], response.data.b[0], response.data.c[0], response.data.d[0], response.data.e[0]],
            datasets: [{ 
              label: 'Total',
              data: [response.data.a[1], response.data.b[1], response.data.c[1], response.data.d[1], response.data.e[1]],
              backgroundColor: ["#ECA008"],
          }],
          }

        PieData.value = {
          labels: [response.data.a[0], response.data.b[0], response.data.c[0], response.data.d[0], response.data.e[0]],
          datasets: [{
            label: 'Vote Results',
            data: [response.data.a[1], response.data.b[1], response.data.c[1], response.data.d[1], response.data.e[1]],
            backgroundColor: [
              '#ECA008',
              "#010c41",
              '#4285F6',
              'red',
              "green",
            ],
        
          }]
        }
}

const submitHours = async (e: FormDataEvent) => {

  const form = new FormData(e.currentTarget as HTMLFormElement)
  
  
  const data =  {
    hora_inicio: form.get("fechaInicio"),
    hora_fin: form.get("fechaFin")
  }
  GetData(data.hora_inicio as string, data.hora_fin as string)
}

        onMounted(() => {
            GetData()
        })


    return{
        DatosResumen,
        primerBarra,
        PieData,
        submitHours,
        obtenerHoraActual,
        GetData
      }
}