import app from '@/plugins/app'
import '@/plugins'
import '@/assets/css/app.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'


/* import specific icons */
import { fas, faB} from '@fortawesome/free-solid-svg-icons'

library.add(fas)
library.add(faB)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
