'use strict';

export default carrito;
import axios from 'axios';

axios.get('https://api.mercadolibre.com/sites/MCO/search?q=telefono')
.then(() => {
    
    console.log("funciona");
})
.catch(() => {
    
    console.log("No funciona");
})